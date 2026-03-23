import type { JSX } from "react";

const svgProps = {
	width: 28,
	height: 28,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
};

export function RakeIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<line x1="12" y1="8" x2="12" y2="22" />
			<path d="M4 2 v6 q0 2 2 2 h1 v-8" />
			<path d="M9 2 v8 h1" />
			<path d="M12 2 v8" />
			<path d="M15 2 v8 h-1" />
			<path d="M18 2 v6 q0 2 -2 2 h-1 v-8" />
		</svg>
	);
}

export function SnowShovelIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<line x1="5" y1="3" x2="14" y2="17" />
			<path d="M14 12 l4 4 q2 2 0 4 l-1 1 q-2 2 -4 0 l-4 -4 z" fill="currentColor" opacity="0.2" />
		</svg>
	);
}

export function SecateursIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="8" cy="16" r="3" fill="currentColor" opacity="0.15" />
			<circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.15" />
			<line x1="8" y1="13" x2="11" y2="4" />
			<line x1="16" y1="13" x2="13" y2="4" />
			<circle cx="12" cy="14" r="1.5" fill="currentColor" />
		</svg>
	);
}

export function WaterHoseIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M3 18 q0 -6 6 -6 q6 0 6 -6" fill="none" />
			<path d="M15 6 l4 -2 l1 3" />
			<circle cx="3" cy="18" r="2" />
			<path d="M19 5 l2 -1" />
			<path d="M19 3 l2 1" />
		</svg>
	);
}

export function OlivesIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<ellipse cx="9" cy="12" rx="4" ry="5" fill="currentColor" opacity="0.2" />
			<ellipse cx="9" cy="12" rx="4" ry="5" />
			<ellipse cx="15" cy="11" rx="4" ry="5" fill="currentColor" opacity="0.2" />
			<ellipse cx="15" cy="11" rx="4" ry="5" />
			<path d="M10 5 q2 -4 6 -3" />
		</svg>
	);
}

export function OliveOilIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="7" y="8" width="10" height="13" rx="1" fill="currentColor" opacity="0.15" />
			<rect x="7" y="8" width="10" height="13" rx="1" />
			<rect x="9" y="4" width="6" height="4" rx="0.5" />
			<line x1="12" y1="4" x2="12" y2="2" />
			<ellipse cx="12" cy="15" rx="2" ry="2.5" fill="currentColor" opacity="0.3" />
		</svg>
	);
}

export function DrinkingGlassIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M8 3 h8 l-1 10 q0 2 -3 2 -3 0 -3 -2 z" fill="currentColor" opacity="0.15" />
			<path d="M8 3 h8 l-1 10 q0 2 -3 2 -3 0 -3 -2 z" />
			<line x1="12" y1="17" x2="12" y2="20" />
			<line x1="8" y1="21" x2="16" y2="21" />
		</svg>
	);
}

export function BedSheetsIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="3" y="6" width="18" height="14" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="3" y="6" width="18" height="14" rx="2" />
			<path d="M3 12 h18" />
			<path d="M6 6 v-2 q0 -1 1 -1 h4 q1 0 1 1 v2" />
			<path d="M14 6 v-2 q0 -1 1 -1 h4 q1 0 1 1 v2" />
		</svg>
	);
}

export function CarCareIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M5 14 l2 -5 q1 -2 3 -2 h4 q2 0 3 2 l2 5" />
			<rect x="3" y="14" width="18" height="5" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="3" y="14" width="18" height="5" rx="2" />
			<circle cx="7" cy="19" r="1.5" fill="currentColor" />
			<circle cx="17" cy="19" r="1.5" fill="currentColor" />
			<path d="M2 10 l3 1" />
			<path d="M22 10 l-3 1" />
			<path d="M3 7 l2 2" />
			<path d="M21 7 l-2 2" />
		</svg>
	);
}

export function HedgeTrimmerIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="2" y="10" width="8" height="4" rx="1" fill="currentColor" opacity="0.15" />
			<rect x="2" y="10" width="8" height="4" rx="1" />
			<path d="M10 10 l11 -4 q1 0 1 1 v2 q0 1 -1 1 l-11 4" />
			<path d="M10 14 l11 -4" />
			<line x1="13" y1="7.5" x2="13" y2="12.5" />
			<line x1="16" y1="6.5" x2="16" y2="11.5" />
			<line x1="19" y1="5.5" x2="19" y2="10.5" />
		</svg>
	);
}

export function AxeIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<line x1="14" y1="4" x2="6" y2="20" />
			<path d="M10 8 l-4 -4 q-2 -1 -3 1 l-1 4 q0 2 2 2 l5 -1 z" fill="currentColor" opacity="0.2" />
		</svg>
	);
}

export function GiftCardIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="2" y="7" width="20" height="14" rx="2" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 7 v14" />
			<path d="M12 7 q-3 -5 -6 -3 q-2 2 1 3" />
			<path d="M12 7 q3 -5 6 -3 q2 2 -1 3" />
		</svg>
	);
}

export function GrapesIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="9" cy="12" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="15" cy="12" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="12" cy="10" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="12" cy="15" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="12" cy="20" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="9" cy="17" r="2.5" fill="currentColor" opacity="0.2" />
			<circle cx="15" cy="17" r="2.5" fill="currentColor" opacity="0.2" />
			<path d="M12 7 v-4" />
			<path d="M12 3 q3 0 4 2" />
		</svg>
	);
}

export function WineIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M8 3 h8 l-1 6 q-1 4 -3 4 -2 0 -3 -4 z" fill="currentColor" opacity="0.15" />
			<path d="M8 3 h8 l-1 6 q-1 4 -3 4 -2 0 -3 -4 z" />
			<line x1="12" y1="13" x2="12" y2="19" />
			<line x1="8" y1="21" x2="16" y2="21" />
			<line x1="12" y1="19" x2="8" y2="21" />
			<line x1="12" y1="19" x2="16" y2="21" />
		</svg>
	);
}

export function AirplaneIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M12 2 q-1 0 -1 2 v6 L3 14 v2 l8 -2 v4 l-2 2 v1 h6 v-1 l-2 -2 v-4 l8 2 v-2 l-8 -4 V4 q0 -2 -1 -2 z" fill="currentColor" opacity="0.15" />
			<path d="M12 2 q-1 0 -1 2 v6 L3 14 v2 l8 -2 v4 l-2 2 v1 h6 v-1 l-2 -2 v-4 l8 2 v-2 l-8 -4 V4 q0 -2 -1 -2 z" />
		</svg>
	);
}

export function ScrewdriverIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="2" y="3" width="13" height="7" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="2" y="3" width="13" height="7" rx="2" />
			<line x1="15" y1="6.5" x2="22" y2="6.5" />
			<path d="M4 10 h6 v9 q0 1 -1 1 H5 q-1 0 -1 -1 z" fill="currentColor" opacity="0.15" />
			<path d="M4 10 h6 v9 q0 1 -1 1 H5 q-1 0 -1 -1 z" />
			<path d="M10 12 q2 1 1.5 3" />
		</svg>
	);
}

export function WheelbarrowIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M3 7 h14 l-2 8 H5 z" fill="currentColor" opacity="0.15" />
			<path d="M3 7 h14 l-2 8 H5 z" />
			<circle cx="5" cy="19" r="2.5" />
			<line x1="5" y1="15" x2="5" y2="16.5" />
			<line x1="17" y1="7" x2="22" y2="5" />
		</svg>
	);
}

export function CarJackIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="3" y="14" width="14" height="4" rx="1" fill="currentColor" opacity="0.15" />
			<rect x="3" y="14" width="14" height="4" rx="1" />
			<circle cx="6" cy="20" r="1.5" />
			<circle cx="14" cy="20" r="1.5" />
			<line x1="7" y1="14" x2="7" y2="8" />
			<rect x="4" y="6" width="6" height="2" rx="0.5" fill="currentColor" opacity="0.15" />
			<rect x="4" y="6" width="6" height="2" rx="0.5" />
			<line x1="17" y1="16" x2="22" y2="11" />
		</svg>
	);
}

export function KettleGrillIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M5 12 a7 7 0 0 1 14 0" fill="currentColor" opacity="0.15" />
			<path d="M5 12 a7 7 0 0 1 14 0" />
			<path d="M4 12 h16" />
			<path d="M5 12 a8 6 0 0 0 14 0" fill="currentColor" opacity="0.15" />
			<path d="M5 12 a8 6 0 0 0 14 0" />
			<line x1="7" y1="18" x2="5" y2="22" />
			<line x1="17" y1="18" x2="19" y2="22" />
			<line x1="5" y1="22" x2="19" y2="22" />
			<path d="M9 5 q0 -2 1 -3" />
			<path d="M12 5 q0 -2 1 -3" />
			<path d="M15 5 q0 -2 1 -3" />
		</svg>
	);
}

export function GymIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<line x1="2" y1="12" x2="22" y2="12" />
			<rect x="4" y="8" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.2" />
			<rect x="4" y="8" width="3" height="8" rx="0.5" />
			<rect x="17" y="8" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.2" />
			<rect x="17" y="8" width="3" height="8" rx="0.5" />
			<rect x="7" y="10" width="2" height="4" rx="0.5" />
			<rect x="15" y="10" width="2" height="4" rx="0.5" />
		</svg>
	);
}

export function MuurikkaIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<ellipse cx="12" cy="14" rx="9" ry="4" fill="currentColor" opacity="0.15" />
			<ellipse cx="12" cy="14" rx="9" ry="4" />
			<line x1="6" y1="18" x2="4" y2="22" />
			<line x1="18" y1="18" x2="20" y2="22" />
			<path d="M8 10 q0 -3 1 -4" />
			<path d="M12 9 q0 -3 1 -4" />
			<path d="M16 10 q0 -3 1 -4" />
		</svg>
	);
}

export function SpeakerIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="4" y="3" width="16" height="18" rx="3" fill="currentColor" opacity="0.15" />
			<rect x="4" y="3" width="16" height="18" rx="3" />
			<circle cx="12" cy="14" r="4" />
			<circle cx="12" cy="14" r="1.5" fill="currentColor" />
			<circle cx="12" cy="7" r="1.5" />
		</svg>
	);
}

export function CompressorIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="3" y="10" width="14" height="10" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="3" y="10" width="14" height="10" rx="2" />
			<circle cx="10" cy="15" r="3" />
			<circle cx="10" cy="15" r="1" fill="currentColor" />
			<path d="M17 14 h3 q1 0 1 -1 v-6 q0 -1 -1 -1 h-2" />
			<circle cx="18" cy="6" r="2" />
		</svg>
	);
}

export function PressureWasherIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="4" y="8" width="10" height="13" rx="2" fill="currentColor" opacity="0.15" />
			<rect x="4" y="8" width="10" height="13" rx="2" />
			<circle cx="9" cy="17" r="2" />
			<path d="M14 12 q4 0 4 -3 v-4 q0 -2 -2 -2 h-2" />
			<line x1="18" y1="5" x2="22" y2="2" />
			<line x1="20" y1="2" x2="22" y2="2" />
			<line x1="22" y1="2" x2="22" y2="4" />
		</svg>
	);
}

export function CircularSawIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.1" />
			<circle cx="12" cy="12" r="8" />
			<circle cx="12" cy="12" r="2" fill="currentColor" />
			<line x1="12" y1="4" x2="12" y2="6" />
			<line x1="12" y1="18" x2="12" y2="20" />
			<line x1="4" y1="12" x2="6" y2="12" />
			<line x1="18" y1="12" x2="20" y2="12" />
			<line x1="6.3" y1="6.3" x2="7.8" y2="7.8" />
			<line x1="16.2" y1="16.2" x2="17.7" y2="17.7" />
			<line x1="6.3" y1="17.7" x2="7.8" y2="16.2" />
			<line x1="16.2" y1="7.8" x2="17.7" y2="6.3" />
		</svg>
	);
}

export function ClearingSawIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<line x1="12" y1="3" x2="12" y2="14" />
			<circle cx="12" cy="17" r="4" fill="currentColor" opacity="0.15" />
			<circle cx="12" cy="17" r="4" />
			<line x1="8.5" y1="14.5" x2="15.5" y2="19.5" />
			<line x1="8.5" y1="19.5" x2="15.5" y2="14.5" />
			<line x1="9" y1="3" x2="15" y2="3" />
		</svg>
	);
}

export function PizzaOvenIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M3 10 a9 6 0 0 1 18 0" fill="currentColor" opacity="0.15" />
			<path d="M3 10 a9 6 0 0 1 18 0" />
			<rect x="3" y="10" width="18" height="10" rx="1" fill="currentColor" opacity="0.15" />
			<rect x="3" y="10" width="18" height="10" rx="1" />
			<rect x="7" y="13" width="10" height="5" rx="1" />
			<path d="M10 6 q0 -2 1 -3" />
			<path d="M14 6 q0 -2 1 -3" />
		</svg>
	);
}

export function GymMatIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="2" y="8" width="20" height="10" rx="1" fill="currentColor" opacity="0.15" />
			<rect x="2" y="8" width="20" height="10" rx="1" />
			<line x1="6" y1="8" x2="6" y2="18" />
			<line x1="10" y1="8" x2="10" y2="18" />
			<line x1="14" y1="8" x2="14" y2="18" />
			<line x1="18" y1="8" x2="18" y2="18" />
		</svg>
	);
}

