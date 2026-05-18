"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/85 px-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl lg:h-20 lg:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/pca-logo.png"
            alt="Procure Consult Africa"
            width={220}
            height={70}
            priority
            className="h-auto w-[145px] md:w-[180px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#FF7A00]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Consultation</Link>
          </Button>

          <Button
            asChild
            className="rounded-full bg-[#FF7A00] shadow-md shadow-orange-500/20 hover:bg-[#e66e00]"
          >
            <Link href="/start-sourcing-request">
              Start Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              aria-label="Open menu"
              className="rounded-xl border border-slate-200 bg-white p-2 text-[#040237] shadow-sm xl:hidden"
            >
              <Menu size={24} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-[#040237]/55 backdrop-blur-sm" />

            <Dialog.Content className="fixed right-3 top-3 z-50 h-[calc(100vh-1.5rem)] w-[88%] max-w-sm overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                  <Image
                    src="/logos/pca-logo.png"
                    alt="Procure Consult Africa"
                    width={180}
                    height={60}
                    className="h-auto w-[145px]"
                  />

                  <Dialog.Close asChild>
                    <button
                      aria-label="Close menu"
                      className="rounded-xl border border-slate-200 p-2 text-[#040237]"
                    >
                      <X size={22} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                    Navigation
                  </p>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Dialog.Close asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-base font-semibold text-[#040237] transition hover:border-[#FF7A00] hover:bg-white"
                        >
                          {link.label}
                        </Link>
                      </Dialog.Close>
                    ))}
                  </nav>

                  <div className="mt-6 rounded-2xl bg-[#040237] p-5 text-white">
                    <p className="text-sm font-semibold text-[#FFD08A]">
                      Need sourcing support?
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Tell PCA what you want to source, move, or execute across
                      Africa.
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                      <Phone className="h-4 w-4 text-[#FF7A00]" />
                      {siteConfig.phone}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-white p-5">
                  <div className="flex flex-col gap-3">
                    <Dialog.Close asChild>
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link href="/contact">Book Consultation</Link>
                      </Button>
                    </Dialog.Close>

                    <Dialog.Close asChild>
                      <Button
                        asChild
                        className="w-full rounded-full bg-[#FF7A00] hover:bg-[#e66e00]"
                      >
                        <Link href="/start-sourcing-request">
                          Start Request
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </Dialog.Close>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}