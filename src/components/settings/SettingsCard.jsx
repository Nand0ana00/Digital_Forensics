import { useState } from "react";

export default function SettingsCard() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

      <h2 className="text-2xl text-white font-bold mb-8">
        Application Settings
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <span className="text-white">
            Enable Notifications
          </span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />

        </div>

        <div className="flex justify-between items-center">

          <span className="text-white">
            Dark Mode
          </span>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

        </div>

        <div>

          <label className="text-white block mb-2">
            Investigator Name
          </label>

          <input
            type="text"
            defaultValue="Admin"
            className="w-full bg-slate-700 text-white p-3 rounded-lg"
          />

        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}