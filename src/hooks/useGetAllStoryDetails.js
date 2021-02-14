import { useQueries } from "react-query";
import { getStory } from "../utils/apis";

const useGetAllStoryDetails = storyIds => {
	const allStoryIds = storyIds;
	const useAllQueries = useQueries(
		allStoryIds.map(storyId => ({
			queryKey: `@@story/${storyId}`,
			queryFn: () => getStory(storyId),
			enabled: !!storyId,
		}))
	);
	return useAllQueries;
};

export default useGetAllStoryDetails;
