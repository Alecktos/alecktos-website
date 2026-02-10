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
	<html lang="en">
	  <body
		className={`${geistSans.variable} ${geistMono.variable} antialiased`}
	  >
		  <div className="max-w-screen-2xl mx-auto text-center bg-blush-lighter">
			<h1 className="text-5xl italic font-serif p-4 text-sage-darker" >Malin & Alexander</h1>
			<nav className="bg-sage-light py-4 px-6 shadow-sm">
				<div className="max-w-screen-2xl mx-auto flex justify-center gap-8">
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
