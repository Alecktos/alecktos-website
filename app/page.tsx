import RegistrationForm from "./components/RegistrationForm";
import {BlushMediumBox} from "@/app/components/BlushMediumBox";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-off-white">
			<main className="min-h-screen w-full flex flex-col  ">
				{/* Registration Form Section */}
				<section className="py-8 px-1" id="registration">
					{/* Information Section */}
					<h1 className="text-4xl font-serif text-sage-darker mb-8 text-center">
						Välkommen till vårt bröllop!
					</h1>
					<BlushMediumBox>
						<p className="text-lg text-sage-darker mb-4 text-center">
							Vi gifter oss och vill gärna fira denna speciella dag tillsammans med er.
						</p>

						<div className="text-sage-darker space-y-1">
							<p><strong>Plats:</strong> Tävelsås bygdegård - <a
								href="https://maps.app.goo.gl/pVwtNwDkw3xN5GNk8" target="_blank"
								rel="noopener noreferrer" className="underline hover:text-blush-dark">Vägbeskrivning</a>
							</p>
							<p><strong>Datum & Tid:</strong> Buss avgår till vigselplats 14:00 den 15 augusti 2026</p>
						</div>

						<p className="text-sage-dark mt-2 text-sm">
							För mer information om schemat <Link href="/schedule"
							                                     className="underline hover:text-blush-dark">klicka
							här</Link>.
						</p>

						<hr className="border-blush-dark/30 my-6" />

						<div className="text-center space-y-2">
							<p className="text-sage-darker">
								Vill du anmäla tal eller annat, kontakta vår toastmadame eller toastmaster.
							</p>
							<p className="text-sage-darker"><strong>Viktor Ferm:</strong> <a href="tel:+46708261181" className="hover:text-blush-dark">070-826 11 81</a></p>
							<p className="text-sage-darker"><strong>Matilda Rasmusson:</strong> <a href="tel:+46793343021" className="hover:text-blush-dark">079-334 30 21</a></p>
							<p className="text-sage-darker italic"><a href="mailto:toastmasters.berlind@gmail.com" className="hover:text-blush-dark">toastmasters.berlind@gmail.com</a></p>
						</div>

						<hr className="border-blush-dark/30 my-6" />

						<p className="text-sage-darker text-center">
							Vi har valt att ha ett barnfritt bröllop, men ammande bebisar är såklart välkomna.
						</p>

						<hr className="border-blush-dark/30 my-6"/>

						<p className="text-sage-darker text-center mt-4">
							<strong>Klädkod:</strong> Kavaj
						</p>

					</BlushMediumBox>
					<RegistrationForm />
				</section>
			</main>
		</div>
	);
}
