import React, { Component } from "react";
import styled from "styled-components";
import NewIcon from "./NewIcon";
import { Droppable } from "react-beautiful-dnd";

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

const DeleteArea = styled.div`
  float: left;
  border: 2px solid black;
  width: 120px;
  height: 100%;
`;

class InputRow extends Component {
  state = {};

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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

  render() {
    const aaa = this.props.totalTasks;
    return (
      <InputContainer>
        <InputBox>
          <form onSubmit={this.submitHandler}>
            Brand:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" disabled={!this.state.value} />
          </form>
          <div>{aaa}</div>
        </InputBox>

        <Droppable droppableId={this.props.row.id} direction="horizontal">
          {(provided, snapshot) => (
            <InputDisplay
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.row.taskIds &&
                this.props.row.taskIds.map((task, index) => (
                  <NewIcon tasks={this.props.tasks} task={task} index={index} />
                ))}
              {provided.placeholder}
            </InputDisplay>
          )}
        </Droppable>
        {/* {this.props.row.taskIds &&
            this.props.row.taskIds.map(task => (
              <NewIcon tasks={this.props.tasks} task={task} />
            ))} */}

        <DeleteArea />
      </InputContainer>
    );
  }
}

export default InputRow;
