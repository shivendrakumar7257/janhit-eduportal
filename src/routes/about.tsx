import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, FadeIn } from "@/components/Section";
import { Award, GraduationCap, Heart, Target } from "lucide-react";
import heroImg from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Janhit Group of Institutions" },
      { name: "description", content: "Established in 2002, Janhit Group is a multi-campus education family across UP — approved by AICTE, NCTE, BCI, CBSE." },
      { property: "og:title", content: "About Janhit Group" },
      { property: "og:description", content: "Two decades of nurturing minds across Uttar Pradesh." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="container-tight relative">
          <FadeIn>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/40">
              Our Story
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
              Building a legacy of <span className="text-gradient-gold">empowered learning</span>.
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-2xl">
              For over two decades, Janhit Group has stood for accessible, value-driven education that bridges
              tradition with the demands of a modern world.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="container-tight grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To empower learners with knowledge, character and skills — through inclusive campuses that respect
              every student and prepare them for meaningful professional and civic lives.
            </p>
            <h2 className="mt-10 text-3xl font-display font-bold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be among India's most trusted education ecosystems — recognized for academic rigor, integrity
              and the lifelong success of our alumni.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, t: "10,000+", s: "Students enrolled" },
                { icon: Award, t: "AICTE · NCTE · BCI · CBSE", s: "Approvals" },
                { icon: Heart, t: "100+", s: "Faculty members" },
                { icon: Target, t: "3 Cities", s: "Greater Noida · Ghaziabad · Saharanpur" },
              ].map((c) => (
                <div key={c.s} className="p-6 rounded-2xl bg-card border border-border">
                  <c.icon className="size-6 text-gold" />
                  <div className="mt-3 font-display text-lg font-bold">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.s}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-tight">
          <SectionHeader eyebrow="Approvals" title="Recognized & Affiliated" subtitle="Our programs meet the highest national standards." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["AICTE", "NCTE", "BCI", "CBSE", "CCS University", "Maa Shakumbhari University"].map((t) => (
              <div key={t} className="aspect-square rounded-2xl bg-card border border-border grid place-items-center text-center px-3 hover-lift">
                <span className="font-display font-bold text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
