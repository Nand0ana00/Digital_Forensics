export default function Card({ title, children }) {
  return (
    <div
      className="
        rounded-xl
        shadow-lg
        p-6
        bg-white
        dark:bg-slate-800
      "
    >

      {title && (
        <h2
          className="
            text-xl
            font-bold
            mb-4
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}