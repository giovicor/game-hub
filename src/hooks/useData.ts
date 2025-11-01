import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

import type { AxiosRequestConfig } from "axios";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      const fetchData = async () => {
        setLoading(true);

        try {
          const { data: dataResponse } = await apiClient.get<FetchResponse<T>>(
            endpoint,
            { signal: controller.signal, ...requestConfig }
          );
          const { results } = dataResponse;
          setData(results);
          setLoading(false);
        } catch (err) {
          if (err instanceof CanceledError) {
            return;
          }

          setError((err as AxiosError).message);
          setLoading(false);
        }
      };

      fetchData();

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
