import React, { Component } from "react";
import styled from "styled-components";
import NewIcon from "./NewIcon";
import { Droppable } from "react-beautiful-dnd";
import Clear from "./Clear";

const InputContainer = styled.div`
  display: grid;
  width: calc(100%);
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 100%;
  border: 2px solid black;
`;

const InputBox = styled.div`
  //border: 2px solid black;
  display: grid;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;
  background-color: #595f68;
`;

const InputDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2px 2px;
  grid-auto-flow: row;
  //border: 2px solid black;
  grid-area: 1 / 2 / 2 / 3;
  justify-self: stretch;
  background-color: #595f68;
`;

const DeleteArea = styled.div`
  // text-align: center;
  background-color: #595f68;
  //border: 2px solid black;
  grid-area: 1 / 3 / 2 / 4;
`;

class InputRow extends Component {
  state = {};

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.state = {
      value: ""
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    //console.log(event.target.value);
  }
  submitHandler(event) {
    event.preventDefault();
    this.props.handlerFromParent(this.state.value);
    this.setState({
      value: ""
    });
  }

  clearHandler(event) {
    event.preventDefault();
    this.props.clearAllHandler();
  }

  render() {
    return (
      <InputContainer>
        <InputBox>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" disabled={!this.state.value} />
          </form>
        </InputBox>

        <Droppable droppableId={this.props.row.id} direction="horizontal">
          {(provided, snapshot) => (
            <InputDisplay
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.row.taskIds.map((task, index) => (
                <NewIcon tasks={this.props.tasks} task={task} index={index} />
              ))}
              {provided.placeholder}
            </InputDisplay>
          )}
        </Droppable>

        <DeleteArea>
          <Clear onClick={this.clearHandler} />
        </DeleteArea>
      </InputContainer>
    );
  }
}

export default InputRow;
