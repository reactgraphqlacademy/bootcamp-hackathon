import React from "react";
import { Provider as StyleProvider } from "rebass";
import { injectGlobal } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
  }
`;

const theme = {
  fonts: {
    sans: '"Avenir Next", Helvetica, sans-serif'
  },
  fontSizes: [12, 16, 24, 36, 48, 72]
};

function Root() {
  return (
    <StyleProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </StyleProvider>
  );
}

export default Root;
