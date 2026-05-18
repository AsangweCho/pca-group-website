import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Execution-focused",
    text: "PCA is built around practical business execution, not theoretical advisory. We help clients move from opportunity to action.",
    icon: ShieldCheck,
  },
  {
    title: "Africa-grounded",
    text: "Our understanding is shaped by operating realities across African markets, supplier ecosystems, logistics corridors, and local execution environments.",
    icon: Globe2,
  },
  {
    title: "Business-oriented",
    text: "We work with entrepreneurs, diaspora businesses, importers, distributors, and companies seeking reliable African execution support.",
    icon: Users2,
  },
];

const trustPoints = [
  "Structured sourcing and procurement review",
  "Practical logistics coordination support",
  "Supplier option visibility before commitment",
  "Execution guidance based on real trade conditions",
  "Communication discipline throughout the process",
];

export const metadata = {
  title: "About | Procure Consult Africa",
  description:
    "Learn about Procure Consult Africa and how PCA helps businesses source, procure, move goods, and expand across African markets.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/source-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/50 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A]">
            About PCA
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Practical African trade execution for businesses that need reliable
            local support.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Procure Consult Africa helps businesses source products, coordinate
            procurement, structure logistics, access commodities, and explore
            African market opportunities with stronger execution clarity.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Who we are
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Built for businesses navigating real African trade complexity.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              African trade presents major opportunity, but execution can be
              fragmented. Supplier uncertainty, logistics coordination,
              documentation issues, unclear communication, and local market
              realities often create friction.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PCA exists to reduce that friction by helping clients structure
              sourcing decisions, coordinate procurement steps, manage logistics
              pathways, and approach execution with better visibility.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.title}
                className="border-slate-200 shadow-lg transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-2xl"
              >
                <CardContent className="p-6">
                  <Icon className="mb-6 h-10 w-10 text-[#FF7A00]" />

                  <h3 className="text-2xl font-bold text-[#040237]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {pillar.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/logistics-bg.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <ShieldCheck className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Why businesses choose PCA
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Businesses do not need more generic promises. They need clearer
              execution pathways, better local coordination, stronger sourcing
              visibility, and disciplined communication.
            </p>
          </div>

          <div className="space-y-5">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/industries-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/85 via-[#040237]/55 to-[#040237]/30" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 text-white sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to work with PCA?
            </h2>

            <p className="mt-4 max-w-2xl text-white/80">
              Start with a sourcing request or speak with our team about your
              procurement, logistics, commodity, or Africa market execution
              needs.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#FF7A00] hover:bg-[#e66e00]"
            >
              <Link href="/start-sourcing-request">
                Start Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#040237]"
            >
              <Link href="/contact">Speak to PCA</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}