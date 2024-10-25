import { useState } from "react";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { TasksProvider } from "./contexts/TaskContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <TasksProvider>
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <ProjectContainer searchText={searchText} />
      </main>
      <ToastContainer position="bottom-right" autoClose="3000" />
    </TasksProvider>
  );
}

export default App;
