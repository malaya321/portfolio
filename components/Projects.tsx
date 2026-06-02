import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import StoreBadge from "./StoreBadge";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Projects" title="Apps I've built & shipped" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/5"
            >
              <div
                className={`relative flex h-28 items-center justify-between bg-gradient-to-br ${p.accent} px-6`}
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-bg/60 text-xl font-bold text-white backdrop-blur">
                  {p.name.charAt(0)}
                </span>
                <span className="rounded-full bg-bg/60 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-50">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-bg px-2 py-1 text-[11px] font-medium text-accent2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                  {p.playStore && <StoreBadge store="play" href={p.playStore} />}
                  {p.appStore && <StoreBadge store="app" href={p.appStore} />}
                  {p.web && <StoreBadge store="web" href={p.web} />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
