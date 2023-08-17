import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav nav" "left-side main right-side"`,
        lg: `"nav nav nav" "left-side main right-side"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "15% 1fr 15%",
        lg: "15% 1fr 15%",
      }}
      gap="5px">
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem pl="2" area={"left-side"} >
          {" "}
          LeftAside
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        {" "}
        Main
      </GridItem>
      <Show above="md">
        <GridItem pl="2" area={"right-side"}>
          {" "}
          RightAside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
