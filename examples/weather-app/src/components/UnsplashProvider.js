import React from "react";
import Unsplash from "unsplash-js";

const APP_ACCESS_KEY =
  "223aa989c7b2dd1c0bd2ae31a1de72cb3bf3a9201d07658d8656be6391e7c73a";
const APP_SECRET =
  "aff4aefb3340f26fab1dea6aae06af77d329e632745076ae275c252a8e07fd4f";

const UnsplashContext = React.createContext();

class UnsplashProvider extends React.Component {
  state = {
    unsplash: {}
  };

  componentDidMount() {
    const unsplash = new Unsplash({
      applicationId: APP_ACCESS_KEY,
      secret: APP_SECRET
    });

    this.setState({ unsplash });
    console.log(unsplash);
  }

  render() {
    const { unsplash } = this.state;
    return (
      <UnsplashContext.Provider value={{ unsplash }}>
        {this.props.children}
      </UnsplashContext.Provider>
    );
  }
}

const UnsplashConsumer = UnsplashContext.Consumer;

export { UnsplashProvider, UnsplashConsumer };
