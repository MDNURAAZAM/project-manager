import React from "react";
import SortSVG from "../../SVGs/SortSVG";
import RevisedItem from "./RevisedItem";

const RevisedContainer = () => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revise (1)</h3>
          <SortSVG />
        </div>
        <div>
          <RevisedItem />
          <RevisedItem />
        </div>
      </div>
    </div>
  );
};

export default RevisedContainer;
