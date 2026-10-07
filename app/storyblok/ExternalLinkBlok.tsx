import {storyblokEditable} from "@storyblok/react/rsc";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";
import type {ExternalLinkBlokData} from "@/app/storyblok/types";
import styles from "@/app/page.module.css";

export default function ExternalLinkBlok({blok}: Readonly<{ blok: ExternalLinkBlokData }>) {
	return (
		<a
			href={blok.url}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.projectLink}
			{...storyblokEditable(blok)}
		>
			{blok.display_name || "Go To Project"}
			<ExternalLinkIcon/>
		</a>
	);
}
