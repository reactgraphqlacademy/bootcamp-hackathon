import React from "react";
import PropTypes from "prop-types";
import { Panel, Box } from "rebass";
import * as api from "../utils/api";
import { UnsplashConsumer, Media } from "./index";

class WeatherCard extends React.Component {
  state = {
    forecast: null,
    imageQuery: ""
  };

  componentDidMount() {
    const { api } = this.props;
    api.getForecastFrom(this.props.city).then(forecast => {
      let term = forecast.weather[0].description;
      let query = term.split(" ").join(",");
      this.setState({
        forecast,
        imageQuery: query
      });
    });
  }

  render() {
    const { forecast, imageQuery } = this.state;
    const { city } = this.props;
    return (
      <UnsplashConsumer>
        {({ unsplash }) => {
          return (
            <Box p={3}>
              <Panel>
                <Panel.Header>{city}</Panel.Header>
                <pre>
                  <code>{JSON.stringify(forecast, null, 4)}</code>
                </pre>
                <Media unsplash={unsplash} query={imageQuery} />
                <Panel.Footer>Footer</Panel.Footer>
              </Panel>
            </Box>
          );
        }}
      </UnsplashConsumer>
    );
  }
}

WeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  unsplash: PropTypes.object
};

WeatherCard.defaultProps = {
  api
};

export default WeatherCard;
