import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
