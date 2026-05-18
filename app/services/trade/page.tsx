import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Handshake,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Supplier communication support",
  "Purchase coordination",
  "Quotation and invoice review",
  "Transaction documentation support",
  "Procurement timeline coordination",
  "Clear updates through the execution process",
];

const process = [
  {
    title: "Confirm approved sourcing option",
    text: "We begin from a selected supplier, quotation, product specification, and agreed execution scope.",
  },
  {
    title: "Coordinate supplier communication",
    text: "PCA supports communication around product details, timing, documentation, and commercial terms.",
  },
  {
    title: "Support transaction steps",
    text: "Where agreed, PCA intermediates procurement coordination carefully with clear documentation and updates.",
  },
  {
    title: "Prepare for movement",
    text: "Once procurement is confirmed, the order is prepared for logistics, customs support, and delivery coordination.",
  },
];

const useCases = [
  "Businesses buying from suppliers in unfamiliar markets",
  "Diaspora clients needing local procurement execution",
  "SMEs that want structured purchase coordination",
  "Retailers and wholesalers placing repeat orders",
  "International businesses coordinating African supply activity",
];

export const metadata = {
  title: "PCA Trade | Procurement Coordination & Trade Execution Support",
  description:
    "PCA Trade supports supplier communication, purchase coordination, transaction documentation, and procurement execution for businesses sourcing across African and global trade corridors.",
};

export default function TradePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              PCA Trade
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Procurement coordination that turns sourcing into execution.
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/75">
              PCA Trade helps businesses coordinate supplier communication,
              purchase steps, documentation, and procurement execution with a
              structured process designed for cross-border trade realities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66e00]"
              >
                <Link href="/start-sourcing-request">
                  Start a Trade Request <ArrowRight className="ml-2 h-5 w-5" />
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

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
              <Handshake className="mb-6 h-10 w-10 text-[#FF7A00]" />
              <h2 className="text-2xl font-bold text-[#040237]">
                From supplier interest to purchase coordination
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                PCA Trade is designed for clients who need more than supplier
                names. We support the steps that turn sourcing decisions into
                documented procurement execution.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Supplier communication",
                  "Quotation review",
                  "Transaction coordination",
                  "Procurement documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              What you get
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              A clearer way to coordinate procurement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA Trade helps reduce confusion between buyers and suppliers by
              supporting the communication, documentation, and execution steps
              needed before goods can move.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit} className="border-slate-200">
                <CardContent className="p-6">
                  <ShieldCheck className="mb-5 h-7 w-7 text-[#FF7A00]" />
                  <p className="font-semibold text-[#040237]">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Process
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              How PCA Trade works.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Trade execution requires clear steps. PCA supports the commercial
              process so clients understand what is happening before, during,
              and after purchase coordination.
            </p>
          </div>

          <div className="space-y-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7A00] font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#040237]">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardContent className="p-8">
              <ClipboardList className="mb-6 h-9 w-9 text-[#FF7A00]" />
              <h2 className="text-3xl font-bold text-[#040237]">
                Who this service is for
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#FF7A00] bg-[#040237] text-white">
            <CardContent className="p-8">
              <FileCheck2 className="mb-6 h-9 w-9 text-[#FF7A00]" />
              <h3 className="text-2xl font-bold">Need procurement support?</h3>
              <p className="mt-4 leading-7 text-white/70">
                Share your sourcing option or supplier details and PCA will
                help review the next execution steps.
              </p>
              <Button asChild className="mt-8 bg-[#FF7A00] hover:bg-[#e66e00]">
                <Link href="/start-sourcing-request">
                  Start Request <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}