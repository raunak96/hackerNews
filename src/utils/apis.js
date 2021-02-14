import axios from "axios";
import { BASE_API_URL } from "./constants";

export const getStory = async id => {
	const { data } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
	return data;
};
export const getStoryIdsOfType = async type => {
	const { data: storyIds } = await axios.get(
		`${BASE_API_URL}/${type}stories.json`
	);
	return storyIds.slice(0, 30);
};
