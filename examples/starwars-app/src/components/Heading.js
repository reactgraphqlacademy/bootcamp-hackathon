import React from "react";
import { Heading as BaseHeading } from "rebass";

function Heading(props) {
  return <BaseHeading {...props}>{props.children}</BaseHeading>;
}

export default Heading;
