import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
      </main>
    </>
  );
}

export default App;
