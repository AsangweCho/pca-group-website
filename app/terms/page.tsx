import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Procure Consult Africa",
  description: "Website terms for Procure Consult Africa.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Terms
          </p>
          <h1 className="text-5xl font-bold tracking-tight">Website Terms</h1>
          <p className="mt-6 text-white/75">Last updated: May 2026</p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-slate-700">
          <p>
            These terms govern the use of the Procure Consult Africa website.
            By using this website, you agree to use the information and services
            responsibly and in accordance with applicable laws.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[#040237]">
              Website information
            </h2>
            <p className="mt-3">
              Information on this website is provided for general business
              information. It does not constitute a binding service agreement,
              legal advice, financial advice, or a guaranteed offer of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#040237]">
              Service requests
            </h2>
            <p className="mt-3">
              Submitting a request through the website does not automatically
              create a client relationship. PCA will review requests and confirm
              scope, feasibility, pricing, and execution terms before proceeding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#040237]">
              Third-party partners
            </h2>
            <p className="mt-3">
              PCA may coordinate with suppliers, logistics providers, customs
              agents, and other partners. Third-party timelines, prices, and
              performance may be subject to external factors beyond PCA’s direct
              control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#040237]">
              No guarantee of risk-free trade
            </h2>
            <p className="mt-3">
              Cross-border trade, sourcing, logistics, commodities, and market
              entry involve practical risks. PCA’s role is to support better
              structure, communication, and execution, not to represent trade as
              risk-free.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}