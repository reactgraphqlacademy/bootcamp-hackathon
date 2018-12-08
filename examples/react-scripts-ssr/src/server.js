const React = require("react");
const express = require("express");
const { createSSRMiddleware } = require("react-scripts-ssr");
const { renderToString } = require("react-dom/server");
import App from "./App";

const server = express();

server.use(
  createSSRMiddleware((req, res, next) => {
    const body = renderToString(<App />);
    next({ body }, req, res);
  })
);

const PORT = process.env.REACT_APP_SERVER_SIDE_RENDERING_PORT || 8888;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
