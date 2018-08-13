import React from "react";
import { render } from "react-testing-library";

import { Heading } from "./index";

describe("Heading component", () => {
  test("Snapshot", () => {
    const { container } = render(<Heading>Hola Heading</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("Should render children correctly", () => {
    let content = "Hello Heading";
    const { getByText } = render(<Heading>{content}</Heading>);
    expect(getByText(content)).toBeInTheDocument();
  });
});
