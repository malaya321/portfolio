import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { LinkedInIcon, MailIcon, GitHubIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/50 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Contact" title="Let's work together" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m open to new roles, freelance projects, and interesting collaborations.
              Whether you have a mobile app idea or need an experienced React Native developer
              on your team, I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-bg text-accent2">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">Email</span>
                  <span className="text-gray-100 group-hover:text-white">{profile.email}</span>
                </span>
              </a>

              {profile.phone && (
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-bg text-accent2">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">Phone</span>
                    <span className="text-gray-100 group-hover:text-white">{profile.phone}</span>
                  </span>
                </a>
              )}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-bg text-accent2">
                  <LinkedInIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">LinkedIn</span>
                  <span className="text-gray-100 group-hover:text-white">Connect with me</span>
                </span>
              </a>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-bg text-accent2">
                    <GitHubIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">GitHub</span>
                    <span className="text-gray-100 group-hover:text-white">View my code</span>
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-accent2/10 p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-50">Have a project in mind?</h3>
            <p className="mt-3 text-muted">
              Drop me a line and I&apos;ll get back to you within a day.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 self-center rounded-full bg-gradient-to-r from-accent to-accent2 px-8 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
