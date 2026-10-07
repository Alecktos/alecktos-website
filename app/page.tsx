import {StoryblokStory} from "@storyblok/react/rsc";
import Image from "next/image";
import {fetchHomeStory} from "@/app/storyblok/storyblok";
import styles from "./page.module.css";

export const revalidate = 60;

export default async function Home() {
	const homeStory = await fetchHomeStory();

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section className={styles.intro}>
					<div className={styles.avatarFrame}>
						<Image
							src="/profile.jpg"
							alt="Alexander Berlind"
							width={160}
							height={160}
							className={styles.avatar}
							priority
						/>
					</div>
					<div className={styles.introText}>
						<h1 className={styles.name}>
							Alexander Berlind
						</h1>
						<p className={styles.tagline}>
							Developer, Product Owner, Tech lead
						</p>
						<div className={styles.socials}>
							<a
								href="https://github.com/Alecktos"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
							>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/alexander-berlind-45253b70/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
							>
								LinkedIn
							</a>
						</div>
					</div>

				</section>

				<section className={styles.projects}>
					<h2 className={styles.projectsHeading}>
						Projects
					</h2>
					<StoryblokStory story={homeStory}/>
				</section>
			</main>
		</div>
	);
}
