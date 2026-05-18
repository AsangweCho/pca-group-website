import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<Link href="/" className="flex items-center">
  <Image
    src="/logos/pca-logo.png"
    alt="Procure Consult Africa"
    width={220}
    height={70}
    priority
    className="h-auto w-[180px] md:w-[220px]"
  />
</Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#FF7A00]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <Link href="/contact">Book Consultation</Link>
          </Button>

          <Button asChild className="bg-[#FF7A00] hover:bg-[#e66e00]">
            <Link href="/start-sourcing-request" className="flex items-center gap-2">
              Start Request
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <button className="lg:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}