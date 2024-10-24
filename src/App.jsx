import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <AddTask />
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <ProjectContainer />
      </main>
    </>
  );
}

export default App;
