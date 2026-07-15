import {

PieChart,

Pie,

Cell,

Tooltip,

Legend,

ResponsiveContainer

} from "recharts";

const data=[

{name:"USB",value:30},

{name:"Files",value:25},

{name:"Email",value:15},

{name:"Cloud",value:20},

{name:"Registry",value:10},

];

const colors=[

"#3b82f6",

"#22c55e",

"#f59e0b",

"#a855f7",

"#ef4444"

];

export default function EvidencePie(){

return(

<div className="bg-slate-800 rounded-xl p-6">

<h2 className="text-white text-xl font-bold mb-6">

Evidence Distribution

</h2>

<div className="h-80">

<ResponsiveContainer>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={110}

label

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={colors[index]}

/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

);

}