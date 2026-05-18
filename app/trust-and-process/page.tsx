import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MessageSquareText,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustBlocks = [
  {
    title: "Supplier Review",
    text: "PCA helps clients review supplier options before moving into procurement coordination.",
    icon: SearchCheck,
  },
  {
    title: "Clear Documentation",
    text: "We support quotations, invoices, product specifications, logistics notes, and execution records where applicable.",
    icon: FileCheck2,
  },
  {
    title: "Transparent Communication",
    text: "Clients receive clearer updates on sourcing, procurement, logistics, and next steps during the process.",
    icon: MessageSquareText,
  },
  {
    title: "Coordinated Execution",
    text: "PCA connects sourcing, procurement, movement, and delivery support into one structured workflow.",
    icon: PackageCheck,
  },
];

const processSafeguards = [
  "Request details are reviewed before execution begins",
  "Supplier options are assessed before client commitment",
  "Costs and next steps are communicated clearly",
  "Procurement and logistics steps are documented where applicable",
  "Clients receive updates during execution",
  "Scope is clarified before PCA proceeds with support",
];

export const metadata = {
  title: "Trust & Process | Procure Consult Africa",
  description:
    "Learn how Procure Consult Africa builds trust into sourcing, procurement coordination, logistics, commodities, and market entry execution.",
};

export default function TrustAndProcessPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Trust & Process
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-6xl">
            Trade requires trust. PCA builds it into the process.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            PCA supports clients with supplier review, transparent
            communication, documented execution, and coordinated trade support
            from request to delivery.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Trust architecture
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Designed to reduce uncertainty before money, goods, and time are committed.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sourcing and trade execution often fail because the process is not
              clear. PCA’s approach is built around better visibility, practical
              checks, and communication discipline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <Card
                  key={block.title}
                  className="border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl"
                >
                  <CardContent className="p-7">
                    <Icon className="mb-6 h-9 w-9 text-[#FF7A00]" />
                    <h3 className="text-xl font-bold text-[#040237]">
                      {block.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {block.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <ShieldCheck className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              A careful process, not careless promises.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA uses careful wording because cross-border trade has real risks.
              Our role is to help clients approach sourcing, procurement, and
              logistics with better structure, stronger coordination, and clearer
              information.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We do not present trade as risk-free. We help clients reduce
              avoidable confusion through review, documentation, and local
              execution support.
            </p>
          </div>

          <div className="space-y-5">
            {processSafeguards.map((item) => (
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

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardContent className="p-8">
              <ClipboardCheck className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-3xl font-bold text-[#040237]">
                What clients should expect
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  "Clear request review",
                  "Defined service scope",
                  "Practical next-step guidance",
                  "Supplier and sourcing option review",
                  "Documentation support",
                  "Execution updates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[#FF7A00]" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#FF7A00] bg-[#040237] text-white">
            <CardContent className="p-8">
              <ShieldCheck className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h3 className="text-2xl font-bold">
                Start with clarity.
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                The best way to begin is to submit your request with product,
                quantity, destination, timeline, and any available
                specifications.
              </p>

              <Button asChild className="mt-8 bg-[#FF7A00] hover:bg-[#e66e00]">
                <Link href="/start-sourcing-request">
                  Start Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#040237] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Better trade begins with a better process.
            </h2>

            <p className="mt-4 max-w-2xl text-white/75">
              PCA helps clients approach sourcing, procurement, logistics, and
              market entry with more structure and less uncertainty.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#FF7A00] hover:bg-[#e66e00]">
            <Link href="/contact">
              Speak to PCA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}