import React, { Component } from "react";
import { getMovie } from "./Components/Home/Input/getMovie";

export const MovieContext = React.createContext();

export class Provider extends Component {
  state = {
    movieList: [],
    id: 0,
    inputError: false
  };

  getVideoCode = code => {
    if (code.includes("www.youtube.com")) {
      return code.split("v=")[1];
    }
    return code;
  };
  displayError = () => {};
  addMovie = async payload => {
    const response = await getMovie(payload);
    const videoCode = this.getVideoCode(payload);
    if (response) {
      const newVideo = {
        ...response,
        favourite: false,
        id: this.state.id,
        url: videoCode
      };

      this.setState({
        movieList: [...this.state.movieList, newVideo],
        id: this.state.id + 1,
        inputError: false
      });
      return;
    }
    this.setState({
      inputError: true
    });
  };
  setMovieList = arr => {
    this.setState({
      movieList: arr
    });
  };
  setFavourite = index => {
    const arr = [...this.state.movieList];
    arr[index].favourite = true;
    this.setMovieList(arr);
  };
  deleteItem = index => {
    const arr = [...this.state.movieList];
    arr.splice(index, 1);
    this.setMovieList(arr);
  };
  render() {
    return (
      <MovieContext.Provider
        value={{
          state: this.state,
          addMovie: this.addMovie,
          setFavourite: this.setFavourite,
          deleteItem: this.deleteItem
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}
