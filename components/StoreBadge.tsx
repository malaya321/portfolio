import { GooglePlayIcon, AppleIcon, ArrowIcon } from "./icons";

type Store = "play" | "app" | "web";

const config = {
  play: { label: "Google Play", Icon: GooglePlayIcon },
  app: { label: "App Store", Icon: AppleIcon },
  web: { label: "Live Site", Icon: ArrowIcon },
};

export default function StoreBadge({
  store,
  href,
}: {
  store: Store;
  href: string;
}) {
  const { label, Icon } = config[store];
  const isPlaceholder = href === "#" || href === "";

  const inner = (
    <>
      <Icon className="h-4 w-4" />
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wide text-muted">
          {store === "web" ? "View" : "Get it on"}
        </span>
        <span>{label}</span>
      </span>
    </>
  );

  const baseClass =
    "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors";

  // Placeholder: render a non-clickable span (keeps this a Server Component).
  if (isPlaceholder) {
    return (
      <span
        aria-disabled="true"
        title="Link coming soon"
        className={`${baseClass} cursor-not-allowed border-border/60 bg-bg/40 text-muted/60`}
      >
        {inner}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`${baseClass} border-border bg-bg text-gray-100 hover:border-accent hover:text-white`}
    >
      {inner}
    </a>
  );
}
