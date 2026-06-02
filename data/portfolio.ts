// =============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  This is the single source of truth for the whole site.
//  Replace the placeholder links (marked TODO) with real URLs.
// =============================================================

export const profile = {
  name: "Malaya Ranjan Dalabehera",
  role: "React Native Developer",
  tagline: "Building polished, production-grade mobile apps",
  experience: "4+ Years Experience",
  location: "Bhubaneswar, Odisha, India",
  // ---- Contact ----
  email: "maharana@suyogindia.com",
  phone: "+91 83277 01503",
  linkedin: "https://www.linkedin.com/in/malaya-ranjan-dalabehera-b18b9b1b0/",
  github: "https://github.com/malaya321",
  resumeUrl: "", // optional — add a link to your resume PDF
};

export const about = {
  summary:
    "I'm a React Native developer with 4+ years of experience crafting cross-platform mobile applications that are fast, reliable, and a pleasure to use. I've shipped multiple apps to the Google Play Store and Apple App Store across travel, fintech, and e-commerce domains. I work comfortably across the stack — from React Native and React.js on the front end to Node.js, Firebase, and REST APIs on the back end — and I care deeply about clean architecture, smooth UX, and real-world integrations like payments and maps.",
  highlights: [
    { value: "4+", label: "Years Experience" },
    { value: "5+", label: "Apps Shipped" },
    { value: "2", label: "App Stores" },
    { value: "10+", label: "Technologies" },
  ],
};

export const skills: { name: string; category: string }[] = [
  { name: "React Native", category: "Mobile" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Payment Integrations", category: "Integrations" },
  { name: "Maps & Location APIs", category: "Integrations" },
  { name: "Tailwind CSS", category: "Frontend" },
];

export type Project = {
  name: string;
  description: string;
  category: string;
  tech: string[];
  playStore?: string; // TODO: replace "#" with real Play Store URL
  appStore?: string; // TODO: replace "#" with real App Store URL
  web?: string; // optional live web link
  accent: string; // tailwind gradient classes for the card header
};

export const projects: Project[] = [
  {
    name: "Book Odisha",
    description:
      "A travel and booking app for exploring and reserving experiences across Odisha. Handles search, bookings, and secure payments with a smooth, native feel.",
    category: "Travel & Booking",
    tech: ["React Native", "Node.js", "REST APIs", "Payment Integrations", "Maps"],
    playStore: "#", // TODO
    appStore: "#", // TODO
    accent: "from-indigo-500/20 to-cyan-500/20",
  },
  {
    name: "Pratikara",
    description:
      "A React Native mobile application available on both major app stores, focused on a clean user experience and reliable real-time data.",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "REST APIs"],
    playStore: "#", // TODO
    appStore: "#", // TODO
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "ShipAi",
    description:
      "An international web project built with Java and React.js. A logistics/shipping platform delivering a responsive, data-driven web experience.",
    category: "Web · International",
    tech: ["React.js", "Java", "REST APIs"],
    web: "#", // TODO: optional live link
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Digital Hundi - SAMARPAN",
    description:
      "A React Native app enabling secure digital contributions, with integrated payments and a frictionless donation flow across iOS and Android.",
    category: "Fintech",
    tech: ["React Native", "Payment Integrations", "Firebase"],
    playStore: "#", // TODO
    appStore: "#", // TODO
    accent: "from-rose-500/20 to-pink-500/20",
  },
  {
    name: "Abhushan",
    description:
      "A jewellery e-commerce app built in React Native, featuring rich product catalogs, a polished shopping UI, and smooth checkout.",
    category: "Jewellery · E-commerce",
    tech: ["React Native", "Node.js", "Payment Integrations"],
    playStore: "#", // TODO
    appStore: "#", // TODO
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
];
