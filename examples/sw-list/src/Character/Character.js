import React from "react";
import { fetchCharacter } from "../utils/api";
import { Heading } from "../components";

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
      return (
        <React.Fragment>
          <Heading>{this.state.character.name}</Heading>
          <p>{JSON.stringify(this.state.character, null, 4)}</p>
        </React.Fragment>
      );
    }
  }
}

export default Character;
