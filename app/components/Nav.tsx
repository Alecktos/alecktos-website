"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.links}>
					<Link
						href="/"
						className={pathname === "/" ? styles.linkActive : styles.link}
					>
						Anmälan
					</Link>
					<Link
						href="/accommodation"
						className={pathname === "/accommodation" ? styles.linkActive : styles.link}
					>
						Boende
					</Link>
					<Link
						href="/schedule"
						className={pathname === "/schedule" ? styles.linkActive : styles.link}
					>
						Schema
					</Link>
					<Link
						href="/presents"
						className={pathname === "/presents" ? styles.linkActive : styles.link}
					>
						Presentlista
					</Link>
				</div>
				<Link href="/" className={styles.title}>Malin & Alexander</Link>
				<div className={styles.spacer} />
			</div>
		</nav>
	);
}
