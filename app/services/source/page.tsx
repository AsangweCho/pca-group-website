import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Supplier search and shortlist support",
  "Price comparison across available options",
  "Basic supplier review before engagement",
  "Quotation and specification clarification",
  "Negotiation support where required",
  "Estimated landed cost thinking before commitment",
];

const process = [
  {
    title: "Submit your sourcing request",
    text: "Tell us what you need, quantity, destination, expected quality, budget range, and timeline.",
  },
  {
    title: "We review your product needs",
    text: "Our team reviews feasibility, sourcing channels, market options, and possible supplier categories.",
  },
  {
    title: "Supplier options are identified",
    text: "We search relevant markets and prepare sourcing options based on price, availability, and reliability signals.",
  },
  {
    title: "You receive a sourcing proposal",
    text: "We share options, estimated costs, next steps, and the recommended execution path.",
  },
];

const useCases = [
  "Retailers looking for cheaper inventory",
  "Diaspora clients sourcing goods remotely",
  "African SMEs seeking better suppliers",
  "Wholesalers comparing regional markets",
  "Businesses entering new product categories",
];

export const metadata = {
  title: "PCA Source | Supplier Sourcing & Product Sourcing Across Africa",
  description:
    "PCA Source helps businesses find supplier options, compare prices, review sourcing opportunities, and prepare procurement decisions across African and global trade corridors.",
};

export default function SourcePage() {
  return (
    <main className="bg-white">
           <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/source-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/75 via-[#040237]/45 to-[#040237]/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A] drop-shadow-sm">
              PCA Source
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
              Find better suppliers before you commit your money.
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/85 drop-shadow-md">
              PCA Source helps businesses identify supplier options, compare
              pricing, review sourcing opportunities, and prepare clearer
              procurement decisions across African and global trade corridors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66e00]"
              >
                <Link href="/start-sourcing-request">
                  Start a Sourcing Request
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

          <div className="rounded-[2rem] border border-white/15 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/90 p-5 text-slate-900 shadow-xl">
              <PackageSearch className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-2xl font-bold text-[#040237]">
                Built for sourcing clarity
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Before a client buys, PCA helps clarify supplier options,
                pricing, availability, documentation needs, and practical
                execution considerations.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Product request review",
                  "Supplier option search",
                  "Quotation comparison",
                  "Procurement path recommendation",
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

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              What you get
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Sourcing support designed to reduce uncertainty.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit} className="border-slate-200">
                <CardContent className="p-5">
                  <ShieldCheck className="mb-5 h-7 w-7 text-[#FF7A00]" />
                  <p className="font-semibold text-[#040237]">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Process
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              How PCA Source works.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The goal is not just to find a supplier. The goal is to help you
              make a better buying decision before procurement begins.
            </p>
          </div>

          <div className="space-y-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
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

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardContent className="p-5">
              <FileSearch className="mb-6 h-9 w-9 text-[#FF7A00]" />
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
            <CardContent className="p-5">
              <ClipboardCheck className="mb-6 h-9 w-9 text-[#FF7A00]" />
              <h3 className="text-2xl font-bold">Ready to source?</h3>
              <p className="mt-4 leading-7 text-white/70">
                Send your product details and our team will review the request
                and recommend the next step.
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