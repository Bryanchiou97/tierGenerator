import React, { Component } from "react";
import img from "./recycle.png";
//import img from "./dIcon.PNG";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  height: 50%;
  width: 100%;
`;

class Clear extends Component {
  state = {};
  handleClick = () => {
    console.log("hello");
  };
  render() {
    return (
      <Container>
        <img
          src={img}
          width={"75%"}
          height={"75%"}
          onClick={this.props.onClick}
        />
      </Container>
    );
  }
}

export default Clear;
