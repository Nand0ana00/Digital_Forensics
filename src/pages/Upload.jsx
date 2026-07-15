import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import UploadBox from "../components/upload/UploadBox";

export default function Upload() {
  return (
    <div className="flex min-h-screen bg-slate-900">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            Upload Evidence
          </h1>

          <UploadBox />

        </div>

      </div>

    </div>
  );
}