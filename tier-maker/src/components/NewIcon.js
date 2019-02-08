import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
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
`;
// this shit is in a grid called inputdisplay
class NewIcon extends Component {
  state = {};
  render() {
    const currTask = this.props.task;
    //return <Container>{this.props.tasks[currTask].content}</Container>;
    return (
      <Draggable
        draggableId={this.props.tasks[currTask].id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.tasks[currTask].content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default NewIcon;
