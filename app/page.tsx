import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <main className="max-w-screen-2xl mx-auto min-h-screen w-full flex flex-col bg-blush-lighter text-center">
        <h1 className="text-5xl italic font-serif p-4 text-sage-darker" >Malin & Alexander</h1>
        <div className="relative w-full text-center">
          <div className="relative w-full h-128">
                <Image
                className="brightness-150 object-cover object-top-right"
                src="/beach_7.png"
                alt="Header image"
                fill
                priority
              />
          </div>
        </div>



        {/* Registration Form Section */}
        <section className="py-8 px-1" id="registration">
          {/* Information Section */}
          <div className="w-full max-w-2xl mx-auto mb-8 p-8 bg-blush-medium rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif text-sage-darker mb-4 text-center">
              Välkommen till vårt bröllop!
            </h2>
            <p className="text-lg text-sage-darker mb-4 text-center">
              Vi gifter oss och vill gärna fira denna speciella dag tillsammans med er.
            </p>
            <div className="text-sage-darker space-y-2">
              <p><strong>Datum:</strong> 15 augusti 2026</p>
              <p><strong>Plats:</strong> Tävelsås bygdegård</p>
            </div>
            <p className="text-sage-dark mt-4 text-sm">
              Mer information om schemat och övriga detaljer kommer läggas ut här löpande.
            </p>

	          <div className="text-sage-darker mt-8 text-center space-y-2">
		          <p className="text-lg">
			          Vill du anmäla tal eller annat, kontakta våra toastmadames.
		          </p>
		          <div className="text-sage-darker space-y-2 text-sage-darker ">
		          <p><strong>Elin Berlind:</strong> 070-xxx xx xx</p>
		          <p><strong>Sofie Rothén:</strong> 070-xxx xx xx</p>
	          </div>
	          </div>
          </div>
          <RegistrationForm />
        </section>
      </main>
    </div>
  );
}
