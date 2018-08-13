import React from "react";
import { fetchCharacters, searchByQuery } from "../utils/api";
import { CharactersList, Heading } from "../components";
import { Input, Text } from "rebass";
import debounce from "lodash.debounce";

function Search(props) {
  return (
    <Input
      my={4}
      type="search"
      placeholder="search"
      value={props.searchTerm}
      onChange={props.handleSearch}
    />
  );
}

class Home extends React.Component {
  state = {
    data: {
      characters: [],
      count: null,
      next: ""
    },
    count: null,
    loading: true,
    searchTerm: ""
  };

  componentDidMount() {
    fetchCharacters().then(this.updateState);
  }

  updateState = ({ results, count, next }) =>
    this.setState({
      loading: false,
      data: { characters: results, count, next }
    });

  handleSearch = debounce(searchTerm => {
    this.setState({ searchTerm, loading: true }, () => {
      this.fetchSearch(searchTerm);
    });
  }, 500);

  fetchSearch = text => {
    searchByQuery(text).then(this.updateState);
  };

  render() {
    return (
      <React.Fragment>
        <Heading fontSize={4}>Star Wars Characters</Heading>
        <Search
          searhTerm={this.state.searchTerm}
          handleSearch={e => this.handleSearch(e.target.value)}
        />
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : this.state.data.count > 0 ? (
          <CharactersList characters={this.state.data.characters} />
        ) : (
          <Text>No results :(</Text>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
