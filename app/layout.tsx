"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
	<html lang="sv">
	  <body
		className={`${geistSans.variable} ${geistMono.variable} antialiased`}
	  >
		  <div className="max-w-screen-2xl mx-auto text-center bg-blush-lighter">
			<nav className="bg-off-white py-4 px-6 shadow-sm">
				<div className="flex items-center">
					<div className="flex-1"></div>
					<h1 className="text-4xl italic font-serif text-sage-darker text-center">Malin & Alexander</h1>
					<div className="flex-1 flex gap-6 justify-end">
						<Link
						  href="/"
						  className={`font-medium transition-colors ${pathname === "/" ? "text-sage-darker underline" : "text-sage-darker hover:text-sage-dark"}`}
						>
						  Anmälan
						</Link>
						<Link
						  href="/accommodation"
						  className={`font-medium transition-colors ${pathname === "/accommodation" ? "text-sage-darker underline" : "text-sage-darker hover:text-sage-dark"}`}
						>
						  Boende
						</Link>
						<Link
						  href="/shedule"
						  className={`font-medium transition-colors ${pathname === "/shedule" ? "text-sage-darker underline" : "text-sage-darker hover:text-sage-dark"}`}
						>
						  Schema
						</Link>
					</div>
				</div>
			</nav>
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
			{children}
		  </div>
	  </body>
	</html>
  );
}
