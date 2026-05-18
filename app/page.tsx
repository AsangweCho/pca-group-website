"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  Globe2,
  MapPinned,
  PackageSearch,
  Route,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const problems = [
  "Unverified suppliers",
  "Unclear landed costs",
  "Payment uncertainty",
  "Logistics complexity",
  "Limited local presence",
];

const industries = [
  {
    title: "Consumer Goods",
    text: "Wholesale and retail inventory sourcing for businesses that need better supply access.",
    icon: PackageSearch,
  },
  {
    title: "Building Materials",
    text: "Construction inputs, fittings, hardware, and project-related procurement support.",
    icon: Building2,
  },
  {
    title: "Industrial Supplies",
    text: "Tools, equipment, spare parts, machinery inputs, and business supply coordination.",
    icon: Factory,
  },
  {
    title: "Automotive",
    text: "Vehicle-related sourcing, parts, accessories, and trade coordination support.",
    icon: Truck,
  },
  {
    title: "Wholesale Trade",
    text: "Bulk purchasing support for traders, distributors, and repeat commercial buyers.",
    icon: Ship,
  },
];

const process = [
  "Submit your request",
  "We review and source options",
  "You receive a sourcing proposal",
  "Procurement is coordinated",
  "Goods are moved and delivered",
];

const faqs = [
  {
    q: "Does PCA buy goods on behalf of clients?",
    a: "PCA supports procurement coordination and transaction execution depending on the agreed scope. We help clients structure sourcing, supplier communication, documentation, and purchase steps carefully.",
  },
  {
    q: "Can PCA support sourcing from global markets into Africa?",
    a: "Yes. PCA supports global sourcing into Africa and African trade execution, including supplier search, procurement coordination, logistics support, and market access.",
  },
  {
    q: "Does PCA handle logistics and customs?",
    a: "PCA coordinates logistics, freight, customs support, warehousing, and delivery through relevant trade and logistics partners where required.",
  },
  {
    q: "Can diaspora clients work with PCA remotely?",
    a: "Yes. PCA is designed to support diaspora and international clients who need trusted local execution across African markets.",
  },
];

const transition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#040237] text-white shadow-2xl">
       <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  transition={{ duration: 1 }}
  className="absolute inset-0 opacity-20"
>
  <motion.div
    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute left-10 top-24 h-56 w-56 rounded-full bg-[#FF7A00] blur-3xl"
  />

  <motion.div
    animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600 blur-3xl"
  />
</motion.div>

<div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:py-14 lg:grid-cols-2 lg:px-10">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <motion.div
      variants={fadeUp}
      transition={transition}
      className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
    >
      {siteConfig.title}
    </motion.div>

    <motion.h1
      variants={fadeUp}
      transition={transition}
      className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
    >
      Source. Buy. Move.{" "}
      <span className="text-[#FF7A00]">Expand Across Africa.</span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      transition={transition}
      className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg"
    >
      Procure Consult Africa helps businesses source products,
      coordinate procurement, manage logistics, and access African
      markets with structured local execution.
    </motion.p>

    <motion.div
      variants={fadeUp}
      transition={transition}
      className="mt-7 flex flex-col gap-3 sm:flex-row"
    >
      <Button
        asChild
        size="lg"
        className="bg-[#FF7A00] text-white hover:bg-[#e66e00]"
      >
        <Link href="/start-sourcing-request">
          Start a Sourcing Request
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#040237]"
      >
        <Link href="/contact">
          Book Consultation
        </Link>
      </Button>
    </motion.div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
    className="hidden lg:block"
  >
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
      <div className="rounded-[1.5rem] bg-white p-6 shadow-2xl">
        <div className="grid gap-4">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              Product sourcing
            </p>
            <p className="mt-2 text-lg font-bold text-[#040237]">
              Verified supplier sourcing and negotiation support
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              Logistics coordination
            </p>
            <p className="mt-2 text-lg font-bold text-[#040237]">
              Shipping, customs, movement, and delivery execution
            </p>
          </div>

          <div className="rounded-2xl bg-[#040237] p-5 text-white">
            <p className="text-sm font-semibold text-white/70">
              Market access
            </p>
            <p className="mt-2 text-lg font-bold">
              Africa expansion support for global businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-5 lg:px-8">
          {[
            "Supplier sourcing support",
            "Procurement coordination",
            "Logistics and customs support",
            "Diaspora business support",
            "West & Central Africa execution",
          ].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              transition={transition}
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              <BadgeCheck className="h-5 w-5 text-[#FF7A00]" />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROBLEM */}
  <section className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-[#040237] px-5 py-12 text-white shadow-2xl sm:px-8 lg:px-10">
  <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-65" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/60 to-[#040237]/35" />
  <div className="relative">  </div>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              The trade problem
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
              Cross-border trade should not feel this difficult.
            </h2>
           <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-md">
              Finding the right supplier, negotiating prices, coordinating
              payments, moving goods, clearing customs, and confirming delivery
              can quickly become overwhelming. PCA helps reduce that friction
              with structured sourcing, procurement, logistics, and market
              execution support.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-8 grid gap-5 md:grid-cols-5"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full border-slate-200 bg-white">
                  <CardContent className="p-5">
                    <ShieldCheck className="mb-5 h-7 w-7 text-[#FF7A00]" />
                    <p className="font-semibold text-[#040237]">{problem}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
            {/* SERVICES */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-[#040237] px-5 py-12 text-white shadow-2xl sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/60 to-[#040237]/35" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
             <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FFD08A] drop-shadow-sm">
                What we do
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-4xl">
                Trade services built for real business needs.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                PCA connects sourcing, procurement, logistics, commodities, and
                market access into one coordinated process.
              </p>
            </div>

            <Button asChild className="bg-[#FF7A00] hover:bg-[#e66e00]">
              <Link href="/services">
                Explore services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.href}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -8 }}
              >
                <Link href={service.href}>
                  <Card className="h-full border-white/15 bg-white/95 shadow-lg backdrop-blur transition hover:border-[#FF7A00] hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-5">
                      <Route className="mb-5 h-8 w-8 text-[#FF7A00]" />

                      <h3 className="text-xl font-bold text-[#040237]">
                        {service.name}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        {service.summary}
                      </p>

                      <p className="mt-5 text-sm font-semibold text-[#FF7A00]">
                        Learn more →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      {/* INDUSTRIES */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-[#040237] px-5 py-12 text-white shadow-2xl sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[url('/images/industries-bg.jpg')] bg-cover bg-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/75 via-[#040237]/50 to-[#040237]/30" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-10 max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Industries
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-4xl">
              Focus sectors for sourcing and trade execution.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-5"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  variants={scaleIn}
                  transition={transition}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full border-white/15 bg-white/15 text-white shadow-lg backdrop-blur transition hover:border-[#FF7A00]">
                    <CardContent className="p-5">
                      <Icon className="mb-5 h-8 w-8 text-[#FF7A00]" />
                      <h3 className="text-lg font-bold">{industry.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/75">
                        {industry.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-10 max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              How it works
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237] md:text-4xl">
              A structured process from request to delivery.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-5"
          >
            {process.map((step, index) => (
              <motion.div
                key={step}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-slate-200 p-5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7A00] font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#040237]">{step}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIASPORA CTA */}
           <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/75 via-[#040237]/45 to-[#040237]/25" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          transition={transition}
          className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Diaspora & international business
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white">
              Building or sourcing in Africa from abroad?
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Whether you are in Europe, North America, the Middle East, or
              Asia, PCA helps you coordinate sourcing, procurement, logistics,
              and market execution through a trusted team on the ground.
            </p>

            <Button asChild className="mt-8 bg-[#FF7A00] hover:bg-[#e66e00]">
              <Link href="/contact">
                Book a Market Entry Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl"
          >
            <MapPinned className="mb-6 h-10 w-10 text-[#FF7A00]" />

            <h3 className="text-2xl font-bold">
              Local execution matters.
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              PCA gives clients practical support where trade actually happens:
              supplier markets, borders, warehouses, ports, offices, and final
              delivery points.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mt-4 rounded-[1.75rem] bg-white px-5 py-12 shadow-lg sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-8 text-center"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              FAQ
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Common questions before working with PCA.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-5"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                transition={transition}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <h3 className="font-bold text-[#040237]">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

           <section className="relative mt-4 overflow-hidden rounded-[1.75rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/80 via-[#FF7A00]/55 to-[#040237]/35" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={transition}
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-10"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Ready to source, buy, move or expand across Africa?
            </h2>

            <p className="mt-4 max-w-2xl text-white/85 text-lg leading-8">
              Start with a sourcing request and our team will review your needs,
              structure the process, and guide execution.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#040237] hover:bg-[#09065a]"
          >
            <Link href="/start-sourcing-request">
              Start Your Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}