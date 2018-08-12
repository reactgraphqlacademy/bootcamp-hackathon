import React from "react";
import styled from "styled-components";
import { Absolute, DarkMode, Container as BaseContainer } from "rebass";

const Bg = styled(Absolute)`
  position: fixed;
  background-color: black;
  background-image: url("https://images.unsplash.com/photo-1501862700950-18382cd41497?w=3294&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

function Container({ children }) {
  return (
    <BaseContainer maxWidth={600}>
      <DarkMode p={4} my={5}>
        {children}
      </DarkMode>
      <Bg top={0} left={0} zIndex={-1} />
    </BaseContainer>
  );
}

export default Container;
