import React from "react";
import ProjectHeader from "./ProjectHeader";
import TodoContainer from "../TodoContainer/TodoContainer";
import OnProgressContainer from "../OnProgressContainer/OnProgressContainer";
import DoneContainer from "../DoneContainer/DoneContainer";
import RevisedContainer from "../RevisedContainer/RevisedContainer";
import { useTasks } from "../../contexts/TaskContext";
import { getTasks } from "../../utils";

const ProjectContainer = ({ searchText }) => {
  const { tasks } = useTasks();
  
  const filteredTasks = tasks.filter((task) =>
    task?.taskName?.toLowerCase().includes(searchText?.toLowerCase())
  );

  const todoTasks = getTasks(filteredTasks, "todo") || [];
  const onProgressTasks = getTasks(filteredTasks, "onprogress") || [];
  const doneTasks = getTasks(filteredTasks, "done") || [];
  const revisedTasks = getTasks(filteredTasks, "revised") || [];

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
