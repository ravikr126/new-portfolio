"use client";
import React from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { CoolMode } from "./cool-mode";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  magneticClass?: string;
  linkClass?: string;
  target?: "_blank" | "_self";
  rel?: string;
  particles?: string[];
}

export default function MagneticLink({
  children,
  href,
  magneticClass = "inline-block",
  linkClass = "",
  target,
  rel,
  particles = ["🚀", "⚡", "🎯", "💻", "⭐"],
}: MagneticLinkProps) {
  return (
    <Magnetic className={magneticClass}>
      <CoolMode
        options={{
          particle: particles,
        }}
      >
        <Link
          href={href}
          target={target}
          rel={rel}
          className={linkClass}
        >
          {children}
        </Link>
      </CoolMode>
    </Magnetic>
  );
}