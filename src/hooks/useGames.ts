import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient, { type FetchResponse } from "../services/apiClient";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
