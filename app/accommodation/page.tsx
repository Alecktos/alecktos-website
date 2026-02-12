import { BlushMediumBox } from "@/app/components/BlushMediumBox";

export default function AccommodationPage() {
	return (
		<div className="min-h-screen bg-off-white p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-serif text-sage-darker mb-8 text-center">
					Boende
				</h1>

				<BlushMediumBox>
					<h2 className="text-2xl font-semibold text-sage-darker mb-4">
						Herrgård de luxe
					</h2>
					<p className="text-sage-dark mb-4">
						Gemensamt badrum, frukost ingår.
					</p>
					<p className="text-sage-dark mb-4">
						<a href="https://herrgarddeluxe.stay.at/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-darker">Osaby Herrgårds hemsida</a>
					</p>
					<p className="text-sage-dark">
						<b>Avstånd till festlokalen:</b> 5,4 km, cirka 8 minuter med bil.
					</p>
				</BlushMediumBox>

				<BlushMediumBox>
					<h2 className="text-2xl font-semibold text-sage-darker mb-4">
						Stjärnviks Säteri
					</h2>
					<p className="text-sage-dark mb-4">
						Bokning görs genom oss via anmälan. Gemensamt kök och badrum, frukost ingår inte. Begränsat antal rum, först till kvarn gäller.
					</p>
					<p className="text-sage-dark mb-4">
						<a href="https://stjarnvik.nu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-darker">Stjärnviks Säteri hemsida</a>
					</p>
					<p className="text-sage-dark">
						<b>Avstånd till festlokalen:</b> 2,1 km, cirka 3 minuter med bil.
					</p>
				</BlushMediumBox>

				<BlushMediumBox>
					<h2 className="text-2xl font-semibold text-sage-darker mb-4">
						Boende inne i Växjö
					</h2>
					<p className="text-sage-dark mb-4">
						I Växjö finns flertalet hotell att välja mellan.
					</p>
					<p className="text-sage-dark">
						<b>Avstånd till festlokalen:</b> 15 km, cirka 20 minuter med bil.
					</p>
				</BlushMediumBox>
			</div>
		</div>
	);
}
