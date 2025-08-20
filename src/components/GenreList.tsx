import { HStack, Image, List, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "@/services/imageUrl";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} py="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
