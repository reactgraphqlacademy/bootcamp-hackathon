import React from "react";
import { RepositoryList } from "./components/Repositories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <RepositoryList />
    </div>
  );
}

export default App;
