import {
  FaFileAlt,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";

import Card from "../ui/Card";

export default function TimelinePreview({ timeline }) {

  return (

    <Card title="Investigation Timeline">

      <div className="relative border-l-2 border-slate-600 ml-5">

        {(timeline ?? []).map((event, index) => (

          <div
            key={index}
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
              className="
                absolute
                -left-12
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                text-white
                bg-blue-500
              "
            >
              <FaServer />
            </div>

            <p className="text-gray-400 text-sm">
              {event.timestamp}
            </p>

            <h3 className="text-white font-semibold">
              {event.event}
            </h3>

            <p className="text-gray-300">
              <strong>Source:</strong> {event.source}
            </p>

            <p className="text-gray-300">
              <strong>File:</strong> {event.file}
            </p>

          </div>

        ))}

      </div>

    </Card>

  );

}