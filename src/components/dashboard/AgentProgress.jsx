import Card from "../ui/Card";

export default function AgentProgress({ loading, completed }) {

  let progress = 0;
  let message = "Waiting to start investigation";

  if (loading) {
    progress = 75;
    message = "AI Agents Running...";
  } else if (completed) {
    progress = 100;
    message = "Investigation Completed";
  }

  return (
    <Card title="AI Investigation">

      <div className="w-full bg-slate-700 rounded-full h-4">

        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

      <p className="text-gray-400 mt-4">
        {message}
      </p>

    </Card>
  );
}