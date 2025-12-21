import { useDevAccess } from "../../context/DevAccessContext.jsx";

export default function DevAccessToggle() {
  // DEV ONLY
  if (!import.meta.env.DEV) return null;

  const { isPaid, toggle } = useDevAccess();

  return (
    <button
      onClick={toggle}
      className={`
        fixed bottom-6 left-6 z-[9999]
        px-5 py-3 rounded-xl font-semibold
        transition-all
        ${isPaid
        ? "bg-yellow-300 text-black shadow-[0_0_30px_rgba(250,204,21,0.5)]"
        : "bg-black/80 text-white border border-white/20"}
      `}
    >
      {isPaid ? "DEV: PAID MODE" : "DEV: FREE MODE"}
    </button>
  );
}
