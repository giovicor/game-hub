import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platformResponse } = usePlatforms();
  return platformResponse?.results.find((p) => p.id === id);
};

export default usePlatform;
