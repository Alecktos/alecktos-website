import Image from "next/image";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";
import {projects} from "@/app/data/projects";
import styles from "./page.module.css";

export default function Home() {
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
					<div className={styles.projectGrid}>
						{[...projects].reverse().map((project, index) => (
							<div key={index} className={styles.projectCard}>
								<div className={styles.projectHeader}>
									<h3 className={styles.projectTitle}>
										{project.title}
										{project.active && <span className={styles.activeChip}>Active</span>}
									</h3>
									<span className={styles.projectYear}>
										{project.year}
									</span>
								</div>
								<p className={styles.projectDescription}>{project.description}</p>
								<div className={styles.projectLinks}>
									{project.href &&
										<Link href={project.href} className={styles.projectLink}>View Project</Link>}
									{project.externalLinks?.map((externalLink, index) => {
										if (typeof externalLink === "object") {
											return (
												<a
													key={index}
													href={externalLink.href}
													target="_blank"
													rel="noopener noreferrer"
													className={styles.projectLink}
												>
													{externalLink.displayName}
													<ExternalLinkIcon/>
												</a>
											);
										}

										return (
											<a
												key={index}
												href={externalLink}
												target="_blank"
												rel="noopener noreferrer"
												className={styles.projectLink}
											>
												Go To Project
												<ExternalLinkIcon/>
											</a>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
