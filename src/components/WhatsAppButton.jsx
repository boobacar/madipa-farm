import { site } from "../data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href={site.contacts.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-10 rounded-full w-14 h-14 p-0 bg-primary text-white shadow-soft hover:bg-green-700 flex items-center justify-center text-2xl transition hover:scale-[1.03] active:scale-[0.98]"
    >
      <span className="pointer-events-none absolute inline-flex inset-0 rounded-full bg-green-500/40 animate-ping" aria-hidden />
      <span className="relative">
        <FaWhatsapp size={22} />
      </span>
    </a>
  );
}
