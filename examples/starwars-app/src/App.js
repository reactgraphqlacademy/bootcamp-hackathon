import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Box } from "rebass";
import { Container, Logo } from "./components";

import Home from "./Home";
import Character from "./Character";

function App() {
  return (
    <Container>
      <Box css={{ textAlign: "center" }}>
        <Logo width={200} />
      </Box>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </Container>
  );
}

export default App;
