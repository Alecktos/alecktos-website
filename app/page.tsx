import Link from "next/link";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";
import styles from "./page.module.css";

interface Project {
	title: string;
	year: string;
	description: string;
	href?: string;
	externalLinks?: { href: string, displayName: string }[] | string[];
	active?: boolean;
}

const projects: Project[] = [
	{
		title: "Poker Game",
		year: "2011",
		description: "A poker game for android phones meant to be played together with other people. Developed in Java using the android SDK.",
		externalLinks: ["https://apkpure.com/texas-holdem-4-friends-free/com.TexasHoldemForFriends"],
	},
	{
		title: "Tåghjälpen",
		year: "2013",
		description: "Train scheduling app for helping commuters. Written in ActionScript.",
		externalLinks: ["https://apkpure.com/texas-holdem-4-friends-free/com.TexasHoldemForFriends"],
	},
	{
		title: "Arctic Adventure",
		year: "2015",
		description: "Android game developed in python using the Kivy framework .",
		externalLinks: ["https://apkpure.com/arctic-adventure/com.ale.arcticadventure"],
	},
	{
		title: "Me-Move",
		year: "2018 -",
		description: "An opensource command line tool for moving and renaming movie and tv-show files. Written in Python.",
		externalLinks: ["https://github.com/Alecktos/me-mover"],
		active: true
	},
	{
		title: "Experimentation with automatic trading",
		year: "2018",
		description: "Experimenting with automatic stock trading based on market movement (Java). ",
		externalLinks: [
			{displayName: "stockfetcher", href: "https://github.com/Alecktos/alecktos-stockfetcher"},
			{
				displayName: "trading-statistics",
				href: "https://github.com/Alecktos/alecktos-trading-statistics"
			},
			{displayName: "marketopen", href: "https://github.com/Alecktos/alecktos-marketopen"}
		]
	},
	{
		title: "Pi-hole on Asustor NAS",
		year: "2020",
		description: "Tutorial on how to run Pi-hole in docker on an Asustor NAS",
		externalLinks: [
			{displayName: "Youtube", href: "https://www.youtube.com/watch?v=7ZeRr5VS7tI"},
			{displayName: "Github repo", href: "https://github.com/Alecktos/pi-hole-docker-asustor"}
		]
	},
	{
		title: "Install Nix with home-manager on macOS",
		description: "Tutorial about how to install Nix with home-manager and fish-shell on macOS",
		year: "2020",
		externalLinks: [
			{displayName: "Youtube", href: "https://www.youtube.com/watch?v=0LwF8wH8zQA&t"},
			{displayName: "Medium", href: "https://alecktos.medium.com/nix-home-manager-fish-shell-on-mac-bbd2a598742"}
		]
	},
	{
		title: "How to use me-mover CLI",
		description: "Tutorial on how to use the me-mover CLI.",
		year: "2020",
		externalLinks: [
			{displayName: "Youtube", href: "https://www.youtube.com/watch?v=sd8W90gviqI"},
			{
				displayName: "Medium",
				href: "https://alecktos.medium.com/me-mover-organize-your-tv-shows-and-movies-6f6e65f7aedb"
			}
		]
	},
	{
		title: "Debugging IntelliJ with nodemon",
		description: "Video and written tutorial about how to debug a nodemon process from IntelliJ.",
		year: "2021",
		externalLinks: [
			{displayName: "Youtube", href: "https://www.youtube.com/watch?v=0Ruix3BTuk8"},
			{
				displayName: "Medium",
				href: "https://alecktos.medium.com/intellij-debugging-with-nodemon-4ebd121b18f1"
			}
		]
	},
	{
		title: "Clean Code presentation",
		description: "Youtube presentation about Clean Code.",
		year: "2022",
		externalLinks: [
			{displayName: "Youtube", href: "https://www.youtube.com/watch?v=AFcLdxMI7rY"}
		]
	},
	{
		title: "Learning Swift",
		description: "Projects for learning the Swift programming language.",
		year: "2022",
		externalLinks: [
			{displayName: "MediaCDFileFormatter", href: "https://github.com/Alecktos/MediaCDFileFormatter"}
		]
	},
	{
		title: "Gym Watch",
		description: "Workout app using Apple Watch as tracker. Developed using SwiftUI, SwiftData.",
		year: "2023 -",
		active: true,
		externalLinks: [
			{
				displayName: "App Store",
				href: "https://apps.apple.com/se/app/gym-watch/id6462500989?platform=appleWatch"
			}
		]
	},
	{
		title: "CdConcatenator",
		description: "Swift CLI-application for merging videos having cd1, cd2 in the filename into a single video. Uses ffmpeg.",
		year: "2023",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/CdConcatenator"}
		]
	},
	{
		title: "AIP File Formatter",
		description: "Application used by an industrial company to format files between different systems.",
		year: "2025",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/aip-fileformatter"}
		]
	},
	{
		title: "Learning Go with Ebitengine",
		description: "Learning Go by building an iOS game using ebitengine.",
		year: "2025",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/clg"}
		]
	},
	{
		title: "Wedding site",
		year: "2026",
		description:
			"Invitation and RSVP site for our wedding, in Swedish. Next.js App Router, server actions, Neon Postgres and Resend.",
		href: "/wedding",
	},
];

const GITHUB_URL = "https://github.com/Alecktos";
const LINKEDIN_URL = "https://www.linkedin.com/in/alexander-berlind-45253b70/";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section className={styles.intro}>
					<div className={styles.avatar}>
						<span className={styles.avatarInitials}>AB</span>
					</div>
					<div className={styles.introText}>
						<h1 className={styles.name}>
							Alexander Berlind
						</h1>
						<p className={styles.tagline}>
							Developer, Product Owner, Tech lead
						</p>
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

				<section className={styles.socials}>
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialLink}
					>
						GitHub
					</a>
					<a
						href={LINKEDIN_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialLink}
					>
						LinkedIn
					</a>
				</section>
			</main>
		</div>
	);
}
