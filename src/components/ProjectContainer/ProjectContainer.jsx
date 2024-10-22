import React from "react";
import ProjectHeader from "./ProjectHeader";
import TodoContainer from "../TodoContainer/TodoContainer";
import OnProgressContainer from "../OnProgressContainer/OnProgressContainer";
import DoneContainer from "../DoneContainer/DoneContainer";
import RevisedContainer from "../RevisedContainer/RevisedContainer";

const ProjectContainer = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <ProjectHeader />

      <div className="-mx-2 mb-6 flex flex-wrap">
        <TodoContainer />
        <OnProgressContainer />
        <DoneContainer />
        <RevisedContainer />
      </div>
    </div>
  );
};

export default ProjectContainer;
