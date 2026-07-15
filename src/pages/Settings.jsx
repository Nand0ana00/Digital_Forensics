import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SettingsCard from "../components/settings/SettingsCard";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-slate-900">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            Settings
          </h1>

          <SettingsCard />

        </div>

      </div>

    </div>
  );
}