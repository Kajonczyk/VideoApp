import React, { Component } from "react";
import { MovieContext } from "../moviesContext";
export default function withContext(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <MovieContext.Consumer>
          {context => <WrappedComponent context={context} {...this.props} />}
        </MovieContext.Consumer>
      );
    }
  };
}
