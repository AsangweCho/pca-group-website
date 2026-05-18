import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Store,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const commodities = [
  "Ginger",
  "Garlic",
  "Pepper",
  "Njangsang",
  "African cinnamon",
  "Thyme",
  "Black pepper",
  "Cocoa",
  "Coffee",
  "Sesame",
  "Hibiscus",
];

const benefits = [
  "Agricultural product sourcing support",
  "Local supply network coordination",
  "Commodity availability checks",
  "Quality and specification clarification",
  "Aggregation support where available",
  "Logistics coordination for bulk movement",
];

const process = [
  {
    title: "Submit your commodity request",
    text: "Share the product, quantity, destination, quality expectations, packaging needs, and preferred timeline.",
  },
  {
    title: "We review supply availability",
    text: "PCA checks possible supply channels, sourcing locations, aggregation options, and practical execution requirements.",
  },
  {
    title: "You receive sourcing options",
    text: "We provide available options, estimated pricing, quantity feasibility, movement considerations, and next steps.",
  },
  {
    title: "Supply and logistics are coordinated",
    text: "Once approved, PCA supports supplier coordination, documentation, movement planning, and delivery execution.",
  },
];

const buyers = [
  "Commodity buyers and distributors",
  "Food importers and processors",
  "Diaspora businesses sourcing from Africa",
  "Wholesale traders",
  "Businesses seeking direct African supply access",
];

export const metadata = {
  title: "PCA Commodities | African Commodity Sourcing & Supply Access",
  description:
    "PCA Commodities supports agricultural and bulk commodity sourcing, supply coordination, aggregation support, and logistics execution across African markets.",
};

export default function CommoditiesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF7A00]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              PCA Commodities
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Access African commodity supply through structured local sourcing.
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/75">
              PCA Commodities supports buyers seeking agricultural and bulk
              product access through local sourcing networks, availability
              checks, aggregation support, and logistics coordination.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66e00]"
              >
                <Link href="/start-sourcing-request">
                  Start Commodity Request
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

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
              <Leaf className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-2xl font-bold text-[#040237]">
                From farms and aggregators to buyers
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                PCA helps structure commodity sourcing by clarifying product
                availability, quantity, quality expectations, supplier options,
                and movement requirements.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Commodity sourcing",
                  "Supply availability checks",
                  "Aggregation support",
                  "Bulk movement coordination",
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
              Commodity focus
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Products we can help source and coordinate.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA focuses on practical commodity categories where local access,
              quality clarity, quantity coordination, and movement execution
              matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {commodities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-[#040237] shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#040237] text-[#FF7A00]">
                  <Sprout className="h-5 w-5" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              What you get
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Commodity sourcing support with practical execution.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit} className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <ShieldCheck className="mb-5 h-7 w-7 text-[#FF7A00]" />
                  <p className="font-semibold text-[#040237]">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Process
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              How PCA Commodities works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commodity sourcing requires availability checks, clear
              specifications, local coordination, and disciplined movement
              planning.
            </p>
          </div>

          <div className="space-y-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-white/10 bg-white/10 text-white backdrop-blur lg:col-span-2">
            <CardContent className="p-8">
              <Store className="mb-6 h-9 w-9 text-[#FF7A00]" />

              <h2 className="text-3xl font-bold">
                Who this service is for
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {buyers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                    <p className="text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#FF7A00] bg-white text-[#040237]">
            <CardContent className="p-8">
              <Warehouse className="mb-6 h-9 w-9 text-[#FF7A00]" />

              <h3 className="text-2xl font-bold">Need commodity supply?</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Share the commodity, quantity, destination, and timeline. PCA
                will review availability and possible sourcing paths.
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

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-slate-50 p-8 lg:flex-row lg:items-center lg:p-12">
          <div>
            <PackageCheck className="mb-5 h-9 w-9 text-[#FF7A00]" />
            <h2 className="text-3xl font-bold text-[#040237]">
              Build a more reliable sourcing path for African commodities.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              PCA helps buyers approach commodity sourcing with better structure,
              clearer communication, and coordinated execution.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#040237] hover:bg-[#09065a]">
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