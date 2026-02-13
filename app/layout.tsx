import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Malin & Alexander",
	description: "Bröllopsinformation för Malin och Alexander",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="sv">
	  <body
		className={`${geistSans.variable} ${geistMono.variable} antialiased`}
	  >
		  <div className="max-w-screen-2xl mx-auto text-center bg-blush-lighter">
			<Nav />
			  <div className="relative w-full text-center">
				  <div className="relative w-full h-120">
					  <Image
						  className="object-cover object-top-right md:hidden"
						  src={"/beach_11_desktop.png"}
						  alt="Header image"
						  fill
						  priority
					  />
					  <Image
						  className="object-cover grayscale object-top-right hidden md:block"
						  src="/beach_11_desktop.png"
						  alt="Header image"
						  fill
						  priority
					  />
				  </div>
			  </div>
			{children}
		  </div>
	  </body>
	</html>
  );
}
