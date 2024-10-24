import React from "react";
import ProjectHeader from "./ProjectHeader";
import TodoContainer from "../TodoContainer/TodoContainer";
import OnProgressContainer from "../OnProgressContainer/OnProgressContainer";
import DoneContainer from "../DoneContainer/DoneContainer";
import RevisedContainer from "../RevisedContainer/RevisedContainer";
import { useTasks } from "../../contexts/TaskContext";

const ProjectContainer = () => {
  const { tasks } = useTasks();
  
  const todoTasks = tasks?.filter((task) => task.category === "todo") || [];

  const onProgressTasks =
    tasks?.filter((task) => task.category === "onprogress") || [];

  const doneTasks = tasks?.filter((task) => task.category === "done") || [];

  const revisedTasks =
    tasks?.filter((task) => task.category === "revised") || [];


  return (
    <div className="mx-auto max-w-7xl p-6">
      <ProjectHeader />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <TodoContainer tasks={todoTasks} />
        <OnProgressContainer tasks={onProgressTasks} />
        <DoneContainer tasks={doneTasks} />
        <RevisedContainer tasks={revisedTasks} />
      </div>
    </div>
  );
};

export default ProjectContainer;
