import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const BigContainer = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 10px;
  background-color: #00001a;
  flex-direction: row;
  border-style: solid;
  width: 70%;
  height: 70vh;
`;

const TierName = styled.div`
  text-align: center;
  background-color: ${props => props.boxColor || "lightblue"};
  float: left;
  margin: 2px;
  width: 15%;
  height: 19%;
`;

const TierBoxes = styled.div`
  float: left;
  margin: 2px;
  width: 75%;
  background-color: #595f68;
  height: 19%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Title>Tier List Generator</Title>
        </Wrapper>
        <BigContainer>
          <TierName boxColor="#ff7f7f"> S</TierName>
          <TierBoxes> </TierBoxes>

          <TierName boxColor="#ffbf7f"> A</TierName>
          <TierBoxes> </TierBoxes>

          <TierName boxColor="#FFFF7F"> B</TierName>
          <TierBoxes> </TierBoxes>

          <TierName boxColor="#7fff7f"> C</TierName>
          <TierBoxes> </TierBoxes>

          <TierName boxColor="#7fbfff"> D</TierName>
          <TierBoxes> </TierBoxes>
        </BigContainer>
      </div>
    );
  }
}

export default App;
