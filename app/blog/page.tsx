"use client";
import React, { useMemo, useState } from "react";
import { posts } from "@/data/blog";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);

  const topics = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.topics.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = posts.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.summary.toLowerCase().includes(query.toLowerCase());
    const matchesTopic = !topic || p.topics.includes(topic);
    return matchesQuery && matchesTopic;
  });

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl font-bold">The Blog</h1>
          <p className="mt-2 text-muted-foreground">Handpicked insights from the pensieve</p>
        </header>

        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center mb-6">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              className={`px-3 py-1 rounded-md border ${!topic ? 'bg-accent' : 'bg-background'} border-border text-sm`}
              onClick={() => setTopic(null)}
            >
              All
            </button>
            {topics.map((t) => (
              <button
                key={t}
                className={`px-3 py-1 rounded-md border ${topic === t ? 'bg-accent' : 'bg-background'} border-border text-sm`}
                onClick={() => setTopic(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article key={p.slug} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <div className="text-sm text-muted-foreground">{new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} • {p.readingTime}</div>
              <p className="mt-2 text-muted-foreground">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-muted rounded-md">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}


