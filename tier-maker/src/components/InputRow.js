import React, { Component } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  border: 2px solid black;
  width: 200px;
  height: calc(100% - 4px);
  float: left;
  background-color: green;
  margin-right: 20px;
`;

const InputDisplay = styled.div`
  float: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap 2px 2px;
  grid-auto-flow: row;
  border: 2px solid black;
  width: 600px;
  height: calc(100% - 4px);
  margin-right: 20px;
`;

const InputContainer = styled.div`
  width: calc(80%);
  background-color: #ffcc33;
  margin: auto;
  margin-top: 10px;
  height: 240px;
`;

const Box = styled.div`
  border: 2px solid black;
  background-color: red;
  justify-self: stretch;
`;

const DeleteArea = styled.div`
  float: left;
  border: 2px solid black;
  width: 120px;
  height: 100%;
`;
class InputRow extends Component {
  state = {};
  handleChange(event) {
    //this.setState({ value: event.target.value });
    console.log(event.target.value);
  }
  render() {
    const aaa = this.props.totalTasks;
    return (
      <InputContainer>
        <InputBox>
          <label>
            Brand:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.props.handler}>Submit</button>
          <div>{aaa}</div>
        </InputBox>
        <InputDisplay>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </InputDisplay>
        <DeleteArea />
      </InputContainer>
    );
  }
}

export default InputRow;
