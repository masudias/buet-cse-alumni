import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MembersOnly, PageHero, Section, meta } from "@/components/site";
import { batchReps, sampleMembers } from "@/lib/site";

export const Route = createFileRoute("/directory")({
  head: () => meta("Member Directory", "Find BUET CSE alumni by batch, name, organization and location."),
  component: Directory,
});

function Directory() {
  const [q, setQ] = useState("");
  const [batch, setBatch] = useState<number | null>(null);
  const list = useMemo(
    () => sampleMembers.filter((m) => (!batch || m.batch === batch) && `${m.name} ${m.org} ${m.city} ${m.role}`.toLowerCase().includes(q.toLowerCase())),
    [q, batch],
  );
  return (
    <>
      <PageHero eyebrow="Directory" title="Every batch. One network." intro="Browse alumni batch by batch with professional information. Full profiles, photos and email addresses are visible to signed-in members." />
      <Section>
        <div className="flex flex-col gap-4 md:flex-row">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, company, city…" maxLength={100} className="flex-1 rounded-md border bg-card px-4 py-3 outline-none focus:border-accent" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button onClick={() => setBatch(null)} className={`rounded-full border px-3 py-1 font-mono text-xs ${batch === null ? "border-ink bg-ink text-ink-foreground" : "bg-card"}`}>All</button>
          {batchReps.map(([y]) => (
            <button key={y} onClick={() => setBatch(y)} className={`rounded-full border px-3 py-1 font-mono text-xs ${batch === y ? "border-ink bg-ink text-ink-foreground" : "bg-card hover:border-accent"}`}>{y}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((m) => (
            <div key={m.name} className="flex gap-4 rounded-lg border bg-card p-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink font-display font-semibold text-primary">{m.name.split(" ").map((p) => p[0]).join("")}</div>
              <div>
                <p className="font-display font-semibold">{m.name}</p>
                <p className="text-sm">{m.role}, {m.org}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">Batch {m.batch} · {m.city}</p>
              </div>
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No alumni match these filters yet.</p>}
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">Sample profiles shown for preview.</p>
        <div className="mt-10"><MembersOnly>Sign in to see email addresses, photos and full professional profiles, and to update your own entry.</MembersOnly></div>
      </Section>
    </>
  );
}
