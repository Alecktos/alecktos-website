import RegistrationForm from "./components/RegistrationForm";
import { BlushMediumBox } from "@/app/components/BlushMediumBox";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-off-white">
			<main className="min-h-screen w-full flex flex-col  ">
				{/* Registration Form Section */}
				<section className="py-8 px-1" id="registration">
					{/* Information Section */}
					<h1 className="text-3xl font-serif text-sage-darker mb-4 text-center">
						Välkommen till vårt bröllop!
					</h1>
					<BlushMediumBox>
						<p className="text-lg text-sage-darker mb-4 text-center">
							Vi gifter oss och vill gärna fira denna speciella dag tillsammans med er.
						</p>
						<div className="text-sage-darker space-y-2">
							<p><strong>Datum:</strong> 15 augusti 2026</p>
							<p><strong>Plats:</strong> Tävelsås bygdegård</p>
						</div>
						<p className="text-sage-dark mt-4 text-sm">
							Mer information om <Link href="/schedule" className="underline hover:text-blush-dark">schemat</Link> och övriga detaljer kommer läggas ut här löpande.
						</p>

						<div className="text-sage-darker mt-8 text-center space-y-2">
							<p className="text-lg">
								Vill du anmäla tal eller annat, kontakta våra toastmadames.
							</p>
							<div className="text-sage-darker space-y-2 text-sage-darker ">
								<p><strong>Förnamn Efternamn:</strong> 070-xxx xx xx | fornamn.efternamn@gmail.com</p>
								<p><strong>Förnamn Efternamn:</strong> 070-xxx xx xx | fornamn.efternamn@gmail.com</p>
							</div>
						</div>
					</BlushMediumBox>
					<RegistrationForm />
				</section>
			</main>
		</div>
	);
}
