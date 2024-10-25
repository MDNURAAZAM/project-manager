import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { TasksProvider } from "./contexts/TaskContext";
import DeleteTask from "./components/DeleteTask/DeleteTask";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <TasksProvider>
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <ProjectContainer searchText={searchText} />
      </main>
    </TasksProvider>
  );
}

export default App;
