import { useDevAccess } from "../../context/DevAccessContext.jsx";

export default function DevToggle() {
  if (!import.meta.env.DEV) return null;

  const { isPaid, toggle } = useDevAccess();

  return (
    <button
      onClick={toggle}
      className={`
        fixed bottom-6 left-6 z-[9999]
        px-6 py-3 rounded-xl
        font-semibold text-sm
        transition-all
        shadow-[0_0_30px_rgba(250,204,21,0.35)]
        ${isPaid
        ? "bg-yellow-300 text-black"
        : "bg-black/80 text-yellow-300 border border-yellow-300/40"}
      `}
    >
      DEV MODE: {isPaid ? "PAID" : "FREE"}
    </button>
  );
}
