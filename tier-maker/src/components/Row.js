import React, { Component } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { Droppable } from "react-beautiful-dnd";

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px;
// `;
const Container = styled.div`
  margin: 8px;
  border: 1px solid #595f68;
  background-color: #595f68;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TierName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${props => props.boxColor || "lightblue"};
  float: left;
  margin: 2px;
  //   width: calc(15% - 4px);
  //   height: calc(20% - 4px);
  width: 70px;
  height: 70px;
`;

const TierBoxes = styled.div`
  //   box-sizing: border-box;
  //   float: left;
  //   margin: 2px;
  //   width: calc(85% - 4px);
  //   height: calc(20% - 4px);
  //   background-color: #595f68;
  align-items: center;
  padding: 8px;
  transition: background-color 0.2s ease;
  //background-color: ${props =>
    props.isDraggingOver ? "lightblue" : "white"};
  background-color: #595f68
  display: flex;
  flex-grow: 1;
  min-height: 100px;
`;

class Row extends Component {
  state = {};
  render() {
    return (
      <Container>
        <TierName boxColor={this.props.row.color}>
          {this.props.row.title}
        </TierName>
        <Droppable
          droppableId={this.props.row.id}
          direction="horizontal"
          //   type={this.props.column.id === "b-column" ? "done" : "active"}
          // control if you can drag drop into this column if same column type
          // isDropDisabled={this.props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <TierBoxes
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Icon key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TierBoxes>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Row;
