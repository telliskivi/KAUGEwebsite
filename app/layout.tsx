import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAUGE — International Symposium",
  description:
    "KAUGE International Symposium — Bringing together the brightest minds for a day of insight, connection, and inspiration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}
