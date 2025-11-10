import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genreResponse } = useGenres();
  return genreResponse?.results.find((g) => g.id === id);
};

export default useGenre;
