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
					<h1 className="text-4xl font-serif text-sage-darker mb-8 text-center">
						Välkommen till vårt bröllop!
					</h1>
					<BlushMediumBox>
						<p className="text-lg text-sage-darker mb-4 text-center">
							Vi gifter oss och vill gärna fira denna speciella dag tillsammans med er.
						</p>

						<div className="text-sage-darker space-y-1">
							<p><strong>Datum:</strong> 15 augusti 2026</p>
							<p><strong>Plats:</strong> Tävelsås bygdegård</p>
							<p><strong>Klädkod:</strong> Kavaj</p>
						</div>

						<p className="text-sage-dark mt-4 text-sm">
							Mer information om <Link href="/schedule" className="underline hover:text-blush-dark">schemat</Link> och övriga detaljer kommer läggas ut här löpande.
						</p>

						<hr className="border-blush-dark/30 my-6" />

						<div className="text-center space-y-2">
							<p className="text-sage-darker">
								Vill du anmäla tal eller annat, kontakta vår toastmadame eller toastmaster:
							</p>
							<p className="text-sage-darker"><strong>Matilda Rasmusson, Viktor Ferm</strong></p>
							<p className="text-sage-darker italic">toastmasters.berlind@gmail.com</p>
						</div>

						<hr className="border-blush-dark/30 my-6" />

						<p className="text-sage-darker text-center">
							Vi har valt att ha ett barnfritt bröllop, men ammande bebisar är såklart välkomna.
						</p>
					</BlushMediumBox>
					<RegistrationForm />
				</section>
			</main>
		</div>
	);
}
