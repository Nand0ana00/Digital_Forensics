export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}