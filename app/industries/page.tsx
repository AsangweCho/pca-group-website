import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  PackageSearch,
  Ship,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Consumer Goods",
    text: "Retail inventory, packaged goods, household products, and fast-moving commercial inventory sourcing.",
    icon: ShoppingCart,
  },
  {
    title: "Building Materials",
    text: "Construction materials, fittings, hardware, finishing supplies, and project procurement coordination.",
    icon: Building2,
  },
  {
    title: "Industrial Supplies",
    text: "Machinery inputs, spare parts, tools, operational equipment, and industrial sourcing support.",
    icon: Factory,
  },
  {
    title: "Automotive",
    text: "Vehicle-related sourcing, parts, accessories, maintenance supply coordination, and procurement support.",
    icon: Truck,
  },
  {
    title: "Commodities",
    text: "Agricultural commodities, bulk supply access, sourcing coordination, aggregation support, and logistics execution.",
    icon: Ship,
  },
  {
    title: "Wholesale Trade",
    text: "Bulk buying support for distributors, resellers, traders, and repeat commercial procurement activity.",
    icon: PackageSearch,
  },
];

const executionSupport = [
  "Supplier sourcing and validation support",
  "Procurement coordination",
  "Cross-border logistics execution",
  "Commodity movement support",
  "Local execution support for diaspora businesses",
  "Africa market access planning",
];

export const metadata = {
  title: "Industries | Procure Consult Africa",
  description:
    "Explore the industries Procure Consult Africa supports across sourcing, logistics, commodities, procurement, and African market execution.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/industries-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/85 via-[#040237]/55 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A] drop-shadow-sm">
            Industries
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Industry-focused trade execution across African markets.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 drop-shadow-md">
            PCA supports businesses across sectors where sourcing, procurement,
            logistics, commodities, and African market execution must be handled
            with structure and local understanding.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Sectors we support
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Built for real commercial categories, not abstract markets.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA focuses on sectors where sourcing decisions, supplier access,
              price clarity, logistics, and execution discipline directly affect
              business performance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Card
                  key={industry.title}
                  className="border-slate-200 shadow-lg transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-2xl"
                >
                  <CardContent className="p-6">
                    <Icon className="mb-6 h-10 w-10 text-[#FF7A00]" />

                    <h3 className="text-2xl font-bold text-[#040237]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {industry.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXECUTION SECTION */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/logistics-bg.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <Wrench className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Built around practical trade execution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Different industries have different sourcing realities, supplier
              structures, quality expectations, compliance needs, and logistics
              complexity. PCA’s execution model adapts around those realities.
            </p>
          </div>

          <div className="space-y-5">
            {executionSupport.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-slate-700 shadow-sm backdrop-blur"
              >
                <BadgeCheck className="mt-1 h-5 w-5 text-[#FF7A00]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/commodities-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/85 via-[#040237]/55 to-[#040237]/30" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 text-white sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Need support in your industry?
            </h2>

            <p className="mt-4 max-w-2xl text-white/85">
              Start a sourcing request and tell PCA your sector, product
              category, destination, timeline, and execution needs.
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