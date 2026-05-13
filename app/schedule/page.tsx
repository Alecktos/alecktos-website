import {BlushMediumBox} from "../components/BlushMediumBox";

export default function SchedulePage() {
	const scheduleItems = [
		{
			time: "14:00",
			description: "Buss avgår från Tävelsås bygdegård till hemlig vigselplats",
			icon: "💒"
		},
		{
			time: "14:30",
			description: "Vigsel",
			icon: "📸"
		},
		{
			time: "15:30",
			description: "Bröllopstårta och brudskål",
			icon: "🥂"
		},
		{
			time: "17:00",
			description: "Buss avgår mot Tävelsås bygdegård",
			icon: "🍽️"
		},
		{
			time: "18:00",
			description: "Middag",
			icon: "🎂"
		},
		{
			time: "21:30",
			description: "FEST!",
			icon: "💃"
		},
		{
			time: "00:00",
			description: "Vickning",
			icon: "🌙"
		}
	];

	return (
		<div className="min-h-screen bg-off-white p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-serif text-sage-darker mb-4 text-center">
					Schema
				</h1>
				<p className="text-sage-dark text-center mb-8">
					Lördag 15 augusti 2026
				</p>

				<div className="relative">
					{/* Timeline line */}
					<div
						className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-sage-light hidden md:block"></div>

					{/* Schedule items */}
					<div className="space-y-6 flex flex-col items-center">
						{scheduleItems.map((item, index) => (
							<div
								key={index}
								className="bg-blush-medium max-w-2xl w-full rounded-lg p-6 relative"
							>
								{/* Timeline dot */}
								<div
									className="absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 bg-sage-darker rounded-full border-4 border-blush-light hidden md:block"></div>

								<div className="flex items-start gap-4">
										<span className="text-3xl" role="img" aria-hidden="true">
											{item.icon}
										</span>
									<div className="flex-1">
										<div
											className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
											<span className="text-lg font-medium text-sage-dark">
													{item.time}
											</span>
										</div>
										<h2 className="text-sage-darker text-lg font-semibold">
											{item.description}
										</h2>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
