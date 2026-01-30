"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitRegistration } from "@/app/actions/registration";

interface GuestInfo {
	name: string;
	dietaryRestrictions: string;
}

interface FormState {
	guest1: GuestInfo;
	guest2: GuestInfo;
	needsAccommodation: boolean;
	notes: string;
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full bg-blush-darker hover:bg-blush-medium disabled:bg-blush-medium text-off-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
		>
			{pending ? "Skickar..." : "Skicka anmälan"}
		</button>
	);
}

export default function RegistrationForm() {
	const [formState, setFormState] = useState<FormState>({
		guest1: { name: "", dietaryRestrictions: "" },
		guest2: { name: "", dietaryRestrictions: "" },
		needsAccommodation: false,
		notes: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleGuestChange = (
		guestKey: "guest1" | "guest2",
		field: keyof GuestInfo,
		value: string
	) => {
		setFormState((prev) => ({
			...prev,
			[guestKey]: {
				...prev[guestKey],
				[field]: value,
			},
		}));
	};

	const handleFormAction = async (formData: FormData) => {
		setErrorMessage(null);
		const result = await submitRegistration(formData);
		if (result.success) {
			setSubmitted(true);
		} else {
			setErrorMessage(result.message);
			setFormState({
				guest1: { name: "", dietaryRestrictions: "" },
				guest2: { name: "", dietaryRestrictions: "" },
				needsAccommodation: false,
				notes: "",
			});
		}
	};

	if (submitted) {
		return (
			<div className="w-full max-w-2xl mx-auto p-8 bg-blush-medium rounded-lg shadow-lg">
				<h2 className="text-3xl font-serif text-sage-darker mb-4">
					Tack för din anmälan! 💕
				</h2>
				<p className="text-lg text-sage-darker">
					Vi har mottagit er anmälan och ser fram emot att fira med er!
				</p>
			</div>
		);
	}

	return (
		<form
			action={handleFormAction}
			className="w-full max-w-2xl mx-auto p-8 bg-blush-light rounded-lg shadow-lg"
		>
			<h2 className="text-3xl font-serif text-sage-darker mb-6 text-center">
				Anmälan till bröllopet
			</h2>

			{/* Guest 1 */}
			<div className="mb-8 p-6 bg-blush-medium rounded-lg">
				<h3 className="text-xl font-semibold text-sage-darker mb-4">Gäst 1</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-sage-darker mb-1">
							Namn *
						</label>
						<input
							type="text"
							name="guest1Name"
							required
							value={formState.guest1.name}
							onChange={(e) =>
								handleGuestChange("guest1", "name", e.target.value)
							}
							className="w-full px-4 py-2 border border-sage-light rounded-md focus:ring-2 focus:ring-blush-dark focus:border-transparent bg-off-white"
							placeholder="Förnamn Efternamn"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-sage-darker mb-1">
							Allergier / Specialkost
						</label>
						<input
							type="text"
							name="guest1DietaryRestrictions"
							value={formState.guest1.dietaryRestrictions}
							onChange={(e) =>
								handleGuestChange("guest1", "dietaryRestrictions", e.target.value)
							}
							className="w-full px-4 py-2 border border-sage-light rounded-md focus:ring-2 focus:ring-blush-dark focus:border-transparent bg-off-white"
							placeholder="T.ex. vegetarian, glutenfri, nötallergi..."
						/>
					</div>
				</div>
			</div>

			{/* Guest 2 */}
			<div className="mb-8 p-6 bg-blush-medium rounded-lg">
				<h3 className="text-xl font-semibold text-sage-darker mb-4">Gäst 2 <span className="text-sm font-normal text-sage-dark">(valfritt)</span></h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-sage-darker mb-1">
							Namn
						</label>
						<input
							type="text"
							name="guest2Name"
							value={formState.guest2.name}
							onChange={(e) =>
								handleGuestChange("guest2", "name", e.target.value)
							}
							className="w-full px-4 py-2 border border-sage-light rounded-md focus:ring-2 focus:ring-blush-dark focus:border-transparent bg-off-white"
							placeholder="Förnamn Efternamn"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-sage-darker mb-1">
							Allergier / Specialkost
						</label>
						<input
							type="text"
							name="guest2DietaryRestrictions"
							value={formState.guest2.dietaryRestrictions}
							onChange={(e) =>
								handleGuestChange("guest2", "dietaryRestrictions", e.target.value)
							}
							className="w-full px-4 py-2 border border-sage-light rounded-md focus:ring-2 focus:ring-blush-dark focus:border-transparent bg-off-white"
							placeholder="T.ex. vegetarian, glutenfri, nötallergi..."
						/>
					</div>
				</div>
			</div>

			{/* Accommodation & Notes */}
			<div className="mb-8 p-6 bg-blush-medium rounded-lg">
				<h3 className="text-xl font-semibold text-sage-darker mb-4">Övrigt</h3>
				<div className="space-y-4">
					<div className="flex items-center justify-center">
						<input
							type="checkbox"
							id="needsAccommodation"
							name="needsAccommodation"
							checked={formState.needsAccommodation}
							onChange={(e) =>
								setFormState((prev) => ({
									...prev,
									needsAccommodation: e.target.checked,
								}))
							}
							className="w-5 h-5 text-blush-dark border-sage-darker rounded focus:ring-blush-dark"
						/>
					<label
						htmlFor="needsAccommodation"
						className="ml-3 text-sage-darker font-medium"
					>
						Önskar hjälp med boende
					</label>
				</div>
				<hr className="border-sage-light" />
				<div>
						{/*<label className="block text-sm font-medium text-sage-darker mb-1">*/}
						{/*	Frågor, önskemål eller annat ni vill meddela*/}
						{/*</label>*/}
						<textarea
							name="notes"
							maxLength={1000}
							value={formState.notes}
							onChange={(e) =>
								setFormState((prev) => ({
									...prev,
									notes: e.target.value,
								}))
							}
							className="w-full px-4 py-2 border border-sage-light rounded-md focus:ring-2 focus:ring-blush-dark focus:border-transparent bg-off-white"
							rows={4}
							placeholder="Frågor, önskemål eller annat ni vill meddela"
						/>
					</div>
				</div>
			</div>

			{/* Error Message */}
			{errorMessage && (
				<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
					<p className="font-medium">Det gick inte att skicka anmälan:</p>
					<p>{errorMessage}</p>
				</div>
			)}

			{/* Submit Button */}
			<SubmitButton />
		</form>
	);
}
