import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | Procure Consult Africa",
  description:
    "Contact Procure Consult Africa for sourcing, procurement coordination, logistics, commodity sourcing, and Africa market entry support.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-[#040237] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Contact PCA
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Speak to us about sourcing, logistics, commodities, or market entry.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Tell us what you need. Our team will help identify the right path for
            your sourcing, procurement, logistics, or African market execution
            request.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 bg-white lg:col-span-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#040237]">
                Send PCA a message
              </h2>

              <p className="mt-3 text-slate-600">
                Use this form for consultations, partnership inquiries, or
                general business requests.
              </p>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Full name
                    </label>
                    <Input placeholder="Your full name" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Company
                    </label>
                    <Input placeholder="Company or business name" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Email
                    </label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Phone / WhatsApp
                    </label>
                    <Input placeholder="+237..." />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#040237]">
                    Inquiry type
                  </label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Select inquiry type</option>
                    <option>Sourcing request</option>
                    <option>Procurement coordination</option>
                    <option>Logistics support</option>
                    <option>Commodity sourcing</option>
                    <option>Market entry consultation</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#040237]">
                    Message
                  </label>
                  <Textarea
                    rows={7}
                    placeholder="Tell us what you need and where you need support."
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="mt-3 bg-[#FF7A00] hover:bg-[#e66e00]"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-slate-500">
                  Form submission will be connected in the next technical step.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-[#FF7A00] bg-[#040237] text-white">
              <CardContent className="p-7">
                <MessageCircle className="mb-5 h-9 w-9 text-[#FF7A00]" />
                <h3 className="text-2xl font-bold">Direct contact</h3>

                <div className="mt-6 space-y-5 text-sm text-white/75">
                  <p className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                    <span>{siteConfig.phone}</span>
                  </p>

                  <p className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                    <span>WhatsApp: {siteConfig.whatsapp}</span>
                  </p>

                  <p className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                    <span>{siteConfig.email}</span>
                  </p>

                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                    <span>{siteConfig.address}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-7">
                <Clock className="mb-5 h-8 w-8 text-[#FF7A00]" />
                <h3 className="text-xl font-bold text-[#040237]">
                  Response expectation
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  For sourcing and logistics requests, include product details,
                  quantity, destination, timeline, and any photos or
                  specifications available.
                </p>

                <Button
                  asChild
                  className="mt-6 bg-[#040237] hover:bg-[#09065a]"
                >
                  <Link href="/start-sourcing-request">
                    Start Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}