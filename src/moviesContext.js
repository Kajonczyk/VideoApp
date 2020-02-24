import React, { Component } from "react";
import { getMovie } from "./Components/Home/Input/getMovie";

export const MovieContext = React.createContext();

export class Provider extends Component {
  state = {
    movieList: [],
    id: 0
  };
  addMovie = async payload => {
    const response = await getMovie(payload);
    const newVideo = { ...response, favourite: false, id: this.state.id };
    this.setState({
      movieList: [...this.state.movieList, newVideo],
      id: this.state.id + 1
    });
  };
  setFavourite = index => {
    const arr = [...this.state.movieList];
    arr[index].favourite = true;
    this.setState({
      movieList: arr
    });
  };
  deleteItem = index => {
    const arr = [...this.state.movieList];
    arr.splice(index, 1);
    this.setState({
      movieList: arr
    });
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
