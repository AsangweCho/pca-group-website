import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Trade Execution",
    text: "We help clients move from sourcing interest to practical procurement, logistics, and delivery coordination.",
    icon: Truck,
  },
  {
    title: "Market Access",
    text: "We support diaspora and international businesses that need trusted local execution across African markets.",
    icon: Globe2,
  },
  {
    title: "Structured Trust",
    text: "We use supplier review, documentation, communication, and process clarity to reduce trade uncertainty.",
    icon: ShieldCheck,
  },
];

const values = [
  "Practical execution over empty promises",
  "Clear communication through every step",
  "Local market understanding",
  "Client trust and transaction discipline",
  "Long-term trade relationships",
  "Pan-African growth mindset",
];

export const metadata = {
  title: "About | Procure Consult Africa",
  description:
    "Learn about Procure Consult Africa, a PCA Group company helping businesses source, buy, move, and expand across Africa.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            About PCA
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-6xl">
            Building trusted trade execution infrastructure for African commerce.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Procure Consult Africa is a PCA Group company helping businesses
            source, buy, move, and expand across Africa through structured
            procurement, logistics, commodity, and market access support.
          </p>

          <div className="mt-10">
            <Button asChild size="lg" className="bg-[#FF7A00] hover:bg-[#e66e00]">
              <Link href="/start-sourcing-request">
                Start a Sourcing Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Our role
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              PCA exists to make trade across Africa easier to execute.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Many businesses know what they want to buy, where they want to
              expand, or which markets they want to reach. The real challenge is
              execution: finding reliable suppliers, coordinating purchase steps,
              managing logistics, handling local realities, and keeping the
              process transparent.
            </p>

            <p>
              PCA was built to solve that execution gap. We support businesses
              that need a practical partner on the ground, especially across
              African trade corridors where trust, local knowledge, and
              coordination matter.
            </p>

            <p>
              Our work sits between sourcing, procurement, logistics,
              commodities, and market entry. That is why PCA is designed not as a
              narrow procurement agency, but as a trade execution partner.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              PCA Group direction
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              From procurement support to African trade infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Procure Consult Africa is part of the wider PCA Group vision: a
              structured ecosystem for sourcing, trade, logistics, commodities,
              and market access across Africa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card key={pillar.title} className="border-slate-200 bg-white">
                  <CardContent className="p-7">
                    <Icon className="mb-6 h-9 w-9 text-[#FF7A00]" />
                    <h3 className="text-xl font-bold text-[#040237]">
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
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 lg:col-span-2">
            <CardContent className="p-8">
              <Network className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-3xl font-bold text-[#040237]">
                Who we serve
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                PCA supports African SMEs, diaspora businesses, commodity
                buyers, retail and wholesale traders, and international
                companies looking to source, move, or expand across African
                markets.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "African businesses sourcing cheaper goods",
                  "Diaspora businesses needing local execution",
                  "Commodity buyers seeking supply access",
                  "International companies entering African markets",
                  "Wholesale and retail traders",
                  "Businesses moving goods across borders",
                ].map((item) => (
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
              <Handshake className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h3 className="text-2xl font-bold">
                Our promise is execution clarity.
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                We do not position PCA as a company that simply gives advice.
                Our focus is helping clients understand what needs to happen,
                then supporting the process from request to execution.
              </p>

              <Button asChild className="mt-8 bg-[#FF7A00] hover:bg-[#e66e00]">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <Building2 className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h2 className="text-4xl font-bold tracking-tight">
              Built for the realities of African trade.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              African trade is opportunity-rich but operationally demanding.
              PCA is built around the practical reality that buyers need more
              than access. They need trust, coordination, communication, and
              local execution.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                <p className="text-white/75">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}