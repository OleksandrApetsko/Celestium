export default function ContactForm() {
  return (
    <div className="
      bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-10
      shadow-[0_0_35px_rgba(255,215,125,0.1)]
    ">

      <h1 className="text-4xl md:text-5xl text-white font-semibold mb-4">
        Contact Celestium
      </h1>
      <p className="text-white/70 mb-10">
        We respond within 24 hours. For partnership or custom horoscope requests,
        contact us directly via email or social platforms below.
      </p>

      <form className="space-y-6">
        <div>
          <label className="text-white/80 text-sm mb-1 block">Name</label>
          <input type="text" placeholder="Your name"
                 className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white
            focus:outline-none focus:border-yellow-300 transition" required />
        </div>

        <div>
          <label className="text-white/80 text-sm mb-1 block">Email</label>
          <input type="email" placeholder="you@mail.com"
                 className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white
            focus:outline-none focus:border-yellow-300 transition" required />
        </div>

        <div>
          <label className="text-white/80 text-sm mb-1 block">Message</label>
          <textarea rows="5" placeholder="Write your message..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white
            resize-none focus:outline-none focus:border-yellow-300 transition" required />
        </div>

        <button type="submit"
                className="w-full py-3 rounded-lg font-medium text-black bg-yellow-300 hover:bg-yellow-400
          transition shadow-[0_0_18px_rgba(255,220,120,0.45)]">
          Send Message
        </button>
      </form>
    </div>
  );
}
