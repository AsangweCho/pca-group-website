import Link from "next/link";
import {
  ArrowRight,
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

export const metadata = {
  title: "Industries | Procure Consult Africa",
  description:
    "Explore the industries Procure Consult Africa supports across sourcing, logistics, commodities, procurement, and African market execution.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Industries
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-5xl">
            Industry-focused trade execution across African markets.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            PCA supports businesses across multiple sectors where sourcing,
            procurement, logistics, commodities, and market access execution
            matter.
          </p>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Sectors we actively support
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              While PCA operates across broad trade categories, these are the
              strongest recurring sectors where our sourcing and execution model
              creates immediate value.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Card
                  key={industry.title}
                  className="border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl"
                >
                  <CardContent className="p-5">
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

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Wrench className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Built around practical trade execution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Different industries have different sourcing realities, supplier
              structures, compliance expectations, and logistics complexity.
              PCA’s execution model is built to adapt around those realities.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Supplier sourcing and validation support",
              "Procurement coordination",
              "Cross-border logistics execution",
              "Commodity movement support",
              "Local execution support for diaspora businesses",
              "Africa market access planning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#040237] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Need support in your industry?
            </h2>

            <p className="mt-4 max-w-2xl text-white/75">
              Start a sourcing request and tell PCA what category you operate in.
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