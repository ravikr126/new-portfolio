import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SoftCursor from "@/components/ui/SoftCursor";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi Kumar - Full Stack Developer",
  description:
    "Full Stack Developer creating refined, performant, and user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <ScrollProgress />
          <SoftCursor />
          <SmoothCursor />
          <MainHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
