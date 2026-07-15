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


const data = [
  { day: "Mon", threats: 2 },
  { day: "Tue", threats: 4 },
  { day: "Wed", threats: 3 },
  { day: "Thu", threats: 6 },
  { day: "Fri", threats: 5 },
  { day: "Sat", threats: 7 },
  { day: "Sun", threats: 4 },
];


export default function ActivityChart() {

  return (

    <Card title="Weekly Threat Activity">

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#475569"
            />


            <XAxis
              dataKey="day"
              stroke="#94a3b8"
            />


            <YAxis
              stroke="#94a3b8"
            />


            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                color: "#ffffff",
              }}
            />


            <Line
              type="monotone"
              dataKey="threats"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />


          </LineChart>

        </ResponsiveContainer>

      </div>

    </Card>

  );

}