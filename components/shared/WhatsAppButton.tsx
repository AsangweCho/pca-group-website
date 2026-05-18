import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PCA on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-slate-900/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with PCA</span>
    </Link>
  );
}