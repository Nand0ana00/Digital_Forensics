import {
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

import Card from "../ui/Card";

export default function AgentStatus({ plan, loading }) {

  const completed = !loading && plan;

  const agents = [
    {
      name: "Planner Agent",
      status: completed ? "Completed" : "Waiting",
    },
    {
      name: "Evidence Agent",
      status: completed ? "Completed" : "Waiting",
    },
    {
      name: "Threat Agent",
      status: completed ? "Completed" : "Waiting",
    },
    {
      name: "Timeline Agent",
      status: completed ? "Completed" : "Waiting",
    },
  ];

  const statusConfig = {

    Completed: {
      icon: <FaCheckCircle />,
      color: "text-green-400",
    },

    Running: {
      icon: <FaSpinner className="animate-spin" />,
      color: "text-yellow-400",
    },

    Waiting: {
      icon: null,
      color: "text-gray-400",
    },

  };

  if (loading) {
    agents.forEach(agent => agent.status = "Running");
  }

  return (

    <Card title="AI Agent Status">

      <div className="space-y-4">

        {agents.map((agent) => {

          const config = statusConfig[agent.status];

          return (

            <div
              key={agent.name}
              className="flex justify-between items-center bg-slate-700 p-3 rounded-lg"
            >

              <span className="text-white">
                {agent.name}
              </span>

              <span className={`flex items-center gap-2 ${config.color}`}>

                {config.icon}

                <span>
                  {agent.status}
                </span>

              </span>

            </div>

          );

        })}

      </div>

    </Card>

  );

}