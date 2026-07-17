import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (
    <div className="
flex
min-h-screen
bg-slate-100
dark:bg-slate-900
">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <Outlet />

      </div>

    </div>
  );
}