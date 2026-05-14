import {BlushMediumBox} from "@/app/components/BlushMediumBox";
import {
	BusIcon,
	CakeIcon,
	CeremonyIcon,
	DinnerIcon,
	KnifeAndForkIcon,
	PartyIcon,
} from "@/app/components/ScheduleIcons";
import type {JSX} from "react";

export default function SchedulePage() {
	const scheduleItems: { time: string; description: string; icon: JSX.Element }[] = [
		{
			time: "14:00",
			description: "Buss avgår från Tävelsås bygdegård till vigselplats",
			icon: <BusIcon/>,
		},
		{
			time: "14:30",
			description: "Vigsel",
			icon: <CeremonyIcon/>,
		},
		{
			time: "15:30",
			description: "Bröllopstårta och brudskål",
			icon: <CakeIcon/>,
		},
		{
			time: "17:00",
			description: "Buss avgår tillbaka till bygdegården",
			icon: <BusIcon/>,
		},
		{
			time: "18:00",
			description: "Middag",
			icon: <DinnerIcon/>,
		},
		{
			time: "21:30",
			description: "FEST!",
			icon: <PartyIcon/>,
		},
		{
			time: "00:00",
			description: "Vickning",
			icon: <KnifeAndForkIcon/>,
		},
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
						className="absolute left-1/2 -translate-x-1/2 top-0 bottom-8 w-0.5 bg-sage-light"
					/>

					{/* Schedule items */}
					<div className="flex flex-col items-center">
						{scheduleItems.map((item, index) => (
							<BlushMediumBox key={`${item.time}-${item.description}`}>
								{/* Timeline dot, do not show on first box */}
								{index !== 0 &&
									<div
										className="absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 bg-sage-darker rounded-full border-4 border-blush-light"
									/>
								}


								<div className="flex flex-col items-center text-center gap-2">
									<div className="flex items-center gap-3">
										<h2 className="text-sage-darker text-lg font-semibold">
											{item.time}
										</h2>

									</div>
									<div className="flex items-center gap-3">
									<span className="text-xl font-medium text-sage-dark">
										{item.description}
									</span>
										<span className="text-sage-dark shrink-0" aria-hidden="true">
										{item.icon}
									</span>
									</div>
								</div>
							</BlushMediumBox>
						))}
					</div>
				</div>
				<div className="mt-12 text-center">
					<h2 className="text-2xl font-serif text-sage-darker mb-4">
						Övrig information
					</h2>
					<ul className="text-sage-dark text-lg list-disc list-inside space-y-2">
						<li>Vigseln kommer ske utomhus på gräsyta.</li>
						<li>Utanför bygdegården kommer det finnas olika aktiviteter - Utmana gärna varandra!</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
