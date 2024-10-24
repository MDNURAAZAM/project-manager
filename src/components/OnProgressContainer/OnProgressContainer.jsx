import React from "react";
import SortSVG from "../../SVGs/SortSVG";
import OnProgressItem from "./OnProgressItem";

const OnProgressContainer = ({ tasks }) => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({tasks?.length})
          </h3>
          {tasks?.length > 0 && <SortSVG />}
        </div>

        <div>
          {tasks?.length > 0 ? (
            tasks?.map((task) => <OnProgressItem key={task.id} task={task} />)
          ) : (
            <p>On Progress List is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnProgressContainer;
