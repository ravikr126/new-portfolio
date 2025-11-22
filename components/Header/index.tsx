"use client";
import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { navItems, Title } from "@/data/constantData";

type Props = {};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("w-full flex justify-center items-center py-4", className)}
    >
      <nav
        className="flex max-w-3xl mx-auto rounded-full bg-background/80 border border-border shadow-lg dark:shadow-white/30 px-2 sm:px-4 py-2 gap-2 sm:gap-4 overflow-x-auto"
        style={{ backdropFilter: "blur(8px)" }}
      >
        {navItems.map((item, idx) => {
          const isActive = active === item.name;
          return (
            <Link
              key={idx}
              href={item.link}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-muted text-foreground border border-border shadow-[0_0_8px_2px_rgba(255,255,255,0.12)] dark:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] dark:border-white/60 dark:ring-2 dark:ring-white/40"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
              onClick={() => setActive(item.name)}
              style={{ minWidth: 80, justifyContent: "center" }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

const MainHeader = (props: Props) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-70 bg-background/30 backdrop-blur-sm ">
        <div className="container mx-auto item-center px-4 md:px-8 py-4 md:py-2 flex items-center justify-between">
          {/* Mobile: Portfolio name and hamburger aligned */}
          <div className="flex items-center justify-between w-full md:hidden">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent px-4 py-2"
            >
              {Title}
            </Link>
            <div className="flex items-center space-x-4 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <FaBars className="h-6 w-6 text-foreground" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 p-0 z-100">
                  <VisuallyHidden>
                    <DialogTitle>Navigation Menu</DialogTitle>
                  </VisuallyHidden>
                  <div className="flex flex-col h-full relative">
                    {/* Top bar with logo and close button */}
                    <div className="mt-4 px-4">
                      <ThemeToggle />
                    </div>

                    <nav className="flex flex-col gap-2 mt-8 px-4">
                      {navItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-all"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* Desktop: Portfolio title */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              {Title}
            </Link>
            <Navbar className="top-2" />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
