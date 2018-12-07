import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        { console.log(data) }
      </div>
    );
  }
}

export const FETCH_MOVIE = gql`
  query {
    movie(id:550){
      id,title,poster_path,
      credits{
        cast{
          name,character,profile_path
        }
      },
      rating{
        avg_rating,total_ratings
      },
      recommendations{
        results{
          title,poster_path
        }
      }
    }
  }
`
const fetchMovie = graphql(FETCH_MOVIE)

export default fetchMovie(App);
