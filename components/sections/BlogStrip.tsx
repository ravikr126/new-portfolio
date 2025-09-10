"use client";
import React from "react";
import { posts } from "@/data/blog";
import { format } from 'date-fns';
export default function BlogStrip() {
  const latest = posts.slice(0, 3);
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold">The Blog</h2>
            <p className="text-muted-foreground">Newest first</p>
          </div>
          <a href="/blog" className="text-primary underline text-sm">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <article key={p.slug} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="text-sm text-muted-foreground">
                {format(new Date(p.date), 'dd/MM/yyyy')} • {p.readingTime}
              </div>
              <p className="mt-2 text-muted-foreground text-sm">{p.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


