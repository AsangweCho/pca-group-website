import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Start a Sourcing Request | Procure Consult Africa",
  description:
    "Submit your sourcing, procurement, logistics, commodity, or Africa market entry request to Procure Consult Africa.",
};

export default function StartSourcingRequestPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-[#040237] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-[#FF7A00]">
            Start a Request
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Tell us what you want to source, move, or execute across Africa.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Share the details of your request. PCA will review your needs and
            recommend the right sourcing, procurement, logistics, commodity, or
            market entry path.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="border-slate-200 bg-white lg:col-span-2">
            <CardContent className="p-5">
              <div className="mb-8">
                <ClipboardList className="mb-5 h-9 w-9 text-[#FF7A00]" />
                <h2 className="text-3xl font-bold text-[#040237]">
                  Sourcing request form
                </h2>
                <p className="mt-3 text-slate-600">
                  Complete the form below with as much detail as possible.
                </p>
              </div>

              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Full name
                    </label>
                    <Input placeholder="Your full name" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Company name
                    </label>
                    <Input placeholder="Company or business name" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Email address
                    </label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      WhatsApp / phone
                    </label>
                    <Input placeholder="+237..." />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Country
                    </label>
                    <Input placeholder="Where are you based?" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Destination
                    </label>
                    <Input placeholder="Where should the goods go?" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#040237]">
                    What do you want to source or move?
                  </label>
                  <Input placeholder="Example: building materials, spare parts, cocoa, consumer goods..." />
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Quantity
                    </label>
                    <Input placeholder="Estimated quantity" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Budget range
                    </label>
                    <Input placeholder="Estimated budget" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#040237]">
                      Timeline
                    </label>
                    <Input placeholder="How urgent is it?" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#040237]">
                    Service needed
                  </label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Select a service</option>
                    <option>PCA Source</option>
                    <option>PCA Trade</option>
                    <option>PCA Logistics</option>
                    <option>PCA Commodities</option>
                    <option>PCA Market Entry</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#040237]">
                    Additional details
                  </label>
                  <Textarea
                    rows={6}
                    placeholder="Tell us about specifications, preferred market, quality expectations, supplier details, or any special requirements."
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="mt-3 bg-[#FF7A00] hover:bg-[#e66e00]"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-slate-500">
                  Form submission will be connected to email/Supabase in the next
                  build step. For now, use the contact details on this page.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-[#FF7A00] bg-[#040237] text-white">
              <CardContent className="p-5">
                <ShieldCheck className="mb-5 h-9 w-9 text-[#FF7A00]" />
                <h3 className="text-2xl font-bold">What happens next?</h3>
                <div className="mt-6 space-y-4 text-sm text-white/75">
                  {[
                    "PCA reviews your request",
                    "We clarify missing details",
                    "We identify the right service path",
                    "You receive next-step guidance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FF7A00]" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-[#040237]">
                  Contact PCA directly
                </h3>

                <div className="mt-6 space-y-4 text-sm text-slate-700">
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.phone}
                  </p>

                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#FF7A00]" />
                    WhatsApp: {siteConfig.whatsapp}
                  </p>

                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#FF7A00]" />
                    {siteConfig.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}