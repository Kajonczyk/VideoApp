import React, { Component } from "react";
import { StyledInput, StyledWrapper, StyledButton } from "./InputStyles";
import { MovieContext } from "../../../moviesContext";

export class Input extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <StyledInput type="text" value={value} onChange={this.handleChange} />
        <MovieContext.Consumer>
          {context => (
            <StyledWrapper>
              <StyledButton onClick={() => context.addMovie(value)}>
                Add Movie
              </StyledButton>
            </StyledWrapper>
          )}
        </MovieContext.Consumer>
      </div>
    );
  }
}
