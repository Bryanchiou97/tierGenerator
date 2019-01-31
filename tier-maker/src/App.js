import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import styled, { css } from "styled-components";
import initialData from "./initial-data";
import Row from "./components/Row";
import { DragDropContext } from "react-beautiful-dnd";

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
  margin: auto;
  margin-top: 10px;
  background-color: #00001a;
  //background-color: white;
  display: table-row;
  border-style: solid;
  width: 70%;
  height: 70vh;
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
  width: calc(15% - 4px);
  height: calc(20% - 4px);
`;

const TierBoxes = styled.div`
  box-sizing: border-box;
  float: left;
  margin: 2px;
  width: calc(85% - 4px);
  height: calc(20% - 4px);
  background-color: #595f68;
`;

class App extends Component {
  state = initialData;

  onDragEnd = result => {
    // TODO
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = this.state.rows[source.droppableId];
    const finish = this.state.rows[destination.droppableId];
    if (start === finish) {
      const row = start;
      const newTaskIds = Array.from(row.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newRow = {
        ...row,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        rows: {
          ...this.state.rows,
          [newRow.id]: newRow
        }
      };

      this.setState(newState);
      return;
    }

    //moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    const newState = {
      ...this.state,
      rows: {
        ...this.state.rows,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
    return;
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Tier List Generator</Title>
        </Wrapper>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <BigContainer>
            {this.state.rowOrder.map(rowId => {
              const row = this.state.rows[rowId];
              const tasks = row.taskIds.map(taskId => this.state.tasks[taskId]);
              return <Row key={row.id} row={row} tasks={tasks} />;
            })}
            ;
          </BigContainer>
        </DragDropContext>
      </div>
    );
    // return (
    //   <div>
    //     <Wrapper>
    //       <Title>Tier List Generator</Title>
    //     </Wrapper>
    //     <BigContainer>
    //       <TierName boxColor="#ff7f7f"> S</TierName>
    //       <TierBoxes> </TierBoxes>

    //       <TierName boxColor="#ffbf7f"> A</TierName>
    //       <TierBoxes> </TierBoxes>

    //       <TierName boxColor="#FFFF7F"> B</TierName>
    //       <TierBoxes> </TierBoxes>

    //       <TierName boxColor="#7fff7f"> C</TierName>
    //       <TierBoxes> </TierBoxes>

    //       <TierName boxColor="#7fbfff"> D</TierName>
    //       <TierBoxes> </TierBoxes>
    //     </BigContainer>
    //   </div>
    // );
  }
}

export default App;

// const result = {
//   draggableId: 'task-1',
//   type: 'TYPE',
//   reason: 'DROP',
//   source: {
//     droppableId: 'column-1',
//     index: 0,
//   },
//   destination: {
//     droppableId: 'column-1',
//     index:1,
//   },
// };
