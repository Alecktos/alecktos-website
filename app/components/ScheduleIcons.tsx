import type {JSX} from "react";

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

/** Bus icon for transport */
export function BusIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<rect x="3" y="4" width="18" height="14" rx="2" fill="currentColor" opacity="0.15"/>
			<rect x="3" y="4" width="18" height="14" rx="2"/>
			<line x1="3" y1="14" x2="21" y2="14"/>
			<line x1="12" y1="4" x2="12" y2="14"/>
			<circle cx="7" cy="20" r="1.5" fill="currentColor"/>
			<circle cx="17" cy="20" r="1.5" fill="currentColor"/>
		</svg>
	);
}

/** Wedding ring */
export function CeremonyIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="12" cy="13" r="7" fill="currentColor" opacity="0.1"/>
			<circle cx="12" cy="13" r="7"/>
			<circle cx="12" cy="13" r="5"/>
			<path d="M12 -1 L16 3.5 L12 8.5 L8 3.5 Z" fill="currentColor" opacity="0.3"/>
			<path d="M12 -1 L16 3.5 L12 8.5 L8 3.5 Z" strokeWidth="2" strokeLinejoin="miter"/>
		</svg>
	);
}

/** Wedding cake */
export function CakeIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M2 18 h20 v3 H2 z" fill="currentColor" opacity="0.15"/>
			<path d="M2 18 h20 v3 H2 z"/>
			<path d="M4 14 h16 v4 H4 z" fill="currentColor" opacity="0.1"/>
			<path d="M4 14 h16 v4 H4 z"/>
			<path d="M6 10 h12 v4 H6 z" fill="currentColor" opacity="0.1"/>
			<path d="M6 10 h12 v4 H6 z"/>
			<path d="M12 6 v4"/>
			<circle cx="12" cy="5" r="1" fill="currentColor"/>
		</svg>
	);
}

/** Plate with fork and knife */
export function DinnerIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="12" cy="12" r="7" fill="currentColor" opacity="0.1"/>
			<circle cx="12" cy="12" r="7"/>
			<circle cx="12" cy="12" r="5"/>
			<line x1="3" y1="4" x2="3" y2="20"/>
			<line x1="2" y1="4" x2="2" y2="8"/>
			<line x1="4" y1="4" x2="4" y2="8"/>
			<line x1="21" y1="4" x2="21" y2="20"/>
			<path d="M21 4 q2 0 2 3 q0 3 -2 3"/>
		</svg>
	);
}

/** People dancing */
export function PartyIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<circle cx="5" cy="4" r="2" fill="currentColor" opacity="0.2"/>
			<circle cx="5" cy="4" r="2"/>
			<path d="M5 6 v5"/>
			<path d="M5 11 l-3 7"/>
			<path d="M5 11 l3 7"/>
			<path d="M2 8 l3 2 l3 -2"/>
			<circle cx="12" cy="3" r="2" fill="currentColor" opacity="0.2"/>
			<circle cx="12" cy="3" r="2"/>
			<path d="M12 5 v5"/>
			<path d="M12 10 l-3 7"/>
			<path d="M12 10 l3 7"/>
			<path d="M9 7 l3 1.5 l3 -2.5"/>
			<circle cx="19" cy="4" r="2" fill="currentColor" opacity="0.2"/>
			<circle cx="19" cy="4" r="2"/>
			<path d="M19 6 v5"/>
			<path d="M19 11 l-3 7"/>
			<path d="M19 11 l3 7"/>
			<path d="M16 8 l3 2 l3 -2"/>
		</svg>
	);
}

/** Crescent moon */
export function MoonIcon(): JSX.Element {
	return (
		<svg {...svgProps}>
			<path d="M15 3a8.5 8.5 0 1 0 6 14.5A9 9 0 0 1 15 3z" fill="currentColor" opacity="0.15"/>
			<path d="M15 3a8.5 8.5 0 1 0 6 14.5A9 9 0 0 1 15 3z"/>
		</svg>
	);
}

