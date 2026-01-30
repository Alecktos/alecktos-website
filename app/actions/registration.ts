"use server";

import {neon} from "@neondatabase/serverless";
import {Resend} from "resend";
import escapeHtml from "escape-html";

interface GuestInfo {
	name: string;
	dietaryRestrictions: string;
}

interface RegistrationData {
	guest1: GuestInfo;
	guest2: GuestInfo;
	needsAccommodation: boolean;
	accommodationNotes: string;
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

export async function submitRegistration(formData: FormData): Promise<{ success: boolean; message: string }> {
	// Extract guest 1 data
	const guest1: GuestInfo = {
		name: formData.get("guest1Name") as string,
		dietaryRestrictions: formData.get("guest1DietaryRestrictions") as string || "",
	};

	// Extract guest 2 data
	const guest2: GuestInfo = {
		name: formData.get("guest2Name") as string,
		dietaryRestrictions: formData.get("guest2DietaryRestrictions") as string || "",
	};

	// Extract accommodation data
	const needsAccommodation = formData.get("needsAccommodation") === "on";
	const accommodationNotes = formData.get("accommodationNotes") as string || "";

	const registrationData: RegistrationData = {
		guest1,
		guest2,
		needsAccommodation,
		accommodationNotes,
	};

	console.log("Registration submitted:", registrationData);

	// TODO: Save to database, send confirmation email, etc.
	const { data, error } = await resend.emails.send({
		from: 'Berlind Website <wedding@berlind.me>',
		to: ['alexander.berlind@proton.me'],
		subject: 'Ny anmälan',
		html: `
			<h2>Ny anmälan mottagen</h2>

			<h3>Gäst 1</h3>
			<p><strong>Namn:</strong> ${escapeAndTrim(guest1.name)}</p>
			<p><strong>Allergier/Specialkost:</strong> ${escapeAndTrim(guest1.dietaryRestrictions) || 'Inga'}</p>

			<h3>Gäst 2</h3>
			<p><strong>Namn:</strong> ${escapeAndTrim(guest2.name) || 'Ingen andra gäst'}</p>
			<p><strong>Allergier/Specialkost:</strong> ${escapeAndTrim(guest2.dietaryRestrictions) || 'Inga'}</p>

			<h3>Boende</h3>
			<p><strong>Behöver boende:</strong> ${needsAccommodation ? 'Ja' : 'Nej'}</p>
			<p><strong>Önskemål om boende:</strong> ${escapeAndTrim(accommodationNotes) || 'Inga'}</p>
		`,
	});

	if (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Ett fel uppstod vid anmälan.",
		};
	}


	const sql = neon(`${process.env.DATABASE_URL}`);
	const comment = "Alex testar lägga till en kommentar";
	// Insert the comment from the form into the Postgres database
	await sql`INSERT INTO comments (comment) VALUES (${comment})`;

	// Simulate processing delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		success: true,
		message: "Anmälan mottagen!",
	};
}
