export default function Card({ title, children }) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6">

      {title && (
        <h2 className="text-xl font-bold text-white mb-4">
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}