"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export default function StartSourcingRequestPage() {
  const [form, setForm] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    destination: "",
    request_details: "",
    quantity: "",
    budget: "",
    timeline: "",
    service_needed: "",
    additional_details: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "sourcing",
          payload: form,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSuccess(true);

      setForm({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        destination: "",
        request_details: "",
        quantity: "",
        budget: "",
        timeline: "",
        service_needed: "",
        additional_details: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/trade-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/50 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A]">
            Start a Request
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Tell PCA what you need to source, move, or execute across Africa.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Submit your request with practical details so PCA can guide the
            right sourcing, logistics, procurement, commodity, or market entry
            execution path.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="mt-4 px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <Card className="border-slate-200 shadow-lg lg:col-span-2">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <ClipboardList className="mt-1 h-8 w-8 text-[#FF7A00]" />
                <div>
                  <h2 className="text-3xl font-bold text-[#040237]">
                    Structured request form
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Better details = faster execution guidance.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    name="full_name"
                    placeholder="Full name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="company"
                    placeholder="Company / Business"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="phone"
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    name="country"
                    placeholder="Your country"
                    value={form.country}
                    onChange={handleChange}
                  />

                  <Input
                    name="destination"
                    placeholder="Destination country"
                    value={form.destination}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="request_details"
                  placeholder="What do you need?"
                  value={form.request_details}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 md:grid-cols-3">
                  <Input
                    name="quantity"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={handleChange}
                  />

                  <Input
                    name="budget"
                    placeholder="Budget"
                    value={form.budget}
                    onChange={handleChange}
                  />

                  <Input
                    name="timeline"
                    placeholder="Timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  />
                </div>

                <select
                  name="service_needed"
                  value={form.service_needed}
                  onChange={handleChange}
                  className="h-11 rounded-md border border-input px-3 text-sm"
                >
                  <option value="">Select service</option>
                  <option>PCA Source</option>
                  <option>PCA Trade</option>
                  <option>PCA Logistics</option>
                  <option>PCA Commodities</option>
                  <option>PCA Market Entry</option>
                  <option>Not sure yet</option>
                </select>

                <Textarea
                  name="additional_details"
                  rows={7}
                  placeholder="Project details, specifications, preferred suppliers, delivery expectations..."
                  value={form.additional_details}
                  onChange={handleChange}
                />

                {success && (
                  <p className="text-sm font-medium text-green-600">
                    Request submitted successfully.
                  </p>
                )}

                {error && (
                  <p className="text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-[#FF7A00] hover:bg-[#e66e00]"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card className="bg-[#040237] text-white shadow-xl">
              <CardContent className="p-6">
                <ShieldCheck className="mb-5 h-9 w-9 text-[#FF7A00]" />
                <h3 className="text-2xl font-bold">What happens next?</h3>

                <div className="mt-6 space-y-4 text-sm text-white/80">
                  {[
                    "PCA reviews your request",
                    "We clarify missing details",
                    "We define the right execution path",
                    "You receive next-step guidance",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Target className="mb-5 h-8 w-8 text-[#FF7A00]" />
                <h3 className="text-xl font-bold text-[#040237]">
                  Faster response checklist
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Product details",
                    "Destination",
                    "Quantity",
                    "Budget",
                    "Timeline",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <MessageCircle className="mb-5 h-8 w-8 text-[#FF7A00]" />
                <h3 className="text-xl font-bold text-[#040237]">
                  Contact directly
                </h3>

                <div className="mt-5 space-y-4 text-sm text-slate-700">
                  <p className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.phone}
                  </p>

                  <p className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.email}
                  </p>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full bg-[#040237] hover:bg-[#09065a]"
                >
                  <Link href="/contact">Speak to PCA</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}