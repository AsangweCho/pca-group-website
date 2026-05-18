import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe2,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "How African Businesses Can Source Goods More Safely",
    category: "Sourcing",
    summary:
      "A practical guide to supplier review, pricing clarity, and reducing avoidable sourcing mistakes.",
    href: "/insights/safe-sourcing-africa",
    icon: PackageSearch,
  },
  {
    title: "Why Diaspora Businesses Need Local Execution Partners in Africa",
    category: "Market Entry",
    summary:
      "How trusted on-ground support helps diaspora entrepreneurs reduce risk and execute better.",
    href: "/insights/diaspora-business-local-execution-africa",
    icon: Globe2,
  },
  {
    title: "The Real Cost of Importing Goods Into African Markets",
    category: "Logistics",
    summary:
      "Why landed cost, customs, documentation, and delivery planning matter before buying.",
    href: "/insights/real-cost-importing-goods-africa",
    icon: FileText,
  },
];

export const metadata = {
  title: "Insights | Procure Consult Africa",
  description:
    "Trade, sourcing, logistics, commodity, and Africa market entry insights from Procure Consult Africa.",
};

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/85 via-[#040237]/55 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A] drop-shadow-sm">
            PCA Insights
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Practical intelligence for sourcing, trade, logistics, and African
            market entry.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 drop-shadow-md">
            PCA Insights shares practical guidance for businesses sourcing
            products, moving goods, buying commodities, and entering African
            markets with better execution discipline.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <BookOpen className="mb-5 h-10 w-10 text-[#FF7A00]" />

              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
                Latest thinking
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
                Useful insight for better African trade decisions.
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600">
                Start here for practical thinking on sourcing, procurement,
                logistics, market access, supplier confidence, and trade
                execution.
              </p>
            </div>

            <Button asChild className="bg-[#040237] hover:bg-[#09065a]">
              <Link href="/start-sourcing-request">
                Start Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <Link key={article.href} href={article.href}>
                  <Card className="h-full border-slate-200 shadow-lg transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-2xl">
                    <CardContent className="flex h-full flex-col p-6">
                      <Icon className="mb-6 h-9 w-9 text-[#FF7A00]" />

                      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
                        {article.category}
                      </p>

                      <h2 className="text-2xl font-bold text-[#040237]">
                        {article.title}
                      </h2>

                      <p className="mt-4 flex-1 leading-7 text-slate-600">
                        {article.summary}
                      </p>

                      <p className="mt-6 text-sm font-semibold text-[#FF7A00]">
                        Read insight →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/industries-bg.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />

        <div className="relative mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:px-10">
          {[
            "Supplier sourcing and verification",
            "Cross-border logistics and landed cost",
            "African market entry and execution",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur"
            >
              <ShieldCheck className="mb-5 h-7 w-7 text-[#FF7A00]" />
              <p className="font-semibold text-[#040237]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/80 via-[#FF7A00]/55 to-[#040237]/40" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 text-white sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-bold">
              Need practical trade support now?
            </h2>

            <p className="mt-4 max-w-2xl text-white/85">
              Submit your request and PCA will review the right sourcing,
              procurement, logistics, commodity, or market entry path.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#040237] hover:bg-[#09065a]">
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