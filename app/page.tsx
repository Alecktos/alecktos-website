import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-off-white text-center">
        <h1 className="text-5xl italic font-serif p-4 text-sage-darker" >Malin & Alexander</h1>
        {/*<p>Nästa steg är att formulär med databas integration på plats</p>*/}
        {/*<p>Jag vill även migrera över mina andra appar sidor till denna</p>*/}
        <div className="relative w-full max-w-7xl mx-auto text-center">
          <div className="relative w-full h-128">
                <Image
                className="my-image object-cover"
                src="/vacation.jpeg"
                alt="Header image"
                fill
                priority
              />
          </div>
          {/*<div className="w-full absolute bottom-0 left-0 text-center mb-32">*/}
			{/*/!*<h2 className="text-8xl font-serif font-bold text-sage-lighter drop-shadow-lg text-center">*!/*/}
          {/*  /!*  2026-08-16*!/*/}
          {/*  /!*</h2>*!/*/}
          {/*   /!*<button className="mt-10 bg-blush-dark hover:bg-blush-medium text-sage-darker font-bold py-2 px-4 rounded">*!/*/}
          {/*   /!*    Anmäl dig här*!/*/}
          {/*   /!*</button>*!/*/}
          {/*</div>*/}
        </div>



        {/* Registration Form Section */}
        <section className="py-16 px-4" id="registration">
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
              Mer information om schemat och övriga detaljer kommer att skickas ut via e-post.
            </p>
          </div>

          <RegistrationForm />
        </section>



        {/*<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">*/}
        {/*  <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">*/}
        {/*    To get started, edit the page.tsx file.*/}
        {/*  </h1>*/}
        {/*  <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">*/}
        {/*    Looking for a starting point or more instructions? Head over to{" "}*/}
        {/*    <a*/}
        {/*      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*      className="font-medium text-zinc-950 dark:text-zinc-50"*/}
        {/*    >*/}
        {/*      Templates*/}
        {/*    </a>{" "}*/}
        {/*    or the{" "}*/}
        {/*    <a*/}
        {/*      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*      className="font-medium text-zinc-950 dark:text-zinc-50"*/}
        {/*    >*/}
        {/*      Learning*/}
        {/*    </a>{" "}*/}
        {/*    center.*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">*/}
        {/*  <a*/}
        {/*    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className="dark:invert"*/}
        {/*      src="/vercel.svg"*/}
        {/*      alt="Vercel logomark"*/}
        {/*      width={16}*/}
        {/*      height={16}*/}
        {/*    />*/}
        {/*    Deploy Now*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"*/}
        {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Documentation*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>
    // </div>
  );
}
