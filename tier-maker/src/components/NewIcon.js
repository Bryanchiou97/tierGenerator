import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "red";
  min-height: 80px;
  min-width: 80px;
`;
// this shit is in a grid called inputdisplay
class NewIcon extends Component {
  state = {};
  render() {
    const currTask = this.props.task;
    return <Container>{this.props.tasks[currTask].content}</Container>;
  }
}

export default NewIcon;
