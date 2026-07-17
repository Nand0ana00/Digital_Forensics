import {
  FaFileAlt,
  FaServer,
} from "react-icons/fa";

import Card from "../ui/Card";

export default function RecentActivity({ timeline }) {

  return (

    <Card title="Recent Activity">

      <div className="space-y-3">

        {(timeline ?? []).map((activity, index) => (

          <div
            key={index}
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

              <div className="text-xl text-blue-400">
                <FaServer />
              </div>

              <div>

                <p className="text-white font-medium">
                  {activity.event}
                </p>

                <p className="text-gray-400 text-sm">
                  {activity.source} • {activity.file}
                </p>

              </div>

            </div>

            <span className="text-gray-400 text-sm">
              {activity.timestamp}
            </span>

          </div>

        ))}

      </div>

    </Card>

  );

}