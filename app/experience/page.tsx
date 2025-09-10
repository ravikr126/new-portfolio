"use client";
import React from "react";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Experience
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A selection of roles and impact across companies and products.
          </p>
        </header>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <article key={idx} className="rounded-xl border border-border bg-card">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-semibold">{exp.role}</h2>
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      {exp.location ? <span> • {exp.location}</span> : null}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.start} — {exp.end}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs bg-muted rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {exp.link && (
                  <div className="mt-4">
                    <a className="text-sm text-primary underline" href={exp.link} target="_blank" rel="noreferrer">
                      Company Link
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}


