import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/Section";
import { Download, Phone, Send, GraduationCap, ArrowRight } from "lucide-react";
import { institutions } from "@/data/institutions";
import { useState } from "react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Janhit Group" },
      { name: "description", content: "Apply to Janhit colleges and schools. Download brochures, contact the admission team or fill the inquiry form." },
      { property: "og:title", content: "Admissions Open — Janhit Group" },
      { property: "og:description", content: "Begin your Janhit journey today." },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="py-16">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Admissions Open"
            title="Begin your Janhit journey"
            subtitle="Apply to your preferred program. Our team will guide you through every step."
          />

          <div className="grid lg:grid-cols-3 gap-5 mb-8">
            {[
              { icon: Send, title: "Inquiry Form", desc: "Tell us your interest and we'll reach out." },
              { icon: Download, title: "Download Brochure", desc: "Get the complete prospectus PDF." },
              { icon: Phone, title: "Talk to Admissions", desc: "+91 98765 43210 · 10 AM – 6 PM" },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border hover-lift">
                <div className="size-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 p-6 md:p-8 rounded-3xl bg-gradient-gold text-gold-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-gold">
            <div className="flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-gold-foreground/10 grid place-items-center border border-gold-foreground/20">
                <GraduationCap className="size-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold">Janhit World School Admissions</h3>
                <p className="opacity-90 text-sm md:text-base">View detailed eligibility, fee structure, and founder's batch benefits.</p>
              </div>
            </div>
            <Link 
              to="/institutions/$slug" 
              params={{ slug: "janhit-world-school-greater-noida" }}
              className="px-6 py-3 rounded-xl bg-gold-foreground text-gold font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
            >
              View School Policy <ArrowRight className="size-4" />
            </Link>
          </div>

          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 p-8 rounded-3xl bg-card border border-border">
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">Course</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm">
                <option value="">Select a course</option>
                {["LL.B", "LL.M", "B.A. LL.B", "BBA", "BCA", "B.Sc", "B.Com", "B.A", "B.Ed", "D.El.Ed", "B.P.Ed", "Agriculture", "K-12 School"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">Campus</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm">
                <option value="">Select a campus</option>
                {institutions.map((i) => <option key={i.slug}>{i.name} — {i.city}</option>)}
              </select>
            </div>
            <Field label="City" name="city" />
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3">
              {sent ? (
                <p className="text-sm text-green-600 font-semibold">✓ Inquiry received. We'll be in touch shortly.</p>
              ) : <span />}
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold">
                Submit Inquiry <Send className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">{label}</label>
      <input name={name} type={type} required={required} maxLength={120} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm" />
    </div>
  );
}
