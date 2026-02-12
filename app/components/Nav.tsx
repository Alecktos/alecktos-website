"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className="bg-off-white py-4 px-6 shadow-sm">
			<div className="flex items-center">
				<div className="flex-1"></div>
				<Link href="/" className="hidden md:block text-4xl italic font-serif text-sage-darker text-center">Malin & Alexander</Link>
				<div className="flex-1 flex gap-8 justify-end">
					<Link
						href="/"
						className={`font-medium tracking-wide transition-colors ${pathname === "/" ? "text-blush-darkest border-b-2 border-blush-dark" : "text-sage-darker hover:text-blush-darkest"}`}
					>
						Anmälan
					</Link>
					<Link
						href="/accommodation"
						className={`font-medium tracking-wide transition-colors ${pathname === "/accommodation" ? "text-blush-darkest border-b-2 border-blush-dark" : "text-sage-darker hover:text-blush-darkest"}`}
					>
						Boende
					</Link>
					<Link
						href="/schedule"
						className={`font-medium tracking-wide transition-colors ${pathname === "/schedule" ? "text-blush-darkest border-b-2 border-blush-dark" : "text-sage-darker hover:text-blush-darkest"}`}
					>
						Schema
					</Link>
				</div>
			</div>
		</nav>
	);
}
