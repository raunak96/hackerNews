import React from "react";
import { Spinner } from "react-bootstrap";
import useGetAllStoryDetails from "../hooks/useGetAllStoryDetails";
import Story from "./Story";

const Stories = ({ storyIds }) => {
	const storyDetailsQuery = useGetAllStoryDetails(storyIds);
	return (
		<>
			{storyDetailsQuery.map(({ data: story, isLoading }, index) =>
				isLoading ? (
					<p className="loading" key={index}>
						<Spinner animation="grow" size="sm" variant="warning" />
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
