import { HStack, Heading, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {genres.map((genre) => (
          <List.Item key={genre.id} py="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
