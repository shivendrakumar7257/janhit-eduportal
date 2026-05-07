import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/Section";
import { useState } from "react";
import { X } from "lucide-react";
import lib from "@/assets/gallery-library.jpg";
import lab from "@/assets/gallery-lab.jpg";
import grad from "@/assets/gallery-graduation.jpg";
import sports from "@/assets/gallery-sports.jpg";
import classroom from "@/assets/gallery-classroom.jpg";
import cultural from "@/assets/gallery-cultural.jpg";
import campus from "@/assets/hero-campus.jpg";
import school from "@/assets/campus-school.jpg";
import law from "@/assets/campus-law.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Campus Gallery — Janhit Group" },
      { name: "description", content: "Explore campus life across Janhit institutions — classrooms, labs, libraries, sports and cultural events." },
      { property: "og:title", content: "Campus Gallery — Janhit Group" },
      { property: "og:description", content: "Glimpses of campus life across the Janhit family." },
      { property: "og:image", content: campus },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: campus, label: "Main Campus" },
  { src: lib, label: "Library" },
  { src: lab, label: "Science Lab" },
  { src: grad, label: "Graduation" },
  { src: sports, label: "Sports" },
  { src: classroom, label: "Classroom" },
  { src: cultural, label: "Cultural" },
  { src: school, label: "Janhit World School" },
  { src: law, label: "Janhit College of Law" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Gallery"
          title="Life at Janhit"
          subtitle="A peek into the energy, learning and celebrations on our campuses."
        />
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it.src)}
              className="mb-4 block w-full overflow-hidden rounded-2xl group relative"
            >
              <img src={it.src} alt={it.label} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-primary-foreground font-semibold text-sm">{it.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4">
          <button className="absolute top-5 right-5 size-10 grid place-items-center rounded-full bg-white/10 text-white">
            <X className="size-5" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}
