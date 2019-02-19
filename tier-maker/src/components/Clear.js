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

  // saveImg = () => {
  //   var req = new XMLHttpRequest();
  //   var url = "http://localhost:3000/";
  //   req.open("GET", url, true);
  //   req.responseType = "blob";
  //   req.onload = function() {
  //     var file = new Blob([req.response], {
  //       type: "application/pdf"
  //     });
  //     saveAs(file, "filename.pdf");
  //   };
  //   req.send();
  // };

  render() {
    return (
      <BigContainer>
        <Container>
          <img
            src={img}
            alt="Clear"
            width={"100%"}
            height={"100%"}
            onClick={this.props.onClick}
          />
        </Container>
        {/* <Container>
          <form method="get" action="tier.png">
            <button type="">
              <img
                src={dimg}
                alt="Download"
                width={"100%"}
                height={"100%"}
                onClick={this.state.saveImg}
              />
            </button>
          </form>
        </Container> */}
      </BigContainer>
    );
  }
}

export default Clear;

/*
fetch(this.props.file, {
    method: "GET",
    headers: {
      Accept: "application/pdf",
      "Content-Type": "application/pdf",
    },

  }).then(response => response.blob())
    .then(response => {
  var blob=response
  var reader = new window.FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function() {
  var base64data = reader.result;

      window.open(base64data);

  }
})
.catch(error => {
  console.error(error);
});
*/
