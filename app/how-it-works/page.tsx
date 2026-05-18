import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Submit your request",
    text: "You share the product, quantity, destination, timeline, budget range, specifications, and the type of support you need.",
    icon: ClipboardList,
  },
  {
    title: "We review and clarify",
    text: "PCA reviews the request, asks any necessary follow-up questions, and determines the most practical service path.",
    icon: SearchCheck,
  },
  {
    title: "We source or structure options",
    text: "Depending on the request, PCA identifies supplier options, logistics paths, commodity availability, or market entry steps.",
    icon: ShieldCheck,
  },
  {
    title: "You receive a proposal",
    text: "We present available options, estimated costs, execution scope, timeline, and the next practical steps.",
    icon: FileText,
  },
  {
    title: "Execution is coordinated",
    text: "Once approved, PCA supports procurement, supplier communication, logistics coordination, documentation, and updates.",
    icon: Truck,
  },
  {
    title: "Delivery or next milestone",
    text: "The process continues until delivery, market entry milestone, commodity movement, or agreed execution outcome is completed.",
    icon: PackageCheck,
  },
];

export const metadata = {
  title: "How It Works | Procure Consult Africa",
  description:
    "Understand how Procure Consult Africa supports sourcing, procurement, logistics, commodities, and market entry execution from request to delivery.",
};

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
  <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-75" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/50 to-[#040237]/20" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            How It Works
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-5xl">
            A clear process from request to execution.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            PCA uses a structured process to help clients move from sourcing
            interest to practical procurement, logistics, commodity, or market
            entry execution.
          </p>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.title}
                  className="border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl"
                >
                  <CardContent className="p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#040237] to-[#09065a] text-[#FF7A00] shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-sm font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#040237]">
                      {step.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
  <div className="absolute inset-0 bg-[url('/images/logistics-bg.jpg')] bg-cover bg-center opacity-65" />
  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Why the process matters
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Cross-border trade works better when every step is visible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Many sourcing and logistics problems begin when expectations are
              unclear. PCA’s process is designed to clarify the request, define
              the scope, communicate options, coordinate execution, and keep
              clients informed.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Clear request intake",
              "Practical sourcing and logistics review",
              "Documented next steps",
              "Communication before and during execution",
              "Service path based on real business needs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
  <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-70" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/80 via-[#FF7A00]/55 to-[#040237]/40" />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to begin?
            </h2>

            <p className="mt-4 max-w-2xl text-white/75">
              Start with your sourcing, logistics, commodity, or market entry
              request and PCA will review the right execution path.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#FF7A00] hover:bg-[#e66e00]">
            <Link href="/start-sourcing-request">
              Start Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}