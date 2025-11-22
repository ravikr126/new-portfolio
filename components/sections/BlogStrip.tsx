"use client";
import React from "react";
import { posts } from "@/data/blog";
import { format } from "date-fns";
import MagneticLink from "../ui/MagneticLink";
import { ButtonIcons } from "@/data/constantData";
import { AuroraText } from "../ui/aurora-text";
export default function BlogStrip() {
  const latest = posts.slice(0, 3);
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
              The Blog
            </h2>
            <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
              Newest &nbsp;
              <AuroraText> first</AuroraText>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="text-sm text-muted-foreground">
                {format(new Date(p.date), "dd/MM/yyyy")} • {p.readingTime}
              </div>
              <p className="mt-2 text-muted-foreground text-sm">{p.summary}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <MagneticLink
            href="/blog"
            magneticClass="inline-block"
            linkClass="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            particles={ButtonIcons}
          >
            View Blogs
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
