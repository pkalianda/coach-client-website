import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Agentation } from "agentation";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zuck - Client Management for Coaches",
  description: "Client management made easier than your rest days. Build workouts, track progress, and handle payments—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
