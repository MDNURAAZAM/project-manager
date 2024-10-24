import React from "react";
import SortSVG from "../../SVGs/SortSVG";
import RevisedItem from "./RevisedItem";

const RevisedContainer = ({ tasks }) => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revise ({tasks?.length})</h3>
          {tasks?.length > 0 && <SortSVG />}
        </div>
        <div>
          {tasks?.length > 0 ? (
            tasks?.map((task) => <RevisedItem key={task.id} task={task} />)
          ) : (
            <p>Revise List is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevisedContainer;
