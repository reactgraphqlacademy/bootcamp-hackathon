import React from "react";
import { Panel, Box, Subhead } from "rebass";

function Repo({ repo }) {
  return (
    <Panel>
      <Box p={3}>
        <Subhead>{repo.name}</Subhead>
      </Box>
    </Panel>
  );
}

export default Repo;
