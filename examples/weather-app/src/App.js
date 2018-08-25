import React from "react";
import { Container, Flex, Box } from "rebass";
import { WeatherCard, UnsplashProvider } from "./components";

class App extends React.Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Weather App</h1>
        </header>
        <UnsplashProvider>
          <Flex mx={-3} flexWrap="wrap">
            <Box width={[1, 1 / 3]}>
              <WeatherCard city="London" />
            </Box>
            <Box width={[1, 1 / 3]}>
              <WeatherCard city="Barcelona" />
            </Box>
            <Box width={[1, 1 / 3]}>
              <WeatherCard city="New York" />
            </Box>
          </Flex>
        </UnsplashProvider>
      </Container>
    );
  }
}

export default App;
