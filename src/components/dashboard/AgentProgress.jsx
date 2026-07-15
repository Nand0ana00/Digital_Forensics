import Card from "../ui/Card";

export default function AgentProgress() {
  return (
    <Card title="AI Investigation">

      <div className="w-full bg-slate-700 rounded-full h-4">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: "75%" }}
        ></div>

      </div>

      <p className="text-gray-400 mt-4">
        AI Agents Running
      </p>

    </Card>
  );
}