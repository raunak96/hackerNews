import React from "react";
import { useParams } from "react-router-dom";
import Stories from "../components/Stories";
import useGetAllStoryIdsOfType from "../hooks/useGetAllStoryIdsOfType";

const StoryType = () => {
	const { type } = useParams();
	const { data: storyIds, isLoading } = useGetAllStoryIdsOfType(type);
	return isLoading ? (
		<p className="loading">Loading...</p>
	) : (
		<Stories storyIds={storyIds} />
	);
};

export default StoryType;
