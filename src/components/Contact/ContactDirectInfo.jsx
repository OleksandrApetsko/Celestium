export default function ContactDirectInfo() {
  return (
    <div
      className="
        p-8 rounded-2xl
        bg-black/20 border border-white/10
        backdrop-blur-xl
        text-center
      "
    >
      <h2 className="text-xl text-yellow-300 font-medium mb-4">
        Prefer email?
      </h2>

      <p className="text-white/70 mb-2">
        Support questions:
      </p>
      <a
        href="mailto:support@celestium.com"
        className="text-yellow-300 hover:text-yellow-100 transition block mb-6"
      >
        support@celestium.com
      </a>

      <p className="text-white/70 mb-2">
        Partnerships & business inquiries:
      </p>
      <a
        href="mailto:business@celestium.com"
        className="text-yellow-300 hover:text-yellow-100 transition block"
      >
        business@celestium.com
      </a>
    </div>
  );
}
