const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Icon 1" },
    "task-2": { id: "task-2", content: "Icon 2" },
    "task-3": { id: "task-3", content: "Icon 3" },
    "task-4": { id: "task-4", content: "Icon 4" },
    "task-5": { id: "task-5", content: "Icon 5" },
    "task-6": { id: "task-6", content: "Icon 6" },
    "task-7": { id: "task-7", content: "Icon 7" },
    "task-8": { id: "task-8", content: "Icon 8" },
    "task-9": { id: "task-9", content: "Icon 9" },
    "task-10": { id: "task-10", content: "Icon 10" },
    "task-11": { id: "task-11", content: "Icon 11" }
  },
  rows: {
    "s-row": {
      id: "s-row",
      title: "S",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
        "task-10",
        "task-11"
      ],
      color: "#ff7f7f"
    },
    "a-row": {
      id: "a-row",
      title: "A",
      taskIds: [],
      color: "#ffbf7f"
    },
    "b-row": {
      id: "b-row",
      title: "B",
      taskIds: [],
      color: "#FFFF7F"
    },
    "c-row": {
      id: "c-row",
      title: "C",
      taskIds: [],
      color: "#7fff7f"
    },
    "d-row": {
      id: "d-row",
      title: "D",
      taskIds: [],
      color: "#7fbfff"
    },
    "null-row": {
      id: "null-row",
      title: "Null",
      taskIds: [],
      color: "green"
    }
  },
  //   columnOrder: ["s-column", "a-column", "b-column", "c-column", "d-column"]
  rowOrder: ["s-row", "a-row", "b-row", "c-row", "d-row"],
  unCategorizedTaskes: ["null-row"],
  totalTasks: 11,
  iconInput: ""
};

export default initialData;
