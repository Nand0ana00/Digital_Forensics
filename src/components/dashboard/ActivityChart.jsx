import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../ui/Card";

export default function ActivityChart({ timeline }) {

  const chartData =
    (timeline ?? []).map((item, index) => ({
      time: item.timestamp.split(" ")[1],
      events: index + 1,
    }));

  return (

    <Card title="Investigation Timeline">

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#475569"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
              }}
            />

            <Line
              type="monotone"
              dataKey="events"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </Card>

  );

}