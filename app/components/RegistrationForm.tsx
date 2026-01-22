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
	accommodationNotes: string;
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
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
		accommodationNotes: "",
	});
	const [submitted, setSubmitted] = useState(false);

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
		const result = await submitRegistration(formData);
		if (result.success) {
			setSubmitted(true);
		}
	};

	if (submitted) {
		return (
			<div className="w-full max-w-2xl mx-auto p-8 bg-pink-50 rounded-lg shadow-lg">
				<h2 className="text-3xl font-serif text-pink-600 mb-4">
					Tack för din anmälan! 💕
				</h2>
				<p className="text-lg text-gray-700">
					Vi har mottagit er anmälan och ser fram emot att fira med er!
				</p>
			</div>
		);
	}

	return (
		<form
			action={handleFormAction}
			className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg"
		>
			<h2 className="text-3xl font-serif text-pink-600 mb-6 text-center">
				Anmälan till bröllopet
			</h2>

			{/* Guest 1 */}
			<div className="mb-8 p-6 bg-pink-50 rounded-lg">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Gäst 1</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
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
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
							placeholder="Förnamn Efternamn"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Allergier / Specialkost
						</label>
						<input
							type="text"
							name="guest1DietaryRestrictions"
							value={formState.guest1.dietaryRestrictions}
							onChange={(e) =>
								handleGuestChange("guest1", "dietaryRestrictions", e.target.value)
							}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
							placeholder="T.ex. vegetarian, glutenfri, nötallergi..."
						/>
					</div>
				</div>
			</div>

			{/* Guest 2 */}
			<div className="mb-8 p-6 bg-pink-50 rounded-lg">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Gäst 2</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Namn *
						</label>
						<input
							type="text"
							name="guest2Name"
							required
							value={formState.guest2.name}
							onChange={(e) =>
								handleGuestChange("guest2", "name", e.target.value)
							}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
							placeholder="Förnamn Efternamn"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Allergier / Specialkost
						</label>
						<input
							type="text"
							name="guest2DietaryRestrictions"
							value={formState.guest2.dietaryRestrictions}
							onChange={(e) =>
								handleGuestChange("guest2", "dietaryRestrictions", e.target.value)
							}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
							placeholder="T.ex. vegetarian, glutenfri, nötallergi..."
						/>
					</div>
				</div>
			</div>

			{/* Accommodation */}
			<div className="mb-8 p-6 bg-green-50 rounded-lg">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Boende</h3>
				<div className="space-y-4">
					<div className="flex items-center">
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
							className="w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
						/>
						<label
							htmlFor="needsAccommodation"
							className="ml-3 text-gray-700 font-medium"
						>
							Vi behöver hjälp med boende
						</label>
					</div>
					{formState.needsAccommodation && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Eventuella önskemål om boende
							</label>
							<textarea
								name="accommodationNotes"
								value={formState.accommodationNotes}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										accommodationNotes: e.target.value,
									}))
								}
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
								rows={3}
								placeholder="T.ex. antal nätter, speciella behov..."
							/>
						</div>
					)}
				</div>
			</div>

			{/* Submit Button */}
			<SubmitButton />
		</form>
	);
}
