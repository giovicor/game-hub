import { useEffect, useState } from "react";

import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";
import apiClient from "@/services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data: dataResponse } = await apiClient.get<FetchGamesResponse>(
          "/games"
        );
        const { results: games } = dataResponse;
        setGames(games);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
