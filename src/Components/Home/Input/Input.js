import React, { Component } from "react";
import { StyledInput, StyledWrapper, StyledButton } from "./InputStyles";
import { MovieContext } from "../../../moviesContext";

export class Input extends Component {
  state = {
    value: "https://www.youtube.com/watch?v=lSAz2ONC1rk"
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value
    });
  };
  clearInput = () => {
    this.setState({
      value: ""
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <StyledInput
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Add movie"
        />
        <MovieContext.Consumer>
          {context => (
            <StyledWrapper>
              <StyledButton
                onClick={() => {
                  context.addMovie(value);
                  this.clearInput();
                }}
              >
                Add Movie
              </StyledButton>
            </StyledWrapper>
          )}
        </MovieContext.Consumer>
      </div>
    );
  }
}
