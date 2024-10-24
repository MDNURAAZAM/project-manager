const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [...tasks, { ...action.payload }];

    case "deleted":
      const { id } = action.payload;
      return tasks.filter((task) => task.id != id);

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default tasksReducer;
