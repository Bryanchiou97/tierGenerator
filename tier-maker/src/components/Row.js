import React, { Component } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Droppable } from "react-beautiful-dnd";

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px;
// `;
const Container = styled.div`
  margin: 2px;
  background-color: #595f68;
  display: grid;
  grid-template-columns: [tierNameStart] 1fr [tierNameEnd tierBoxStart] 4fr [tierBoxEnd];
  grid-template-row: 100%;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 100%;
`;

const TierName = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${props => props.boxColor || "lightblue"};
  grid-area: 1 / 1 / 2 / 2;
  margin: 2px;
  height: calc(50%);
  min-height: 80px;
  border: 2px solid black;
`;

const TierBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row
  align-items: center;
  justify-self: stretch;
  margin: 2px;
  border: 2px solid black;
  min-height: 86px;
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
              {this.props.tasks &&
                this.props.tasks.map((task, index) => (
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
//   transition: background-color 0.2s ease;
