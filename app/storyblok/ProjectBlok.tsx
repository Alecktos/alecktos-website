import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";
import Link from "next/link";
import type {ProjectBlokData} from "@/app/storyblok/types";
import styles from "@/app/page.module.css";

export default function ProjectBlok({blok}: Readonly<{ blok: ProjectBlokData }>) {
	return (
		<div className={styles.projectCard} {...storyblokEditable(blok)}>
			<div className={styles.projectHeader}>
				<h3 className={styles.projectTitle}>
					{blok.title}
					{blok.active && <span className={styles.activeChip}>Active</span>}
				</h3>
				<span className={styles.projectYear}>
					{blok.year}
				</span>
			</div>
			<p className={styles.projectDescription}>{blok.description}</p>
			<div className={styles.projectLinks}>
				{blok.href &&
					<Link href={blok.href} className={styles.projectLink}>View Project</Link>}
				{blok.external_links?.map((externalLink) => (
					<StoryblokServerComponent key={externalLink._uid} blok={externalLink}/>
				))}
			</div>
		</div>
	);
}
