import { BlushMediumBox } from "../components/BlushMediumBox";

export default function SchedulePage() {
	const scheduleItems = [
		{
			time: "14:00",
			title: "Vigsel",
			description: "Vigseln äger rum i Tävelsås kyrka. Vi ber er att vara på plats senast 13:45.",
			icon: "💒"
		},
		{
			time: "15:00",
			title: "Mingel & Fotografering",
			description: "Efter vigseln samlas vi utanför kyrkan för mingel och gratulationer. Fotografering sker under denna tid.",
			icon: "📸"
		},
		{
			time: "16:30",
			title: "Välkomstdrink",
			description: "Välkomstdrink serveras på Tävelsås bygdegård.",
			icon: "🥂"
		},
		{
			time: "17:30",
			title: "Middag",
			description: "Treretters middag serveras i festlokalen.",
			icon: "🍽️"
		},
		{
			time: "20:00",
			title: "Tårta & Kaffe",
			description: "Bröllopstårta serveras tillsammans med kaffe och te.",
			icon: "🎂"
		},
		{
			time: "21:00",
			title: "Dans & Fest",
			description: "Brudvalsen inleder kvällens dans och fest. Dansgolvet är öppet!",
			icon: "💃"
		},
		{
			time: "01:00",
			title: "Kvällen avslutas",
			description: "Tack för en underbar kväll! Transport kan ordnas vid behov.",
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

			{/* Coming soon notice */}
				<BlushMediumBox>
					<h2 className="text-2xl font-semibold text-sage-darker mb-2">
						Schemat släpps snart!
					</h2>
					<p className="text-sage-dark">
						Det detaljerade schemat för bröllopsdagen kommer att publiceras här inom kort.
					</p>
				</BlushMediumBox>

				<div className="relative">
					{/* Blur overlay */}
					<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
					</div>

					{/* Blurred content */}
					<div className="blur-sm select-none mb-8">
						{/* Timeline line */}
						<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-sage-light hidden md:block"></div>

						{/* Schedule items */}
						<div className="space-y-6 flex flex-col items-center">
							{scheduleItems.map((item, index) => (
								<div
									key={index}
									className="bg-blush-medium max-w-2xl w-full rounded-lg p-6 relative"
								>
									{/* Timeline dot */}
									<div className="absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 bg-sage-darker rounded-full border-4 border-blush-light hidden md:block"></div>

									<div className="flex items-start gap-4">
										<span className="text-3xl" role="img" aria-hidden="true">
											{item.icon}
										</span>
										<div className="flex-1">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
												<h2 className="text-2xl font-semibold text-sage-darker">
													{item.title}
												</h2>
												<span className="text-lg font-medium text-sage-dark">
													{item.time}
												</span>
											</div>
											<p className="text-sage-dark">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
