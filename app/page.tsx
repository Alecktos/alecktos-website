import Link from "next/link";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

interface Project {
	title: string;
	year: string;
	description: string;
	href?: string;
	externalLinks?: { href: string, displayName: string }[] | string[];
}

const projects: Project[] = [
	{
		title: "Android Poker Game",
		year: "2011",
		description: "A poker game for android phones meant to be played together with other people. Developed in Java using the android SDK.",
		externalLinks: ["https://apkpure.com/texas-holdem-4-friends-free/com.TexasHoldemForFriends"],
	},
	{
		title: "Tåghjälpen - Android App",
		year: "2013",
		description: "Train scheduling app for helping commuters. Written in ActionScript.",
		externalLinks: ["https://apkpure.com/texas-holdem-4-friends-free/com.TexasHoldemForFriends"],
	},
	{
		title: "Arctic Adventure - Android Game",
		year: "2015",
		description: "Small android game called ”Arctic Adventure” developed for android. Written in python using the Kivy framework .",
		externalLinks: ["https://apkpure.com/arctic-adventure/com.ale.arcticadventure"],
	},
	{
		title: "Me-Mover - Opensource CLI for moving movies and tv-show files",
		year: "2018",
		description: "A command line tool for moving and renaming movie and tv-show files. Written in Python.",
		externalLinks: ["https://github.com/Alecktos/me-mover"]
	},
	{
		title: "Experimentation with automatic trading",
		year: "2018",
		description: "Experimentation with automated trading. Applications in java, PHP, javascript for experimenting with automatic stock trading based on market movement. Some libs and applications are open sourced on github.",
		externalLinks: [
			{displayName: "alecktos-stockfetcher", href: "https://github.com/Alecktos/alecktos-stockfetcher"},
			{
				displayName: "alecktos-trading-statistics",
				href: "https://github.com/Alecktos/alecktos-trading-statistics"
			},
			{displayName: "alecktos-marketopen", href: "https://github.com/Alecktos/alecktos-marketopen"}
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
		title: "Gym Watch - Apple Watch workout app",
		description: "An early version of a workout app using Apple Watch as tracker. Developed using SwiftUI, SwiftData.",
		year: "2023",
		externalLinks: [
			{
				displayName: "App Store",
				href: "https://apps.apple.com/se/app/gym-watch/id6462500989?platform=appleWatch"
			}
		]
	},
	{
		title: "CdConcatenator",
		description: "A Swift cli-application for merging videos having cd1, cd2 in the filename into a single video. Uses ffmpeg.",
		year: "2023",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/CdConcatenator"}
		]
	},
	{
		title: "Me-Mover updates",
		description: "Small updates to me-mover, a small open sourced cli-application for moving movie and tv-show files.",
		year: "2024",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/me-mover"}
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
		title: "Me-Mover updates",
		description: "Updates to me-mover, a small open sourced cli-application for moving movie and tv-show files.",
		year: "2025",
		externalLinks: [
			{displayName: "Github repo", href: "https://github.com/Alecktos/me-mover"}
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
		<div className="min-h-screen bg-off-white p-8">
			<main className="max-w-3xl mx-auto py-8">
				<section className="flex flex-col sm:flex-row items-center gap-8">
					<div className="w-40 h-40 shrink-0 rounded-full bg-sage-lighter flex items-center justify-center">
						<span className="text-4xl font-serif text-sage-darker">AB</span>
					</div>
					<div className="text-center sm:text-left">
						<h1 className="text-4xl font-serif text-sage-darker">
							Alexander Berlind
						</h1>
						<p className="text-lg text-sage-dark mt-1">
							Developer, Product Owner, Tech lead
						</p>
					</div>
				</section>

				<section className="mt-16">
					<h2 className="text-2xl font-serif text-sage-darker mb-6">
						Projects
					</h2>
					<div className="grid grid-cols-1 gap-4">
						{projects.reverse().map((project, index) => (
							<div key={index}
							     className="block border border-sage-lighter rounded-lg p-6 hover:border-sage-light transition-colors">
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="text-xl font-semibold text-sage-darker">
										{project.title}
									</h3>
									<span className="text-sm text-sage-dark shrink-0">
										{project.year}
									</span>
								</div>
								<p className="text-sage-dark mt-2">{project.description}</p>
								{project.href &&
									<Link href={project.href} className="text-sage-dark underline mt-2 inline-block">View
										Project</Link>}
								{project.externalLinks?.map((externalLink, index) => {
									if (typeof externalLink === "object") {
										return (
											<a
												key={index}
												href={externalLink.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sage-dark underline mt-2 mr-2 inline-flex items-center gap-1"
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
											className="text-sage-dark underline mt-2 inline-flex items-center gap-1"
										>
											Go To Project
											<ExternalLinkIcon/>
										</a>
									);
								})}
							</div>
						))}
					</div>
				</section>

				<section className="mt-16 flex gap-6 text-sage-dark">
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-sage-darker"
					>
						GitHub
					</a>
					<a
						href={LINKEDIN_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-sage-darker"
					>
						LinkedIn
					</a>
				</section>
			</main>
		</div>
	);
}
