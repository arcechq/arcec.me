import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description: "personal website of aditya",
  openGraph: {
    title: "arcec.me",
    description: "personal website of aditya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body
        className={`${geistSans.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
