import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden rounded-[2rem] bg-[#040237] text-white shadow-2xl">
      <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/95 via-[#040237]/90 to-[#040237]/80" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logos/pca-logo-white.png"
              alt="Procure Consult Africa"
              width={260}
              height={100}
              className="h-auto w-[210px]"
            />

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75">
              {siteConfig.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 text-[#FF7A00]" />
                <div>
                  <h3 className="font-bold">Structured trade support</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Sourcing, procurement coordination, logistics, commodities,
                    and market entry support across African trade corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#FFD08A]">
              Services
            </h3>

            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-sm text-white/70 transition hover:text-[#FF7A00]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#FFD08A]">
              Company
            </h3>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 transition hover:text-[#FF7A00]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/privacy-policy"
                className="block text-sm text-white/70 transition hover:text-[#FF7A00]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-sm text-white/70 transition hover:text-[#FF7A00]"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#FFD08A]">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-white/75">
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                {siteConfig.phone}
              </p>

              <p className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                WhatsApp: {siteConfig.whatsapp}
              </p>

              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                {siteConfig.email}
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                {siteConfig.address}
              </p>
            </div>

            <Button
              asChild
              className="mt-6 w-full bg-[#FF7A00] hover:bg-[#e66e00]"
            >
              <Link href="/start-sourcing-request">
                Start Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Procure Consult Africa. All rights
            reserved.
          </p>

          <p>A PCA Group company.</p>
        </div>
      </div>
    </footer>
  );
}