import React from "react";
import { Heading as BaseHeading } from "rebass";
import { Logo } from "./index";

function Heading(props) {
  return (
    <div>
      <Logo width={200} />
      <BaseHeading {...props}>{props.children}</BaseHeading>
    </div>
  );
}

export default Heading;
