import React from "react";
import { fetchPeople } from "../utils/api";
import { PeopleList, Heading } from "../components";

class Home extends React.Component {
  state = {
    people: [],
    loading: true
  };

  componentDidMount() {
    fetchPeople().then(({ results }) => {
      this.setState({ loading: false, people: results });
    });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>
          <Heading>Star Wars Characters</Heading>
          <PeopleList people={this.state.people} />
        </React.Fragment>
      );
    }
  }
}

export default Home;
