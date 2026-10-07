import {apiPlugin, type ISbStoryData, storyblokInit} from "@storyblok/react/rsc";
import ExternalLinkBlok from "@/app/storyblok/ExternalLinkBlok";
import HomeBlok from "@/app/storyblok/HomeBlok";
import ProjectBlok from "@/app/storyblok/ProjectBlok";
import type {HomeBlokData} from "@/app/storyblok/types";

const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	apiOptions: {
		region: "eu",
	},
	components: {
		home: HomeBlok,
		project: ProjectBlok,
		external_link: ExternalLinkBlok,
	},
});

const contentVersion = process.env.VERCEL_ENV === "production" ? "published" : "draft";

export async function fetchHomeStory(): Promise<ISbStoryData<HomeBlokData>> {
	const {data} = await getStoryblokApi().get("cdn/stories/home", {version: contentVersion});
	return data.story;
}
