import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number; // Floating - 1.1, ...
	// rating: number; // Regular - 1,2,3,4,5
}

const useGames = (
	gameQuery: GameQuery
) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[gameQuery]
	);

export default useGames;
