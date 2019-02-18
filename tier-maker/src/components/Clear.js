import React, { Component } from "react";
import img from "./recycle.png";
import dimg from "./dIcon.PNG";
import styled from "styled-components";

const BigContainer = styled.div`
  display: grid;
  background-color: #595f68;
  grid-template-columns: 100%;
  //grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
`;

const Container = styled.div`
  //border: 2px solid black;
  place-self: center;
`;

class Clear extends Component {
  state = {};
  handleClick = () => {
    console.log("hello");
  };
  render() {
    return (
      <BigContainer>
        <Container>
          <img
            src={img}
            width={"100%"}
            height={"100%"}
            onClick={this.props.onClick}
          />
        </Container>
        <Container>
          <img
            src={dimg}
            width={"100%"}
            height={"100%"}
            onClick={this.props.onClick}
          />
        </Container>
      </BigContainer>
    );
  }
}

export default Clear;
