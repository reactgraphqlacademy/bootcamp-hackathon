import React from "react";
import PropTypes from "prop-types";
import { Box, BackgroundImage } from "rebass";

class Media extends React.Component {
  state = {
    image: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.handleQuery(this.props.query);
    }
  }

  handleQuery = query => {
    this.props.unsplash &&
      this.props.unsplash.search &&
      this.props.unsplash.search
        .photos(this.props.query, 1)
        .then(res => res.json())
        .then(json => {
          this.setState({ image: json.results[0].urls.small });
        });
  };

  render() {
    const { image } = this.state;
    return (
      <Box>
        <BackgroundImage ratio={1} src={image} />
      </Box>
    );
  }
}

Media.propTypes = {
  unsplash: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
};

export default Media;
