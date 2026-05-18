import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Handshake,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Local market understanding and execution support",
  "Supplier, partner, and service provider identification",
  "Business setup and operational coordination support",
  "Sourcing and logistics pathway planning",
  "Local representation support where required",
  "Practical guidance for diaspora and international businesses",
];

const process = [
  {
    title: "Define your Africa expansion objective",
    text: "We clarify whether you want to source, sell, distribute, invest, partner, or establish local operations.",
  },
  {
    title: "Review market and execution needs",
    text: "PCA reviews the target market, practical requirements, product category, partner needs, and operating risks.",
  },
  {
    title: "Build the local execution plan",
    text: "We outline the sourcing, logistics, partner, documentation, and operating steps needed to move forward.",
  },
  {
    title: "Support implementation",
    text: "PCA coordinates agreed actions with local partners, suppliers, service providers, and execution teams.",
  },
];

const clients = [
  "Diaspora entrepreneurs building in Africa",
  "International businesses entering African markets",
  "Exporters seeking local African partners",
  "Investors exploring operational opportunities",
  "Companies needing trusted local execution support",
];

export const metadata = {
  title: "PCA Market Entry | Africa Market Entry Support for Global Businesses",
  description:
    "PCA Market Entry supports diaspora and international businesses with local execution, sourcing, partner identification, logistics pathways, and Africa market access.",
};

export default function MarketEntryPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              PCA Market Entry
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Enter African markets with trusted local execution support.
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/75">
              PCA Market Entry helps diaspora and international businesses plan,
              coordinate, and execute sourcing, partnerships, logistics, and
              operating steps across African markets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66e00]"
              >
                <Link href="/contact">
                  Book Market Entry Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#040237]"
              >
                <Link href="/start-sourcing-request">Start a Request</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
              <Globe2 className="mb-6 h-10 w-10 text-[#FF7A00]" />

              <h2 className="text-2xl font-bold text-[#040237]">
                From interest to practical market action
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Entering Africa requires more than market interest. PCA helps
                clients understand local execution needs, trade pathways,
                partners, sourcing options, and operational realities.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Market access support",
                  "Partner identification",
                  "Local execution planning",
                  "Sourcing and logistics pathways",
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
              Market entry support built around practical execution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PCA supports businesses that need more than advice. We help turn
              Africa expansion plans into structured sourcing, partner,
              logistics, and operating steps.
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

      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Process
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              How PCA Market Entry works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help clients move from broad ambition to clear execution steps,
              grounded in real market conditions and local operating realities.
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
              <UsersRound className="mb-6 h-9 w-9 text-[#FF7A00]" />

              <h2 className="text-3xl font-bold text-[#040237]">
                Who this service is for
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {clients.map((item) => (
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
              <MapPinned className="mb-6 h-9 w-9 text-[#FF7A00]" />

              <h3 className="text-2xl font-bold">Planning Africa expansion?</h3>

              <p className="mt-4 leading-7 text-white/70">
                Tell us your target market, product, business objective, and
                timeline. PCA will help you identify a practical execution path.
              </p>

              <Button asChild className="mt-8 bg-[#FF7A00] hover:bg-[#e66e00]">
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <BriefcaseBusiness className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Market Access</h3>
              <p className="mt-4 text-white/70">
                Practical support for understanding and entering African markets.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <Handshake className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Partner Support</h3>
              <p className="mt-4 text-white/70">
                Help identifying suppliers, partners, and local execution paths.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-5">
              <ClipboardCheck className="mb-5 h-8 w-8 text-[#FF7A00]" />
              <h3 className="text-xl font-bold">Execution Planning</h3>
              <p className="mt-4 text-white/70">
                Structured next steps for sourcing, operations, logistics, and trade support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}