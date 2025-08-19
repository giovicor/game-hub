import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

import apiClient from "../services/apiClient";

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
  platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      setLoading(true);

      try {
        const { data: dataResponse } = await apiClient.get<FetchGamesResponse>(
          "/games",
          { signal: controller.signal }
        );
        const { results: games } = dataResponse;
        setGames(games);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) {
          return;
        }

        setError((err as AxiosError).message);
        setLoading(false);
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
