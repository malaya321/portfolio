import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="About" title="Who I am" />
        <div className="grid gap-12 lg:grid-cols-5">
          <p className="lg:col-span-3 text-lg leading-relaxed text-muted">
            {about.summary}
          </p>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-accent"
              >
                <div className="gradient-text text-3xl font-bold">{h.value}</div>
                <div className="mt-1 text-sm text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
