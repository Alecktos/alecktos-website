import type {SbBlokData} from "@storyblok/react/rsc";

export interface HomeBlokData extends SbBlokData {
	projects: ProjectBlokData[];
}

export interface ProjectBlokData extends SbBlokData {
	title: string;
	year: string;
	description: string;
	href?: string;
	active?: boolean;
	external_links?: ExternalLinkBlokData[];
}

export interface ExternalLinkBlokData extends SbBlokData {
	url: string;
	display_name?: string;
}
