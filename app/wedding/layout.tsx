import Image from "next/image";
import type {Metadata} from "next";
import Nav from "./components/Nav";

export const metadata: Metadata = {
	title: "Malin & Alexander",
	description: "Bröllopsinformation för Malin och Alexander",
};

export default function WeddingLayout({
	                                      children,
                                      }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div lang="sv" className="max-w-screen-2xl mx-auto text-center bg-blush-lighter">
			<Nav/>
			<div className="relative w-full text-center">
				<div className="relative w-full h-94 md:h-120">
					<Image
						className="object-cover object-top-right md:grayscale brightness-110"
						src="/beach_11_desktop.png"
						alt="Header image"
						fill
						priority
					/>
				</div>
			</div>
			{children}
		</div>
	);
}
