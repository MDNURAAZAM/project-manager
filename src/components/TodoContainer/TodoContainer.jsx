import React, { useState } from "react";
import SortSVG from "../../SVGs/SortSVG";
import TodoItem from "./TodoItem";
import { sortTasks } from "../../utils";

const TodoContainer = ({ tasks }) => {
  const [isAscending, setIsAscending] = useState(false);

  const sortedTasks = sortTasks(tasks, isAscending);

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do ({tasks?.length})</h3>
          {tasks?.length > 0 && (
            <button onClick={() => setIsAscending((prev) => !prev)}>
              <SortSVG />
            </button>
          )}
        </div>
        <div>
          {sortedTasks?.length > 0 ? (
            sortedTasks?.map((task) => <TodoItem key={task.id} task={task} />)
          ) : (
            <p>Todo List is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
