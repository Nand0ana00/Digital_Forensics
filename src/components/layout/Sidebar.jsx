import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUpload,
  FaClock,
  FaProjectDiagram,
  FaFilePdf,
  FaHistory,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

export default function Sidebar() {

  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <FaUpload />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <FaClock />,
    },
    {
      name: "Evidence Graph",
      path: "/graph",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Report",
      path: "/report",
      icon: <FaFilePdf />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        MENU
      </h2>

      <ul className="space-y-3">

        {menu.map((item) => (

          <li key={item.path}>

            <Link
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>

          </li>

        ))}

      </ul>

    </aside>
  );
}