import React, { Component } from "react";
import { getMovie } from "./Components/Home/Input/getMovie";

export const MovieContext = React.createContext();

export class Provider extends Component {
  state = {
    name: "",
    movieList: []
  };
  addMovie = async payload => {
    const response = await getMovie(payload);
    const newVideo = { ...response, favourite: false };
    this.setState({
      movieList: [...this.state.movieList, newVideo]
    });
  };
  render() {
    return (
      <MovieContext.Provider
        value={{ state: this.state, addMovie: this.addMovie }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}
