import React from "react";
import DeleteSVG from "../../SVGs/DeleteSVG";
import EditSVG from "../../SVGs/EditSVG";

const RevisedItem = () => {
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 font-semibold text-rose-500">Content Writer</h4>
        <div className="flex gap-2">
          <DeleteSVG />
          <EditSVG />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">
        Make Promotional Ads for Instagram fasto's
      </p>

      <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
    </div>
  );
};

export default RevisedItem;
