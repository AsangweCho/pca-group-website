import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Freight coordination support",
  "Cross-border shipment planning",
  "Customs documentation support",
  "Warehousing and handling coordination",
  "Delivery visibility and updates",
  "Regional trade corridor execution support",
];

const process = [
  {
    title: "Logistics scope review",
    text: "We review shipment type, origin, destination, product requirements, timing, and documentation expectations.",
  },
  {
    title: "Movement planning",
    text: "PCA coordinates the movement path, transport approach, documentation needs, and practical execution planning.",
  },
  {
    title: "Cross-border coordination",
    text: "Where required, customs support, handling steps, warehousing, and transit coordination are structured.",
  },
  {
    title: "Delivery execution",
    text: "Goods are monitored through movement with communication updates until final delivery coordination is completed.",
  },
];

const useCases = [
  "Businesses importing goods into African markets",
  "Regional traders moving inventory across borders",
  "Diaspora clients requiring local delivery coordination",
  "Wholesale and retail distribution support",
  "Industrial and project cargo coordination",
];

export const metadata = {
  title: "PCA Logistics | Cross-Border Logistics & Delivery Coordination",
  description:
    "PCA Logistics supports freight coordination, customs support, warehousing, cross-border movement, and delivery execution for businesses operating across African trade corridors.",
};

export default function LogisticsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#FF7A00]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              PCA Logistics
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Move goods across Africa with structured execution support.
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/75">
              PCA Logistics helps businesses coordinate freight, customs support,
              warehousing, shipment movement, and delivery execution across
              African trade corridors.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66e00]"
              >
                <Link href="/start-sourcing-request">
                  Start Logistics Request
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

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
              <Globe2 className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-2xl font-bold text-[#040237]">
                End-to-end movement coordination
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Logistics is not just transport. PCA supports the movement
                planning, coordination, documentation, and delivery execution
                needed to move goods reliably.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Freight planning",
                  "Customs support",
                  "Warehousing coordination",
                  "Delivery execution",
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

      {/* BENEFITS */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              What you get
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Logistics support built for real trade execution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Moving goods across African markets requires planning, coordination,
              documentation, and execution discipline. PCA helps reduce that
              complexity.
            </p>
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

      {/* PROCESS */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Process
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              How PCA Logistics works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA structures logistics support so clients understand the movement
              plan, documentation expectations, and delivery path clearly.
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

      {/* WHO IT'S FOR */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardContent className="p-5">
              <PackageCheck className="mb-6 h-9 w-9 text-[#FF7A00]" />

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
              <Truck className="mb-6 h-9 w-9 text-[#FF7A00]" />

              <h3 className="text-2xl font-bold">Need logistics support?</h3>

              <p className="mt-4 leading-7 text-white/70">
                Tell PCA what needs to move, where it is going, and your timing.
                We will review the logistics path.
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

      {/* VISUAL TRADE BLOCK */}
      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <Ship className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Cross-Border Movement</h3>
              <p className="mt-4 text-white/70">
                Structured movement support across regional trade corridors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <Warehouse className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Warehousing Support</h3>
              <p className="mt-4 text-white/70">
                Temporary handling and movement staging where required.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <Truck className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Delivery Coordination</h3>
              <p className="mt-4 text-white/70">
                Last-mile delivery coordination and communication support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}