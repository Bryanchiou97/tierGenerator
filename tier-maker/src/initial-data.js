const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Icon 1" },
    "task-2": { id: "task-2", content: "Icon 2" },
    "task-3": { id: "task-3", content: "Icon 3" },
    "task-4": { id: "task-4", content: "Icon 4" },
    "task-5": { id: "task-5", content: "Icon 5" }
  },
  columns: {
    "s-column": {
      id: "s-column",
      title: "S",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
      color: "#ff7f7f"
    },
    "a-column": {
      id: "a-column",
      title: "A",
      taskIds: [],
      color: "#ffbf7f"
    },
    "b-column": {
      id: "b-column",
      title: "B",
      taskIds: [],
      color: "#FFFF7F"
    },
    "c-column": {
      id: "c-column",
      title: "C",
      taskIds: ["task-1"],
      color: "#7fff7f"
    },
    "d-column": {
      id: "d-column",
      title: "D",
      taskIds: ["task-3"],
      color: "#7fbfff"
    }
  },
  //   columnOrder: ["s-column", "a-column", "b-column", "c-column", "d-column"]
  columnOrder: ["s-column", "a-column", "b-column"]
};

export default initialData;
