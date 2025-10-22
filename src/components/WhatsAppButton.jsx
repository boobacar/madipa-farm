import { site } from "../data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href={site.contacts.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 btn btn-primary rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-soft hover:scale-[1.03] active:scale-[0.98] transition"
    >
      <span
        className="absolute inline-flex h-14 w-14 rounded-full bg-green-500/40 animate-ping"
        aria-hidden
      />
      <span className="relative">
        <FaWhatsapp size={22} />
      </span>
    </a>
  );
}
