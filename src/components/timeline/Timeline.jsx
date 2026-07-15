import Card from "../ui/Card";
import {
  FaSignInAlt,
  FaUsb,
  FaFileAlt,
  FaTrash,
  FaCloudUploadAlt,
} from "react-icons/fa";

const timeline = [
  {
    id: 1,
    time: "09:01",
    title: "User Login",
    description: "John logged into workstation.",
    icon: <FaSignInAlt />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    time: "09:03",
    title: "USB Connected",
    description: "Kingston USB inserted.",
    icon: <FaUsb />,
    color: "bg-yellow-500",
  },
  {
    id: 3,
    time: "09:04",
    title: "File Access",
    description: "salary.xlsx opened.",
    icon: <FaFileAlt />,
    color: "bg-green-500",
  },
  {
    id: 4,
    time: "09:05",
    title: "File Deleted",
    description: "salary.xlsx removed.",
    icon: <FaTrash />,
    color: "bg-red-500",
  },
  {
    id: 5,
    time: "09:07",
    title: "Cloud Upload",
    description: "Dropbox synchronization detected.",
    icon: <FaCloudUploadAlt />,
    color: "bg-purple-500",
  },
];

export default function Timeline() {
  return (
    <Card title="Investigation Timeline">

      <div className="relative border-l-2 border-slate-600 ml-5">

        {timeline.map((event) => (

          <div
            key={event.id}
            className="relative ml-8 mb-10"
          >

            <div
              className={`absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-white ${event.color}`}
            >
              {event.icon}
            </div>

            <p className="text-sm text-gray-400">
              {event.time}
            </p>

            <h3 className="text-lg font-semibold text-white mt-1">
              {event.title}
            </h3>

            <p className="text-gray-300 mt-1">
              {event.description}
            </p>

          </div>

        ))}

      </div>

    </Card>
  );
}