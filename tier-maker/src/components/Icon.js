import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  //border: 2px solid black;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  min-height: 80px;
  min-width: 80px;
  //   max-height: 80px;
  //   max-width: 100px;
`;

class Icon extends Component {
  state = {};
  render() {
    const isDragDisabled = this.props.task.id === "test";

    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Icon;

//snapshot example
// const draggableSnapshot = {
//     isDragging: true,
//     draggingOver: 'column-1',
// };
// const droppableSnapshop = {
//     isDraggingOver: true,
//     draggingOverWith: 'task-1',
// };
