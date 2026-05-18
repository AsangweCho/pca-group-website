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
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative bg-[#040237] text-white">
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
            className="absolute left-10 top-24 h-72 w-72 rounded-full bg-[#FF7A00] blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600 blur-3xl"
          />
        </motion.div>

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
            >
              {siteConfig.title}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={transition}
              className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Source. Buy. Move.{" "}
              <span className="text-[#FF7A00]">Expand Across Africa.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={transition}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/75"
            >
              Procure Consult Africa helps businesses source products,
              coordinate procurement, manage logistics, and access African
              markets with structured local execution.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#FF7A00] text-white hover:bg-[#e66e00]"
              >
                <Link href="/start-sourcing-request">
                  Start a Sourcing Request{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#040237]"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#FF7A00]">
                      PCA Trade Network
                    </p>
                    <h2 className="text-2xl font-bold text-[#040237]">
                      From request to delivery
                    </h2>
                  </div>
                  <Globe2 className="h-10 w-10 text-[#040237]" />
                </div>

                <div className="space-y-4">
                  {[
                    ["Supplier review", "Compare sourcing options"],
                    ["Procurement coordination", "Support transaction steps"],
                    ["Logistics support", "Move goods across corridors"],
                    ["Market execution", "Operate with local support"],
                  ].map(([title, text], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.45 + index * 0.12 }}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="rounded-xl bg-[#040237] p-2 text-[#FF7A00]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#040237]">{title}</p>
                        <p className="text-sm text-slate-600">{text}</p>
                      </div>
                    </motion.div>
                  ))}
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
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
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
            <h2 className="text-4xl font-bold tracking-tight text-[#040237] md:text-5xl">
              Cross-border trade should not feel this difficult.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
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
            className="mt-12 grid gap-5 md:grid-cols-5"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full border-slate-200 bg-white">
                  <CardContent className="p-6">
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
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
                What we do
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#040237] md:text-5xl">
                Trade services built for real business needs.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                PCA connects sourcing, procurement, logistics, commodities, and
                market access into one coordinated process.
              </p>
            </div>

            <Button asChild className="bg-[#040237] hover:bg-[#09065a]">
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
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.href}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -8 }}
              >
                <Link href={service.href}>
                  <Card className="h-full border-slate-200 transition hover:border-[#FF7A00] hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-6">
                      <Route className="mb-6 h-8 w-8 text-[#FF7A00]" />
                      <h3 className="text-xl font-bold text-[#040237]">
                        {service.name}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                        {service.summary}
                      </p>
                      <p className="mt-6 text-sm font-semibold text-[#FF7A00]">
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
      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-14 max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Industries
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Focus sectors for sourcing and trade execution.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
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
                  <Card className="h-full border-white/10 bg-white/10 text-white backdrop-blur transition hover:border-[#FF7A00]">
                    <CardContent className="p-6">
                      <Icon className="mb-6 h-8 w-8 text-[#FF7A00]" />
                      <h3 className="text-lg font-bold">{industry.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-white/70">
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
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-14 max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              How it works
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237] md:text-5xl">
              A structured process from request to delivery.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-5"
          >
            {process.map((step, index) => (
              <motion.div
                key={step}
                variants={scaleIn}
                transition={transition}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-slate-200 p-6"
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
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          transition={transition}
          className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] bg-white p-8 shadow-xl lg:grid-cols-2 lg:p-14"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
              Diaspora & international business
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#040237]">
              Building or sourcing in Africa from abroad?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you are in Europe, North America, the Middle East, or
              Asia, PCA helps you coordinate sourcing, procurement, logistics,
              and market execution through a trusted team on the ground.
            </p>
            <Button asChild className="mt-8 bg-[#040237] hover:bg-[#09065a]">
              <Link href="/contact">
                Book a Market Entry Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] bg-[#040237] p-8 text-white"
          >
            <MapPinned className="mb-6 h-10 w-10 text-[#FF7A00]" />
            <h3 className="text-2xl font-bold">Local execution matters.</h3>
            <p className="mt-4 leading-7 text-white/70">
              PCA gives clients practical support where trade actually happens:
              supplier markets, borders, warehouses, ports, offices, and final
              delivery points.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={transition}
            className="mb-12 text-center"
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
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="font-bold text-[#040237]">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FF7A00] px-6 py-20 text-white lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={transition}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to source, buy, move or expand across Africa?
            </h2>
            <p className="mt-4 max-w-2xl text-white/85">
              Start with a sourcing request and our team will review your needs.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#040237] hover:bg-[#09065a]">
            <Link href="/start-sourcing-request">
              Start Your Request <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}