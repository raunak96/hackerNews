import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Stories from "../components/Stories";
import useGetAllStoryIdsOfType from "../hooks/useGetAllStoryIdsOfType";

const StoryType = () => {
	const { type } = useParams();
	const { data: storyIds, isLoading } = useGetAllStoryIdsOfType(type);
	return (
		<>
			<Loader show={isLoading}>Loading...</Loader>
			<Stories storyIds={storyIds} />
		</>
	);
};

export default StoryType;
