"use server";

import {neon} from "@neondatabase/serverless";
import {Resend} from "resend";
import escapeHtml from "escape-html";
import {z} from "zod";

// Validation constants
const MAX_NAME_LENGTH = 100;
const MAX_DIETARY_LENGTH = 500;
const MAX_NOTES_LENGTH = 1000;

// Zod schema for guest info
const guestInfoSchema = z.object({
	name: z.string().max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
	dietaryRestrictions: z.string().max(MAX_DIETARY_LENGTH, `Allergier/specialkost får max vara ${MAX_DIETARY_LENGTH} tecken`),
});

// Zod schema for guest1 (name required)
const guest1Schema = guestInfoSchema.extend({
	name: z.string()
		.min(1, "Namn för gäst 1 är obligatoriskt")
		.max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
});

// Full registration data schema (for attending guests)
const registrationSchema = z.object({
	canAttend: z.literal(true),
	guest1: guest1Schema,
	guest2: guestInfoSchema,
	needsAccommodation: z.boolean(),
	notes: z.string().max(MAX_NOTES_LENGTH, `Meddelandet får max vara ${MAX_NOTES_LENGTH} tecken`),
});

// Decline registration schema (only names required)
const declineRegistrationSchema = z.object({
	canAttend: z.literal(false),
	guest1: z.object({
		name: z.string()
			.min(1, "Namn för gäst 1 är obligatoriskt")
			.max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
		dietaryRestrictions: z.string(),
	}),
	guest2: z.object({
		name: z.string().max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
		dietaryRestrictions: z.string(),
	}),
	needsAccommodation: z.boolean(),
	notes: z.string(),
});

interface GuestInfo {
	name: string;
	dietaryRestrictions: string;
}

interface RegistrationData {
	canAttend: boolean;
	guest1: GuestInfo;
	guest2: GuestInfo;
	needsAccommodation: boolean;
	notes: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Escapes HTML and trims whitespace to ensure proper fallback behavior
 * @param text - The text to escape
 * @returns The escaped text safe for HTML insertion, or empty string if input is null/undefined/whitespace-only
 */
function escapeAndTrim(text: string | null | undefined): string {
	if (text == null) {
		return '';
	}
	const trimmed = text.trim();
	if (trimmed === '') {
		return '';
	}
	return escapeHtml(trimmed);
}

async function sendEmailNotification(registrationData: RegistrationData) {
	const attendanceStatus = registrationData.canAttend ? "Kommer" : "Kommer inte";
	const subject = `Ny anmälan - ${attendanceStatus}`;

	let emailBody = `
		<h2>Ny anmälan mottagen</h2>
		<p><strong>Status:</strong> ${attendanceStatus}</p>

		<h3>Gäst 1</h3>
		<p><strong>Namn:</strong> ${registrationData.guest1.name}</p>`;

	if (registrationData.canAttend) {
		emailBody += `
		<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest1.dietaryRestrictions || 'Inga'}</p>`;
	}

	emailBody += `
		<h3>Gäst 2</h3>
		<p><strong>Namn:</strong> ${registrationData.guest2.name || 'Ingen andra gäst'}</p>`;

	if (registrationData.canAttend) {
		emailBody += `
		<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest2.dietaryRestrictions || 'Inga'}</p>

		<h3>Boende</h3>
		<p><strong>Behöver hjälp med boende:</strong> ${registrationData.needsAccommodation ? 'Ja' : 'Nej'}</p>

		<h3>Meddelande</h3>
		<p>${registrationData.notes || 'Inget meddelande'}</p>`;
	}

	return await resend.emails.send({
		from: 'Berlind Website <wedding@berlind.me>',
		to: ['alexander.berlind@proton.me'],
		subject: subject,
		html: emailBody,
	});
}

export async function submitRegistration(formData: FormData): Promise<{ success: boolean; message: string }> {
	// Extract canAttend status
	const canAttend = formData.get("canAttend") === "true";

	// Extract guest 1 data
	const guest1: GuestInfo = {
		name: escapeAndTrim(formData.get("guest1Name") as string),
		dietaryRestrictions: escapeAndTrim(formData.get("guest1DietaryRestrictions") as string || ""),
	};

	// Extract guest 2 data
	const guest2: GuestInfo = {
		name: escapeAndTrim(formData.get("guest2Name") as string),
		dietaryRestrictions: escapeAndTrim(formData.get("guest2DietaryRestrictions") as string || ""),
	};

	// Extract accommodation data
	const needsAccommodation = formData.get("needsAccommodation") === "on";

	// Extract general notes
	const notes = escapeAndTrim(formData.get("notes") as string || "");

	const registrationData: RegistrationData = {
		canAttend,
		guest1,
		guest2,
		needsAccommodation,
		notes,
	};

	// Validate registration data based on attendance
	const schema = canAttend ? registrationSchema : declineRegistrationSchema;
	const validationResult = schema.safeParse(registrationData);
	if (!validationResult.success) {
		const errorMessages = validationResult.error.issues
			.map((issue) => issue.message)
			.join(", ");
		console.error("Validation failed:", errorMessages);
		return {
			success: false,
			message: errorMessages,
		};
	}

	console.log("Registration submitted:", registrationData);

	// TODO: Save to database, send confirmation email, etc.
	const { error } = await sendEmailNotification(registrationData);

	if (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Ett fel uppstod vid anmälan.",
		};
	}

	const sql = neon(`${process.env.DATABASE_URL}`);

	try {
		await sql`INSERT INTO registrations (can_attend, guest1_name, guest1_dietary_restrictions, guest2_name, guest2_dietary_restrictions, needs_accommodation, notes) VALUES (
			${registrationData.canAttend},
			${registrationData.guest1.name},
			${registrationData.guest1.dietaryRestrictions},
			${registrationData.guest2.name},
			${registrationData.guest2.dietaryRestrictions},
			${registrationData.needsAccommodation},
			${registrationData.notes}
		)`;
	} catch (error) {
		console.error("Error saving to database:", error);
		return {
			success: false,
			message: "Ett fel uppstod vid anmälan. Vänligen försök igen.",
		};
	}

	return {
		success: true,
		message: "Anmälan mottagen!",
	};
}
