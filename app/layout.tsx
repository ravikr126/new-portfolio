import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description: "Full Stack Developer & UI/UX Designer - Creating beautiful, functional, and user-centered digital experiences",
  keywords: ["portfolio", "developer", "designer", "web development", "UI/UX"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio - Your Name",
    description: "Full Stack Developer & UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          <MainHeader/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
