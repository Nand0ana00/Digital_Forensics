import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import ReportCard from "../components/report/ReportCard";

export default function Report() {

  return (

    <div className="flex min-h-screen bg-slate-900">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold mb-8">
            Investigation Report
          </h1>

          <ReportCard />

        </div>

      </div>

    </div>

  );

}