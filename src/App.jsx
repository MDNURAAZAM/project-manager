import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { TasksProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TasksProvider>
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <ProjectContainer />
      </main>
    </TasksProvider>
  );
}

export default App;
