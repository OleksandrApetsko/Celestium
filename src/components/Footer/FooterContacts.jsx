import { footerContact } from "../../data/footer/footerContact.js";

export default function FooterContacts() {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-sm font-semibold tracking-wide text-white/90">
        {footerContact.title}
      </h3>

      <ul className="mt-4 space-y-2 text-sm text-white/75">
        <li>
          <a
            href={`mailto:${footerContact.email}`}
            className="hover:text-yellow-300 transition"
          >
            {footerContact.email}
          </a>
        </li>
        <li className="text-white/55">{footerContact.subtitle}</li>
      </ul>
    </div>
  );
}
