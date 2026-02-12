"use server";

import { after } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import escapeHtml from "escape-html";
import { z } from "zod";

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
	accommodationOsaby: z.boolean(),
	accommodationSateri: z.boolean(),
	notes: z.string().max(MAX_NOTES_LENGTH, `Meddelandet får max vara ${MAX_NOTES_LENGTH} tecken`),
});

// Decline registration schema (name and email required for guest1)
const declineRegistrationSchema = z.object({
	canAttend: z.literal(false),
	guest1: z.object({
		name: z.string()
			.min(1, "Namn för gäst 1 är obligatoriskt")
			.max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
		email: z.string().email("Ange en giltig e-postadress för gäst 1"),
		dietaryRestrictions: z.string(),
	}),
	guest2: z.object({
		name: z.string().max(MAX_NAME_LENGTH, `Namnet får max vara ${MAX_NAME_LENGTH} tecken`),
		email: z.string(),
		dietaryRestrictions: z.string(),
	}),
	accommodationOsaby: z.boolean(),
	accommodationSateri: z.boolean(),
	notes: z.string().max(MAX_NOTES_LENGTH, `Meddelandet får max vara ${MAX_NOTES_LENGTH} tecken`),
});

interface GuestInfo {
	name: string;
	email: string;
	dietaryRestrictions: string;
}

interface RegistrationData {
	canAttend: boolean;
	guest1: GuestInfo;
	guest2: GuestInfo;
	accommodationOsaby: boolean;
	accommodationSateri: boolean;
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
		<p><strong>Namn:</strong> ${registrationData.guest1.name}</p>
		<p><strong>E-post:</strong> ${registrationData.guest1.email}</p>`;

	if (registrationData.canAttend) {
		emailBody += `
		<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest1.dietaryRestrictions || 'Inga'}</p>`;
	}

	emailBody += `
		<h3>Gäst 2</h3>
		<p><strong>Namn:</strong> ${registrationData.guest2.name || 'Ingen andra gäst'}</p>
		<p><strong>E-post:</strong> ${registrationData.guest2.email || 'Ingen e-post'}</p>`;

	if (registrationData.canAttend) {
		emailBody += `
		<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest2.dietaryRestrictions || 'Inga'}</p>

		<h3>Boende</h3>
		<p><strong>Boende Osaby:</strong> ${registrationData.accommodationOsaby ? 'Ja' : 'Nej'}</p>
		<p><strong>Boende Säteri:</strong> ${registrationData.accommodationSateri ? 'Ja' : 'Nej'}</p>

		<h3>Meddelande</h3>
		<p>${registrationData.notes || 'Inget meddelande'}</p>`;
	} else if (registrationData.notes) {
		// Include notes for guests who cannot attend
		emailBody += `
		<h3>Meddelande</h3>
		<p>${registrationData.notes}</p>`;
	}

	return await resend.emails.send({
		from: 'Berlind Website <wedding@berlind.me>',
		to: ['alexander.berlind@proton.me', 'malin.johannesson.94@gmail.com'],
		subject: subject,
		html: emailBody,
	});
}

async function sendConfirmationEmail(registrationData: RegistrationData) {
	const subject = registrationData.canAttend
		? "Bekräftelse på din anmälan till bröllopet"
		: "Bekräftelse - Vi har mottagit ditt svar";

	const recipients = [registrationData.guest1.email];
	if (registrationData.guest2.email) {
		recipients.push(registrationData.guest2.email);
	}

	const hasSecondGuest = Boolean(registrationData.guest2.name);
	const youSingularPlural = hasSecondGuest ? 'ni' : 'du';
	const yourSingularPlural = hasSecondGuest ? 'er' : 'din';
	const yourAnswerSingularPlural = hasSecondGuest ? 'ert' : 'ditt';

	let emailBody = `
		<h2>Hej ${registrationData.guest1.name}${hasSecondGuest ? ` & ${registrationData.guest2.name}` : ''}!</h2>`;

	if (registrationData.canAttend) {
		emailBody += `
		<p>Tack för ${yourSingularPlural} anmälan! Vi är så glada att ${youSingularPlural} kan komma på vårt bröllop.</p>

		<h3>${hasSecondGuest ? 'Er' : 'Din'} registrering</h3>
		<p><strong>Gäst 1:</strong> ${registrationData.guest1.name}</p>`;

		if (registrationData.guest1.dietaryRestrictions) {
			emailBody += `<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest1.dietaryRestrictions}</p>`;
		}

		if (hasSecondGuest) {
			emailBody += `<p><strong>Gäst 2:</strong> ${registrationData.guest2.name}</p>`;
			if (registrationData.guest2.dietaryRestrictions) {
				emailBody += `<p><strong>Allergier/Specialkost:</strong> ${registrationData.guest2.dietaryRestrictions}</p>`;
			}
		}

		emailBody += `
		<p><strong>Boende Osaby:</strong> ${registrationData.accommodationOsaby ? 'Ja' : 'Nej'}</p>
		<p><strong>Boende Säteri:</strong> ${registrationData.accommodationSateri ? 'Ja' : 'Nej'}</p>

		<p>Vi återkommer med mer information om schemat och andra nyheter.</p>`;
	} else {
		emailBody += `
		<p>Tack för ${yourAnswerSingularPlural} svar! Vi kommer sakna ${hasSecondGuest ? 'er' : 'dig'}, men vi hoppas att vi ses en annan gång.</p>`;
	}

	emailBody += `
		<p>Med vänliga hälsningar,<br>Malin & Alexander</p>`;

	emailBody += `
		<p>Detta mejl kan ej besvaras.</p>`;

	return await resend.emails.send({
		from: 'Berlind Website <wedding@berlind.me>',
		to: recipients,
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
		email: escapeAndTrim(formData.get("guest1Email") as string || ""),
		dietaryRestrictions: escapeAndTrim(formData.get("guest1DietaryRestrictions") as string || ""),
	};

	// Extract guest 2 data
	const guest2: GuestInfo = {
		name: escapeAndTrim(formData.get("guest2Name") as string),
		email: escapeAndTrim(formData.get("guest2Email") as string || ""),
		dietaryRestrictions: escapeAndTrim(formData.get("guest2DietaryRestrictions") as string || ""),
	};

	// Extract accommodation data
	const accommodationOsaby = formData.get("accommodationOsaby") === "on";
	const accommodationSateri = formData.get("accommodationSateri") === "on";

	// Extract general notes
	const notes = escapeAndTrim(formData.get("notes") as string || "");

	const registrationData: RegistrationData = {
		canAttend,
		guest1,
		guest2,
		accommodationOsaby,
		accommodationSateri,
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

	// Create contacts if they can attend
	if (canAttend) {
		const guest1Result  = await resend.contacts.create({
			email: guest1.email,
			firstName: guest1.name,
			unsubscribed: false,
		});

		if (guest1Result.error) {
			console.error('Error creating contact:', guest1Result.error);
			return {
				success: false,
				message: "Ett fel uppstod vid anmälan.",
			};
		}

		if (guest2.email) {
			const guest2Result = await resend.contacts.create({
				email: guest2.email,
				firstName: guest2.name,
				unsubscribed: false,
			});

			if (guest2Result.error) {
				console.error('Error creating contact:', guest2Result.error);
				return {
					success: false,
					message: "Ett fel uppstod vid anmälan.",
				};
			}
		}
	}

	console.log("Registration:", registrationData);

	const sql = neon(`${process.env.DATABASE_URL}`);

	try {
		await sql`INSERT INTO registrations (can_attend, guest1_name, guest1_email, guest1_dietary_restrictions, guest2_name, guest2_email, guest2_dietary_restrictions, accommodation_osaby, accommodation_sateri, notes) VALUES (
			${registrationData.canAttend},
			${registrationData.guest1.name},
			${registrationData.guest1.email},
			${registrationData.guest1.dietaryRestrictions},
			${registrationData.guest2.name},
			${registrationData.guest2.email},
			${registrationData.guest2.dietaryRestrictions},
			${registrationData.accommodationOsaby},
			${registrationData.accommodationSateri},
			${registrationData.notes}
		)`;
	} catch (error) {
		console.error("Error saving to database:", error);
		return {
			success: false,
			message: "Ett fel uppstod vid anmälan. Vänligen försök igen.",
		};
	}

	// Send emails in the background using Next.js after() API
	// This ensures emails are sent after the response is returned
	after(async () => {
		const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

		// Wait 1 second before sending confirmation email to avoid rate limit
		await delay(1000);

		const { error } = await sendEmailNotification(registrationData);
		console.log('sent organizers email');
		if (error) {
			console.error("Error sending email:", error);
		}

		const { error: confirmationEmailError } = await sendConfirmationEmail(registrationData);
		console.log('sent confirmation email');
		if (confirmationEmailError) {
			console.error("Error sending confirmation email:", confirmationEmailError);
		}
	});

	console.log('returning success response');
	return {
		success: true,
		message: "Anmälan mottagen!",
	};
}
