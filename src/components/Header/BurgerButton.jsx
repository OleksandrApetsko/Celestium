export default function BurgerButton({ open, setOpen }) {
  return (
    <button
      className="md:hidden text-yellow-400 hover:text-white transition text-3xl"
      onClick={() => setOpen(!open)}
    >
      {open ? '✕' : '☰'}
    </button>
  )
}
