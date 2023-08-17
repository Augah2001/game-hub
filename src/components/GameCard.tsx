import { Card, Heading } from "@chakra-ui/react"
import { Game } from "../hooks/useFetchGames"
import { Image, CardBody } from "@chakra-ui/react"

interface Props {
    game: Game
}



const GameCard = ({game}: Props) => {

  return (
    <Card overflow={'hidden'} borderRadius={'10px'}>
        <Image src = {game.background_image} h = '60%'></Image>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>

    </Card>
  )
}

export default GameCard