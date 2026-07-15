import { FaExclamationTriangle } from "react-icons/fa";
import Card from "../ui/Card";

export default function ThreatPanel() {
  return (
    <Card>

      <div className="flex items-center mb-6">
        <FaExclamationTriangle className="text-red-500 text-2xl mr-3" />

        <h2 className="text-2xl font-bold text-white">
          Threat Analysis
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Threat Level</span>
          <span className="text-red-500 font-bold">
            HIGH
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Confidence</span>
          <span className="text-green-400">
            96%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>
          <span className="text-yellow-400">
            Investigating
          </span>
        </div>

        <div>
          <p className="text-gray-400 mb-2">
            Detection Reason
          </p>

          <p className="text-white">
            Multiple failed logins followed by unauthorized USB activity and
            suspicious file deletion.
          </p>
        </div>

      </div>

    </Card>
  );
}