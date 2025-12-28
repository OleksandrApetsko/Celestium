import { footerSocials } from "../../data/footer/footerSocials.js";

function IconX({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.6l-5.2-7.1L5.2 22H2l7.4-8.5L1 2h6.7l4.7 6.4L18.9 2zm-1.2 18h1.7L6.8 3.9H5L17.7 20z" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.51 4.51 0 0012 7.5zm0 7.4A2.9 2.9 0 119.1 12 2.9 2.9 0 0112 14.9zm4.8-7.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
    </svg>
  );
}

function IconYouTube({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2s-.2-1.7-.8-2.4a3 3 0 00-2.1-.8C17.8 2.8 12 2.8 12 2.8h0s-5.8 0-8.6.2a3 3 0 00-2.1.8c-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4a3.6 3.6 0 002.3.9c1.7.2 7.2.2 7.2.2s5.8 0 8.6-.2a3 3 0 002.1-.8c.6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.7 14.6V7.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

function IconTikTok({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21 8.1a7.5 7.5 0 01-4.3-1.4v7.8a6.3 6.3 0 11-5.4-6.2v3.2a3.1 3.1 0 103.1 3.1V2h3.2a4.3 4.3 0 004.4 4.1v2z" />
    </svg>
  );
}

/* ✅ ВАЖЛИВО: функція була відсутня */
function getIcon(key) {
  const className = "w-5 h-5";

  if (key === "x") return <IconX className={className} />;
  if (key === "instagram") return <IconInstagram className={className} />;
  if (key === "youtube") return <IconYouTube className={className} />;
  if (key === "tiktok") return <IconTikTok className={className} />;

  return null;
}

export default function FooterSocials() {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-sm font-semibold tracking-wide text-white/90">
        {footerSocials.title}
      </h3>

      <div className="mt-4 flex justify-center md:justify-start gap-3">
        {footerSocials.links.map((social) => (
          <a
            key={social.key}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="
              inline-flex items-center justify-center
              w-10 h-10 rounded-xl
              border border-white/10
              bg-white/5
              text-white/80
              hover:text-yellow-300 hover:border-white/20 hover:bg-white/10
              transition
            "
          >
            {getIcon(social.key)}
          </a>
        ))}
      </div>
    </div>
  );
}
