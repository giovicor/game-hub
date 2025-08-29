import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import { Genre } from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }} px={5}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Box pl={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack mb={5} gap={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
