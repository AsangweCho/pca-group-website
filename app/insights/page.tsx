import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Globe2, PackageSearch } from "lucide-react";
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
      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Insights
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-5xl">
            Practical intelligence for sourcing, trade, logistics, and African market entry.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            PCA Insights shares practical guidance for businesses sourcing
            products, moving goods, buying commodities, and entering African
            markets with better execution discipline.
          </p>
        </div>
      </section>

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <BookOpen className="mb-5 h-10 w-10 text-[#FF7A00]" />
              <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
                Latest insights
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Start here for useful thinking on African trade execution.
              </p>
            </div>

            <Button asChild className="bg-[#040237] hover:bg-[#09065a]">
              <Link href="/start-sourcing-request">
                Start Request <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <Link key={article.href} href={article.href}>
                  <Card className="h-full border-slate-200 transition hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-5">
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

      <section className="bg-slate-50 px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[2rem] bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:p-12">
          <div>
            <h2 className="text-3xl font-bold text-[#040237]">
              Need practical trade support now?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Submit your request and PCA will review the right sourcing,
              procurement, logistics, or market entry path.
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