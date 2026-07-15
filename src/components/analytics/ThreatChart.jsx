import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
} from "recharts";

const data = [
{day:"Mon",threats:2},
{day:"Tue",threats:5},
{day:"Wed",threats:3},
{day:"Thu",threats:7},
{day:"Fri",threats:4},
{day:"Sat",threats:6},
{day:"Sun",threats:5},
];

export default function ThreatChart(){

return(

<div className="bg-slate-800 p-6 rounded-xl">

<h2 className="text-white text-xl font-bold mb-6">

Threat Trend

</h2>

<div className="h-80">

<ResponsiveContainer width="100%" height="100%">

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="threats" fill="#ef4444"/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

);

}