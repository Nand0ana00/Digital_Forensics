import { FaExclamationTriangle } from "react-icons/fa";
import Card from "../ui/Card";

export default function ThreatPanel({ threatReport }) {

  const riskLevel = threatReport?.risk_level ?? "UNKNOWN";
  const riskScore = threatReport?.risk_score ?? 0;
  const threats = threatReport?.threats ?? [];

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
          <span className="text-gray-400">Risk Level</span>

          <span
            className={`font-bold ${
              riskLevel === "HIGH"
                ? "text-red-500"
                : riskLevel === "MEDIUM"
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {riskLevel}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Risk Score</span>

          <span className="text-white">
            {riskScore}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>

          <span className="text-blue-400">
            Investigation Complete
          </span>
        </div>

        <div>
          <p className="text-gray-400 mb-2">
            Threats
          </p>

          {threats.length > 0 ? (
            <ul className="list-disc list-inside text-white">
              {threats.map((threat, index) => (
                <li key={index}>{threat}</li>
              ))}
            </ul>
          ) : (
            <p className="text-green-400">
              No threats detected.
            </p>
          )}
        </div>

      </div>

    </Card>
  );
}