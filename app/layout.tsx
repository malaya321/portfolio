import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role} with ${profile.experience}. ${profile.tagline}. Based in ${profile.location}.`,
  keywords: [
    "React Native Developer",
    "React.js",
    "Next.js",
    "Mobile App Developer",
    profile.name,
    "Bhubaneswar",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.role} with ${profile.experience}. ${profile.tagline}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-gray-200 antialiased">{children}</body>
    </html>
  );
}
