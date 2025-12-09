export default function ContactDirectInfo() {
  return (
    <div className="p-8 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xl">
      <h2 className="text-2xl text-yellow-300 font-medium mb-3">Direct Contact</h2>

      <p className="text-white/80">Support:</p>
      <a className="text-yellow-300 hover:text-yellow-100 transition block mb-2">
        support@celestium.com
      </a>

      <p className="text-white/80">Partnerships:</p>
      <a className="text-yellow-300 hover:text-yellow-100 transition">
        business@celestium.com
      </a>
    </div>
  );
}
