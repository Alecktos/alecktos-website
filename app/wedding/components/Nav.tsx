"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.links}>
					<Link
						href="/wedding"
						className={pathname === "/wedding" ? styles.linkActive : styles.link}
					>
						Anmälan
					</Link>
					<Link
						href="/wedding/accommodation"
						className={pathname === "/wedding/accommodation" ? styles.linkActive : styles.link}
					>
						Boende
					</Link>
					<Link
						href="/wedding/schedule"
						className={pathname === "/wedding/schedule" ? styles.linkActive : styles.link}
					>
						Schema
					</Link>
					<Link
						href="/wedding/presents"
						className={pathname === "/wedding/presents" ? styles.linkActive : styles.link}
					>
						Presentlista
					</Link>
				</div>
				<Link href="/wedding" className={styles.title}>Malin & Alexander</Link>
				<div className={styles.spacer} />
			</div>
		</nav>
	);
}
