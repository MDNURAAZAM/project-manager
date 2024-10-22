import React from "react";
import SortSVG from "../../SVGs/SortSVG";
import DeleteSVG from "../../SVGs/DeleteSVG";
import EditSVG from "../../SVGs/EditSVG";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do (45)</h3>
          <SortSVG />
        </div>
        <div>
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
