import { Badge, Card, HStack, Heading, Image } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import type { Game } from "../entities/Game";
import { Link } from "react-router";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  if (!game.parent_platforms) {
    console.log(game);
  }

  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <HStack justify="space-between" mb={3}>
          {game.parent_platforms ? (
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          ) : (
            <Badge size="md" px={2}>
              no platforms
            </Badge>
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
