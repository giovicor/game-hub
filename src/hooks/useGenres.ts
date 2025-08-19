import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

import apiClient from "../services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      setLoading(true);

      try {
        const { data: dataResponse } = await apiClient.get<FetchGenresResponse>(
          "/genres",
          { signal: controller.signal }
        );
        const { results: genres } = dataResponse;
        setGenres(genres);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) {
          return;
        }

        setError((err as AxiosError).message);
        setLoading(false);
      }
    };

    fetchGenres();

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
