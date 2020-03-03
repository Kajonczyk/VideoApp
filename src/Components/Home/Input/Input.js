import React, { Component } from "react";
import {
  StyledInput,
  StyledWrapper,
  StyledButton,
  InputError
} from "./InputStyles";
import withContext from "../../../Helpers/withContext";
class Input extends Component {
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
    const {
      context,
      context: {
        state: { inputError }
      }
    } = this.props;
    return (
      <div>
        <StyledInput
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Add movie"
        />

        {inputError && <InputError>Input valid video link</InputError>}
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
      </div>
    );
  }
}
export default withContext(Input);
