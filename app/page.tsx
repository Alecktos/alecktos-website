import Link from "next/link";

interface Project {
	title: string;
	year: string;
	description: string;
	href: string;
}

const projects: Project[] = [
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
						{projects.map((project) => (
							<Link
								key={project.href}
								href={project.href}
								className="block border border-sage-lighter rounded-lg p-6 hover:border-sage-light transition-colors"
							>
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="text-xl font-semibold text-sage-darker">
										{project.title}
									</h3>
									<span className="text-sm text-sage-dark shrink-0">
										{project.year}
									</span>
								</div>
								<p className="text-sage-dark mt-2">{project.description}</p>
							</Link>
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
