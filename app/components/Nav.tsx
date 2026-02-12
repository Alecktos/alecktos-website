"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();

	return (
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
						href="/schedule"
						className={`font-medium transition-colors ${pathname === "/schedule" ? "text-sage-darker underline" : "text-sage-darker hover:text-sage-dark"}`}
					>
						Schema
					</Link>
				</div>
			</div>
		</nav>
	);
}
