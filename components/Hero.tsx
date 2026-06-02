import Image from "next/image";
import { profile } from "@/data/portfolio";
import { LinkedInIcon, MailIcon, GitHubIcon, LocationIcon, ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section className="bg-glow relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20">
        <div className="mb-6 animate-fade-up">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent to-accent2 blur-[2px]" />
            <Image
              src="/malaya-profile.jpg"
              alt={profile.name}
              width={128}
              height={128}
              priority
              className="relative h-full w-full rounded-full border-2 border-bg object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-accent2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new opportunities
          </span>
        </div>

        <h1
          className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-50 sm:text-6xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I&apos;m {profile.name.split(" ")[0]}.
          <br />
          <span className="gradient-text">{profile.role}</span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.tagline} with {profile.experience.toLowerCase()}. I build cross-platform
          mobile apps shipped to the Play Store and App Store — from travel and fintech to
          e-commerce.
        </p>

        <div
          className="mt-4 flex items-center gap-2 text-sm text-muted animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <LocationIcon className="h-4 w-4 text-accent2" />
          {profile.location}
        </div>

        <div
          className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
          >
            View My Work
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-gray-100 transition-colors hover:border-accent"
          >
            Get in Touch
          </a>
        </div>

        <div
          className="mt-10 flex items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-gray-100"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-gray-100"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-gray-100"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
