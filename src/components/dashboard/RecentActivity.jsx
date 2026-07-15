import {
  FaSignInAlt,
  FaUsb,
  FaFileAlt,
  FaTrash,
  FaCloudUploadAlt,
} from "react-icons/fa";

import Card from "../ui/Card";


const activities = [
  {
    time: "09:01",
    icon: <FaSignInAlt className="text-blue-400" />,
    text: "User login detected",
  },
  {
    time: "09:03",
    icon: <FaUsb className="text-yellow-400" />,
    text: "USB device connected",
  },
  {
    time: "09:04",
    icon: <FaFileAlt className="text-green-400" />,
    text: "salary.xlsx accessed",
  },
  {
    time: "09:05",
    icon: <FaTrash className="text-red-400" />,
    text: "salary.xlsx deleted",
  },
  {
    time: "09:07",
    icon: <FaCloudUploadAlt className="text-purple-400" />,
    text: "Dropbox upload detected",
  },
];


export default function RecentActivity() {

  return (

    <Card title="Recent Activity">

      <div className="space-y-3">

        {activities.map((activity) => (

          <div
            key={activity.time}
            className="
              flex items-center justify-between
              border-b border-slate-700
              pb-3
              p-3
              rounded-lg
              hover:bg-slate-700
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="text-xl">
                {activity.icon}
              </div>


              <p className="text-white">
                {activity.text}
              </p>


            </div>


            <span className="text-gray-400 text-sm">
              {activity.time}
            </span>


          </div>

        ))}

      </div>

    </Card>

  );

}