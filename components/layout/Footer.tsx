import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-4 rounded-[2rem] bg-[#040237] text-white shadow-2xl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
  <Image
    src="/logos/pca-logo-white.png"
    alt="Procure Consult Africa"
    width={240}
    height={90}
    className="h-auto w-[200px]"
  />
</div>

          <p className="max-w-xl text-sm leading-7 text-white/70">
            {siteConfig.description}
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-3">
              <Phone size={16} /> {siteConfig.phone}
            </p>

            <p className="flex items-center gap-3">
              <Mail size={16} /> {siteConfig.email}
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={16} /> {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            Services
          </h3>

          <div className="space-y-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block text-sm text-white/70 hover:text-[#FF7A00]"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            Company
          </h3>

          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-white/70 hover:text-[#FF7A00]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}