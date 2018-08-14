import React from "react";
import { fetchCharacter, characterImage, parseIDFromURL } from "../utils/api";
import { Heading } from "../components";
import { DataSection } from "./components";
import { Panel, Box, Text, BackgroundImage } from "rebass";

class HomeWorld extends React.Component {
  state = {
    name: "",
    loading: true
  };
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => {
        this.setState({ loading: false, name: res.name });
      });
  }

  render() {
    return (
      <Text css={{ display: "inline" }}>
        {this.state.loading ? "..." : this.state.name}
      </Text>
    );
  }
}

class Character extends React.Component {
  state = {
    character: {},
    loading: true
  };

  componentDidMount() {
    fetchCharacter(this.props.match.params.id).then(res => {
      this.setState({
        loading: false,
        character: res
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      let { character } = this.state;
      let id = parseIDFromURL(character.url);
      return (
        <React.Fragment>
          <Heading fontSize={4}>{character.name}</Heading>
          <BackgroundImage src={characterImage(id)} />
          <Panel my={4}>
            <Panel.Header>Basic Info</Panel.Header>
            <Box>
              <ul>
                <li>Height: {character.height}</li>
                <li>mass: {character.mass}</li>
                <li>Hair color: {character.hair_color}</li>
                <li>Skin color: {character.skin_color}</li>
                <li>Eye color: {character.eye_color}</li>
                <li>Birth year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>
                  Homeworld: <HomeWorld url={character.homeworld} />
                </li>
              </ul>
            </Box>
          </Panel>

          <DataSection dataKey="films" data={character.films} />
          <DataSection dataKey="species" data={character.species} />
          <DataSection dataKey="starships" data={character.starships} />
          <DataSection dataKey="vehicles" data={character.vehicles} />
        </React.Fragment>
      );
    }
  }
}

export default Character;
