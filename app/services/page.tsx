import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services | Procure Consult Africa",
  description:
    "Explore PCA services for sourcing, procurement coordination, logistics, commodities, and Africa market entry support.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/50 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A]">
            PCA Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Source, buy, move and expand with one coordinated trade partner.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            PCA brings sourcing, procurement coordination, logistics,
            commodities and market entry support into one practical execution
            system for businesses operating across African trade corridors.
          </p>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Service architecture
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Five connected services for practical trade execution.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="h-full border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-5">
                    <Route className="mb-5 h-8 w-8 text-[#FF7A00]" />

                    <h2 className="text-xl font-bold text-[#040237]">
                      {service.name}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {service.summary}
                    </p>

                    <p className="mt-5 text-sm font-semibold text-[#FF7A00]">
                      Learn more →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/55 to-[#040237]/25" />

        <div className="relative mx-auto grid max-w-7xl gap-6 px-5 py-12 text-white sm:px-8 lg:grid-cols-3 lg:px-10">
          {[
            "Supplier search and sourcing clarity",
            "Purchase coordination and documentation",
            "Logistics, customs and delivery support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
            >
              <CheckCircle2 className="mb-5 h-7 w-7 text-[#FF7A00]" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/80 via-[#FF7A00]/55 to-[#040237]/40" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 text-white sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div>
            <Globe2 className="mb-5 h-9 w-9 text-white" />

            <h2 className="text-3xl font-bold">
              Not sure which service fits your request?
            </h2>

            <p className="mt-4 max-w-2xl text-white/85">
              Start with a sourcing request. Our team will review your needs and
              recommend the right execution path.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#040237] hover:bg-[#09065a]">
            <Link href="/start-sourcing-request">
              Start Request <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}