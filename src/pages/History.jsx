import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import HistoryTable from "../components/history/HistoryTable";

export default function History() {
  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            Investigation History
          </h1>

          <HistoryTable />
        </div>
      </div>
    </div>
  );
}