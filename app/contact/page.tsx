"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    inquiry_type: "",
    message: "",
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
          type: "contact",
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
        inquiry_type: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/market-entry-bg.jpg')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040237]/80 via-[#040237]/50 to-[#040237]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FFD08A]">
            Contact PCA
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Let’s discuss your sourcing, logistics, procurement, or Africa
            expansion plans.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            PCA helps businesses source products, coordinate procurement,
            structure logistics, and execute market opportunities across Africa.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mt-4 px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <Card className="border-slate-200 shadow-lg lg:col-span-2">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-8 w-8 text-[#FF7A00]" />
                <div>
                  <h2 className="text-3xl font-bold text-[#040237]">
                    Send PCA your request
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Tell us what you need and our team will respond.
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
                    placeholder="Country"
                    value={form.country}
                    onChange={handleChange}
                  />

                  <select
                    name="inquiry_type"
                    value={form.inquiry_type}
                    onChange={handleChange}
                    className="h-11 rounded-md border border-input px-3 text-sm"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option>Sourcing request</option>
                    <option>Procurement coordination</option>
                    <option>Logistics support</option>
                    <option>Commodity sourcing</option>
                    <option>Market entry consultation</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us what you need..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                {success && (
                  <p className="text-sm font-medium text-green-600">
                    Request sent successfully.
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
                  {loading ? "Sending..." : "Send Request"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card className="border-[#040237] bg-[#040237] text-white shadow-xl">
              <CardContent className="p-6">
                <MessageCircle className="mb-5 h-9 w-9 text-[#FF7A00]" />

                <h3 className="text-2xl font-bold">Talk directly to PCA</h3>

                <div className="mt-6 space-y-5 text-sm text-white/80">
                  <p className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.phone}
                  </p>

                  <p className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.email}
                  </p>

                  <p className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.address}
                  </p>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full bg-[#FF7A00] hover:bg-[#e66e00]"
                >
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`}>
                    Chat on WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Clock className="mb-5 h-8 w-8 text-[#FF7A00]" />

                <h3 className="text-xl font-bold text-[#040237]">
                  Faster responses
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Product or service needed",
                    "Destination country",
                    "Timeline",
                    "Specifications",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}