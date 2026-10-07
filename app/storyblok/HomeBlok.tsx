import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";
import type {HomeBlokData} from "@/app/storyblok/types";
import styles from "@/app/page.module.css";

export default function HomeBlok({blok}: Readonly<{ blok: HomeBlokData }>) {
	return (
		<div className={styles.projectGrid} {...storyblokEditable(blok)}>
			{blok.projects.map((project) => (
				<StoryblokServerComponent key={project._uid} blok={project}/>
			))}
		</div>
	);
}
