import { Card, Heading,  } from "@chakra-ui/react";
import { Game } from "../hooks/useFetchGames";
import { Image, CardBody } from "@chakra-ui/react";
import PlatformListIcons from "./PlatformListIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game)
  return (
    <Card overflow={"hidden"} borderRadius={"10px"}>
      <Image src={game.background_image} h="60%"></Image>
      <CardBody>
        <>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </>

        <PlatformListIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
