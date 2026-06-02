import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categories = ["Mobile", "Frontend", "Backend", "Integrations"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/50 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />

        <div className="mb-10 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s.name}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-accent hover:text-white"
            >
              {s.name}
            </span>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div
                key={cat}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent2">
                  {cat}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((s) => (
                    <li key={s.name} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent2" />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
