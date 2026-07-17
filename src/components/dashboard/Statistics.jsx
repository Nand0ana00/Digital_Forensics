import SummaryCard from "./SummaryCard";

import {
  FaFolderOpen,
  FaServer,
  FaFileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Statistics({ evidence }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <SummaryCard
        title="Evidence"
        value={evidence?.total_records ?? 0}
        change=""
        color="text-blue-500"
        icon={<FaFolderOpen />}
      />

      <SummaryCard
        title="Sources"
        value={evidence?.sources?.length ?? 0}
        change=""
        color="text-green-500"
        icon={<FaServer />}
      />

      <SummaryCard
        title="Evidence Types"
        value={evidence?.evidence_types?.length ?? 0}
        change=""
        color="text-purple-500"
        icon={<FaFileAlt />}
      />

      <SummaryCard
        title="Severity Levels"
        value={evidence?.severity?.length ?? 0}
        change=""
        color="text-red-500"
        icon={<FaExclamationTriangle />}
      />

    </div>

  );

}