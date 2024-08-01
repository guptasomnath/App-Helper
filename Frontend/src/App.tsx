import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css";
import LoginWithPopup from "./components/LoginWithPopup";

function App() {
  return (
    <>
      <LoginWithPopup />
      <main className="w-full h-screen flex flex-col">
        <Navbar />
        <section className="flex flex-grow overflow-hidden relative">
          <Sidebar />
          <div className="bg-[#F4F5F9] flex-grow p-5 overflow-y-auto">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
