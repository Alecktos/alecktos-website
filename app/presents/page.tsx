import { BlushMediumBox } from "@/app/components/BlushMediumBox";
import {
	RakeIcon,
	SnowShovelIcon,
	SecateursIcon,
	WaterHoseIcon,
	OlivesIcon,
	OliveOilIcon,
	DrinkingGlassIcon,
	BedSheetsIcon,
	CarCareIcon,
	HedgeTrimmerIcon,
	AxeIcon,
	GiftCardIcon,
	GrapesIcon,
	WineIcon,
	AirplaneIcon,
	ScrewdriverIcon,
	WheelbarrowIcon,
	CarJackIcon,
	KettleGrillIcon,
	GymIcon,
	MuurikkaIcon,
	SpeakerIcon,
	CompressorIcon,
	PressureWasherIcon,
	CircularSawIcon,
	ClearingSawIcon,
	PizzaOvenIcon,
	GymMatIcon,
} from "@/app/components/GiftIcons";
import type { JSX } from "react";

interface Gift {
	name: string;
	icon: JSX.Element;
	comment?: string;
}

interface GiftCategory {
	title: string;
	gifts: Gift[];
}

const categories: GiftCategory[] = [
	{
		title: "Till Trädgården",
		gifts: [
			{ name: "Räfsa", icon: <RakeIcon /> },
			{ name: "Snöskyffel", icon: <SnowShovelIcon /> },
			{ name: "Sekatör", icon: <SecateursIcon /> },
			{ name: "Vattenslang", icon: <WaterHoseIcon /> },
			{ name: "Häcksax", icon: <HedgeTrimmerIcon /> },
			{ name: "Yxa", icon: <AxeIcon /> },
			{ name: "Skottkärra", icon: <WheelbarrowIcon /> },
			{ name: "Röjsåg", icon: <ClearingSawIcon /> },
		],
	},
	{
		title: "Till Garaget",
		gifts: [
			{ name: "Skruvdragare", icon: <ScrewdriverIcon /> },
			{ name: "Domkraft", icon: <CarJackIcon /> },
			{ name: "Kompressor", icon: <CompressorIcon /> },
			{ name: "Högtryckstvätt", icon: <PressureWasherIcon /> },
			{ name: "Cirkelsåg", icon: <CircularSawIcon /> },
			{ name: "Bilvårdsprodukter", icon: <CarCareIcon />, comment: "T.ex. bilschampo, avfettningsmedel" },
		],
	},
	{
		title: "Matlagning",
		gifts: [
			{ name: "Oliver & olivolja", icon: <OlivesIcon /> },
			{ name: "Dricksglas", icon: <DrinkingGlassIcon />, comment: "Vilka?" },
			{ name: "Klotgrill", icon: <KettleGrillIcon /> },
			{ name: "Muurikka", icon: <MuurikkaIcon /> },
			{ name: "Pizzaugn gasol", icon: <PizzaOvenIcon /> },
		],
	},
	{
		title: "Till Hemmet",
		gifts: [
			{ name: "Lakan", icon: <BedSheetsIcon />, comment: "Mått?" },
			{ name: "Gymredskap", icon: <GymIcon />, comment: "T.ex. hantlar, kettlebells, Stepbräda" },
			{ name: "Golvmatta till gym", icon: <GymMatIcon />, comment: "10m², från Biltema" },
			{ name: "Sonos Play", icon: <SpeakerIcon /> },
		],
	},
	{
		title: "Presentkort & Upplevelser",
		gifts: [
			{ name: "Presentkort Ikea", icon: <GiftCardIcon /> },
			{ name: "Presentkort Mio", icon: <GiftCardIcon /> },
			{ name: "Presentkort Bauhaus", icon: <GiftCardIcon /> },
			{ name: "Presentkort Ästad vingård", icon: <GrapesIcon /> },
			{ name: "Vinprovning", icon: <WineIcon /> },
			{ name: "Bidrag till bröllopsresa", icon: <AirplaneIcon /> },
		],
	},
];

export default function PresentsPage(): React.JSX.Element {
	return (
		<div className="min-h-screen bg-off-white p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-serif text-sage-darker mb-8 text-center">
					Presentlista
				</h1>

				<BlushMediumBox>
					<p className="text-sage-darker mb-4 text-center">
						Om ni vill ge en bröllopspresent kan ni välja något från listan nedan,
						men det går såklart även bra att välja något utanför listan.
						Listan kommer att uppdateras löpande.
						För att undvika dubbletter, vänligen kontakta våra toastmasters för att meddela vilken present ni valt.
					</p>
					<p className="text-sage-darker text-center font-semibold mt-2">
						Matilda Rasmusson & Viktor Ferm
					</p>
					<p className="text-sage-darker text-center italic">
						toastmasters.berlind@gmail.com
					</p>
				</BlushMediumBox>

				<div className="w-full max-w-2xl mx-auto space-y-8">
					{categories.map((category) => (
						<section key={category.title}>
							<h2 className="text-2xl font-serif text-sage-darker mb-3">{category.title}</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{category.gifts.map((gift) => (
									<div
										key={gift.name}
										className="flex items-center gap-3 bg-blush-lighter rounded-lg px-4 py-3 shadow-sm"
									>
										<span className="text-sage-dark shrink-0" aria-hidden="true">{gift.icon}</span>
										<div>
											<p className="text-sage-darker w-full text-left">
												{gift.name}
											</p>
											<p className="text-sage-darker w-full text-left">
												{gift.comment && (
													<span className="text-sage-dark text-sm italic">{gift.comment}</span>
												)}
											</p>
										</div>
									</div>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
