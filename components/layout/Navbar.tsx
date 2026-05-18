"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-5 shadow-sm backdrop-blur-xl lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/pca-logo.png"
            alt="Procure Consult Africa"
            width={220}
            height={70}
            priority
            className="h-auto w-[150px] md:w-[190px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
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
            <Link href="/contact">Consultation</Link>
          </Button>

          <Button asChild className="bg-[#FF7A00] hover:bg-[#e66e00]">
            <Link href="/start-sourcing-request">
              Start Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="rounded-xl p-2 text-[#040237] lg:hidden">
              <Menu size={24} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

            <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm bg-white p-6 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <Image
                  src="/logos/pca-logo.png"
                  alt="Procure Consult Africa"
                  width={180}
                  height={60}
                  className="h-auto w-[150px]"
                />

                <Dialog.Close asChild>
                  <button className="rounded-xl p-2">
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Dialog.Close asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="border-b border-slate-100 pb-4 text-base font-medium text-slate-700"
                    >
                      {link.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>

              <div className="mt-10 flex flex-col gap-3">
                <Dialog.Close asChild>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <Button
                    asChild
                    className="w-full bg-[#FF7A00] hover:bg-[#e66e00]"
                  >
                    <Link href="/start-sourcing-request">
                      Start Request
                    </Link>
                  </Button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}