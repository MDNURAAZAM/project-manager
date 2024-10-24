import React, { useState } from "react";
import AddSVG from "../../SVGs/AddSVG";
import AddTask from "../AddTask/AddTask";

const ProjectHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const handleAddClick = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && <AddTask onHide={() => setShowModal(false)} />}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            onClick={handleAddClick}
          >
            <AddSVG />
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
