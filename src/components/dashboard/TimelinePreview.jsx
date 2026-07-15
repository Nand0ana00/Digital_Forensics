import {
  FaSignInAlt,
  FaUsb,
  FaFileAlt,
  FaTrash,
  FaCloudUploadAlt,
} from "react-icons/fa";

import Card from "../ui/Card";


const timeline = [
  {
    time: "09:01",
    title: "User Login",
    description: "John logged into workstation.",
    icon: <FaSignInAlt />,
    color: "bg-blue-500",
  },
  {
    time: "09:03",
    title: "USB Connected",
    description: "Kingston USB inserted.",
    icon: <FaUsb />,
    color: "bg-yellow-500",
  },
  {
    time: "09:04",
    title: "File Access",
    description: "salary.xlsx opened.",
    icon: <FaFileAlt />,
    color: "bg-green-500",
  },
  {
    time: "09:05",
    title: "File Deleted",
    description: "salary.xlsx removed.",
    icon: <FaTrash />,
    color: "bg-red-500",
  },
  {
    time: "09:07",
    title: "Cloud Upload",
    description: "Dropbox synchronization detected.",
    icon: <FaCloudUploadAlt />,
    color: "bg-purple-500",
  },
];


export default function TimelinePreview() {

  return (

    <Card title="Investigation Timeline">

      <div className="relative border-l-2 border-slate-600 ml-5">

        {timeline.map((event) => (

          <div
            key={event.time}
            className="
              relative
              ml-8
              mb-8
              p-3
              rounded-lg
              hover:bg-slate-700
              transition
            "
          >

            <div
              className={`
                absolute
                -left-12
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                text-white
                ${event.color}
              `}
            >
              {event.icon}
            </div>


            <p className="text-gray-400 text-sm">
              {event.time}
            </p>


            <h3 className="text-white font-semibold">
              {event.title}
            </h3>


            <p className="text-gray-300">
              {event.description}
            </p>


          </div>

        ))}

      </div>

    </Card>

  );

}