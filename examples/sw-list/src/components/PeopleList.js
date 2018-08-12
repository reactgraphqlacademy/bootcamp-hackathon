import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { parseIDFromURL } from "../utils/api";
import {
  Flex,
  Box,
  Card as BaseCard,
  Subhead as BaseSubhead,
  Small
} from "rebass";

const Subhead = styled(BaseSubhead)`
  color: white;
`;

const Card = styled(BaseCard)`
  :hover {
    cursor: pointer;
  }
`;

function PeopleItem({ character, history }) {
  let id = parseIDFromURL(character.url);
  return (
    <Box width={1} p={2}>
      <Card onClick={() => history.push(`/character/${id}`)}>
        <Box p={2}>
          <Subhead fontSize={[2, 3]} children={character.name} />
          <Small>{character.films.length} movies</Small>
        </Box>
      </Card>
    </Box>
  );
}

const Character = withRouter(PeopleItem);

function PeopleList({ people }) {
  return (
    <Flex mx={-2} flexWrap="wrap">
      {people.map((character, i) => {
        return <Character key={i} character={character} />;
      })}
    </Flex>
  );
}

export default PeopleList;
