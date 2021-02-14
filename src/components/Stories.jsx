import React from "react";
import useGetAllStoryDetails from "../hooks/useGetAllStoryDetails";
import Story from "./Story";

const Stories = ({ storyIds }) => {
	const storyDetailsQuery = useGetAllStoryDetails(storyIds);
	return (
		<>
			{storyDetailsQuery.map(({ data: story, isLoading }, index) =>
				isLoading ? (
					<p className="loading" key={index}>
						Loading...
					</p>
				) : (
					<Story key={story.id} story={story} />
				)
			)}
		</>
	);
};

export default Stories;
