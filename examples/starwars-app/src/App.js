import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import { Container } from "./components";
import Home from "./Home";
import Character from "./Character";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </Container>
  );
}

export default App;
