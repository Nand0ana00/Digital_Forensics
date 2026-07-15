import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import ThreatChart from "../components/analytics/ThreatChart";
import EvidencePie from "../components/analytics/EvidencePie";
import CasesLine from "../components/analytics/CasesLine";

export default function Analytics(){

return(

<div className="flex min-h-screen bg-slate-900">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-8">

<h1 className="text-3xl text-white font-bold mb-8">

Analytics Dashboard

</h1>

<div className="grid grid-cols-2 gap-6">

<ThreatChart/>

<EvidencePie/>

</div>

<div className="mt-8">

<CasesLine/>

</div>

</div>

</div>

</div>

);

}