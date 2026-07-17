import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Statistics from "../components/dashboard/Statistics";
import ThreatPanel from "../components/dashboard/ThreatPanel";
import AgentProgress from "../components/dashboard/AgentProgress";
import RecentActivity from "../components/dashboard/RecentActivity";
import TimelinePreview from "../components/dashboard/TimelinePreview";
import AgentStatus from "../components/dashboard/AgentStatus";
import ActivityChart from "../components/dashboard/ActivityChart";
import { useState } from "react";
import { investigate } from "../services/investigationService";
export default function Dashboard() {
  const [loading, setLoading] = useState(false);
const [investigationData, setInvestigationData] = useState(null);


async function handleInvestigation(){

  try{

    setLoading(true);

    const data = await investigate();

    console.log("Investigation Result:", data);

    setInvestigationData(data);

  }
  catch(error){

    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Investigation failed"
    );

  }
  finally{

    setLoading(false);

  }

}
  return (
    <div className="flex min-h-screen bg-slate-900">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold mb-8">
            Investigation Dashboard
          </h1>
          <button
  onClick={handleInvestigation}
  className="mb-8 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white"
>

{
 loading 
 ? "Running Investigation..."
 : "Start Investigation"
}

</button>
          {/* Statistics */}
          <Statistics />

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <ThreatPanel />

            <AgentProgress />

          </div>
          <div className="mt-8">
            <AgentStatus />
          </div>
          <div className="mt-8">
            <ActivityChart />
          </div>

          {/* Third Row */}
          <div className="mt-8">
            <RecentActivity />
          </div>

          {/* Fourth Row */}
          <div className="mt-8">
            <TimelinePreview />
          </div>

        </div>

      </div>

    </div>
  );
}