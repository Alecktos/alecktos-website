"use server";

interface GuestInfo {
	name: string;
	email: string;
	dietaryRestrictions: string;
}

interface RegistrationData {
	guest1: GuestInfo;
	guest2: GuestInfo;
	needsAccommodation: boolean;
	accommodationNotes: string;
}

export async function submitRegistration(formData: FormData): Promise<{ success: boolean; message: string }> {
	// Extract guest 1 data
	const guest1: GuestInfo = {
		name: formData.get("guest1Name") as string,
		email: formData.get("guest1Email") as string,
		dietaryRestrictions: formData.get("guest1DietaryRestrictions") as string || "",
	};

	// Extract guest 2 data
	const guest2: GuestInfo = {
		name: formData.get("guest2Name") as string,
		email: formData.get("guest2Email") as string,
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

	// Simulate processing delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		success: true,
		message: "Anmälan mottagen!",
	};
}
