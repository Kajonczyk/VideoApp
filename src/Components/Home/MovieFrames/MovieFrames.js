import React, { Component } from "react";
import { SingleFrame } from "./SingleFrame";
import { MovieContext } from "../../../moviesContext";
export class MovieFrames extends Component {
  render() {
    return (
      <MovieContext.Consumer>
        {context => (
          <div>
            {context.state.movieList.map(item => (
              <SingleFrame
                key={item.id}
                id={item.id}
                thumbnail={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                views={item.statistics.viewCount}
                likes={item.statistics.likeCount}
                url={item.url}
              />
            ))}
          </div>
        )}
      </MovieContext.Consumer>
    );
  }
}
