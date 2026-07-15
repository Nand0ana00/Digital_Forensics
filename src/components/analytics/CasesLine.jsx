import{

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

ResponsiveContainer

} from "recharts";

const data=[

{month:"Jan",cases:6},

{month:"Feb",cases:8},

{month:"Mar",cases:12},

{month:"Apr",cases:10},

{month:"May",cases:15},

{month:"Jun",cases:18},

];

export default function CasesLine(){

return(

<div className="bg-slate-800 rounded-xl p-6">

<h2 className="text-white text-xl font-bold mb-6">

Cases Over Time

</h2>

<div className="h-80">

<ResponsiveContainer>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="cases"

stroke="#22c55e"

strokeWidth={3}

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

);

}