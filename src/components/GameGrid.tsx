import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useFetchGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        paddingRight={"10.5px"}
        paddingLeft={"2px"}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
