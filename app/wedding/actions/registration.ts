"use server";

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
	accommodationSateri: boolean;
	notes: string;
}

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
	const accommodationSateri = formData.get("accommodationSateri") === "on";

	// Extract general notes
	const notes = escapeAndTrim(formData.get("notes") as string || "");

	const registrationData: RegistrationData = {
		canAttend,
		guest1,
		guest2,
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

	return {
		success: true,
		message: "Anmälan mottagen!",
	};
}
