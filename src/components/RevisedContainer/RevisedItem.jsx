import React, { useState } from "react";
import DeleteSVG from "../../SVGs/DeleteSVG";
import EditSVG from "../../SVGs/EditSVG";
import { formatDate } from "../../utils";
import DeleteTask from "../DeleteTask/DeleteTask";
import EditTask from "../EditTask/EditTask";

const RevisedItem = ({ task }) => {
  const { id, taskName, description, date } = task || {};
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
      {showDeleteModal && (
        <DeleteTask taskId={id} onHide={() => setShowDeleteModal(false)} />
      )}

      {showEditModal && (
        <EditTask taskId={id} onHide={() => setShowEditModal(false)} />
      )}
      <div className="mb-4 rounded-lg bg-gray-800 p-4">
        <div className="flex justify-between">
          <h4 className="mb-2 font-semibold text-rose-500">{taskName}</h4>
          <div className="flex gap-2">
            <button onClick={() => setShowDeleteModal(true)}>
              <DeleteSVG />
            </button>
            <button onClick={() => setShowEditModal(true)}>
              <EditSVG />
            </button>
          </div>
        </div>
        <p className="mb-2 text-sm text-zinc-200">{description}</p>

        <p className="mt-6 text-xs text-zinc-400">{formatDate(date)}</p>
      </div>
    </>
  );
};

export default RevisedItem;
