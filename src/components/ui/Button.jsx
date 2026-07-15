export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}