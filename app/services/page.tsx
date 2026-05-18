import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
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
      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            PCA Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Source, buy, move and expand with one coordinated trade partner.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            PCA brings sourcing, procurement coordination, logistics, commodities
            and market entry support into one practical execution system for
            businesses operating across African trade corridors.
          </p>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-5">
                  <Route className="mb-6 h-8 w-8 text-[#FF7A00]" />
                  <h2 className="text-xl font-bold text-[#040237]">
                    {service.name}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {service.summary}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-[#FF7A00]">
                    Learn more →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[2rem] bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:p-12">
          <div>
            <h2 className="text-3xl font-bold text-[#040237]">
              Not sure which service fits your request?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Start with a sourcing request. Our team will review your needs and
              recommend the right execution path.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#FF7A00] hover:bg-[#e66e00]">
            <Link href="/start-sourcing-request">
              Start Request <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}