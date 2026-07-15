import { useState } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const history = [
  {
    id: "CASE-001",
    date: "15 Jul 2026",
    user: "John",
    threat: "High",
    status: "Completed",
  },
  {
    id: "CASE-002",
    date: "14 Jul 2026",
    user: "Alice",
    threat: "Medium",
    status: "Completed",
  },
  {
    id: "CASE-003",
    date: "13 Jul 2026",
    user: "Bob",
    threat: "Low",
    status: "Investigating",
  },
  {
    id: "CASE-004",
    date: "12 Jul 2026",
    user: "David",
    threat: "High",
    status: "Investigating",
  },
];

export default function HistoryTable() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [threat, setThreat] = useState("All");

  const filteredHistory = history.filter((item) => {

    const matchSearch =
      item.id.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" || item.status === status;

    const matchThreat =
      threat === "All" || item.threat === threat;

    return matchSearch && matchStatus && matchThreat;

  });

  return (

    <Card title="Investigation History">

      {/* Filters */}

      <div className="grid grid-cols-3 gap-4 mb-6">

        <input
          type="text"
          placeholder="Search Case ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Investigating</option>
        </select>

        <select
          value={threat}
          onChange={(e) => setThreat(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>

      <table className="w-full text-left text-white">

        <thead>

          <tr className="border-b border-slate-600">

            <th className="py-3">Case ID</th>
            <th>Date</th>
            <th>User</th>
            <th>Threat</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {filteredHistory.map((item) => (

            <tr
              key={item.id}
              className="border-b border-slate-700 hover:bg-slate-700"
            >

              <td className="py-3">{item.id}</td>

              <td>{item.date}</td>

              <td>{item.user}</td>

              <td>
                <Badge
                  text={item.threat}
                  color={
                    item.threat === "High"
                      ? "bg-red-600 text-white"
                      : item.threat === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-600 text-white"
                  }
                />
              </td>

              <td>
                <Badge
                  text={item.status}
                  color={
                    item.status === "Completed"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-black"
                  }
                />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </Card>

  );

}