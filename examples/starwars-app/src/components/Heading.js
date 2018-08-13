import React from "react";
import { Box, Heading as BaseHeading } from "rebass";

function Heading(props) {
  return (
    <Box>
      <BaseHeading
        {...props}
        my={3}
        textAlign={props.align ? props.align : "center"}
      >
        {props.children}
      </BaseHeading>
    </Box>
  );
}

export default Heading;
