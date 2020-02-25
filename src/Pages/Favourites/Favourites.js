import React, { Component } from "react";
import { Header } from "../../Shared/Header/Header";
import { SingleFrame } from "../../Components/Home/MovieFrames/SingleFrame";
import { MovieContext, Provider } from "../../moviesContext";
import { Navbar } from "../../Components/Navigation/Navbar";
export class Favourites extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Header text="Favourites">Favourites</Header>
        <MovieContext.Consumer>
          {context =>
            context.state.movieList
              .filter(item => item.favourite === true)
              .map(item => (
                <SingleFrame
                  key={item.id}
                  id={item.id}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                  views={item.statistics.viewCount}
                  likes={item.statistics.likeCount}
                />
              ))
          }
        </MovieContext.Consumer>
      </>
    );
  }
}
