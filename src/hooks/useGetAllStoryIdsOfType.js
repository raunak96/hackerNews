import { useQuery } from "react-query";
import { getStoryIdsOfType } from "../utils/apis";

const useGetAllStoryIdsOfType = type => {
	const queryKey = `@@Story/${type}`;
	const { isLoading, error, data } = useQuery(
		queryKey,
		() => getStoryIdsOfType(type),
		{
			enabled: !!type,
		}
	);
	return { isLoading, error, data };
};

export default useGetAllStoryIdsOfType;
