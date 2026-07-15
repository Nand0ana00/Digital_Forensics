import { FaArrowUp } from "react-icons/fa";

export default function SummaryCard({
  title,
  value,
  icon,
  color,
  change
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-400">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

          <div className="flex items-center mt-3 text-green-400">

            <FaArrowUp className="mr-2"/>

            <span>{change}</span>

          </div>

        </div>

        <div className={`text-5xl ${color}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}