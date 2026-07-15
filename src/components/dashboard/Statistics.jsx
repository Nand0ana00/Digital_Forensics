import SummaryCard from "./SummaryCard";

import {
  FaBug,
  FaFolderOpen,
  FaDesktop,
  FaUsers,
} from "react-icons/fa";

export default function Statistics() {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <SummaryCard
        title="Threats"
        value="3"
        change="+12%"
        color="text-red-500"
        icon={<FaBug />}
      />

      <SummaryCard
        title="Evidence"
        value="18"
        change="+5%"
        color="text-blue-500"
        icon={<FaFolderOpen />}
      />

      <SummaryCard
        title="Devices"
        value="6"
        change="+2%"
        color="text-green-500"
        icon={<FaDesktop />}
      />

      <SummaryCard
        title="Users"
        value="12"
        change="+8%"
        color="text-purple-500"
        icon={<FaUsers />}
      />

    </div>

  );

}