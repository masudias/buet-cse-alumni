import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, Search } from "lucide-react";
import { Section, meta } from "@/components/site";
import { docUrl, meetings } from "@/lib/meetings";

export const Route = createFileRoute("/meetings")({
  head: () => meta("Meeting Records", "Agendas and minutes of the BCA Executive Committee 2026–2028 meetings, available to download."),
  component: Meetings,
});

function Meetings() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const rows = meetings.filter((m) => !term || [m.date, `meeting ${m.no}`, m.summary, ...m.highlights, ...m.docs.map((d) => d.kind)].join(" ").toLowerCase().includes(term));
  return (
    <>
      <section className="border-b bg-editorial">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <p className="eyebrow">Executive Committee 2026–2028</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">BCA meeting records</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Official agendas and minutes of the BUET CSE Alumni Association (BCA) Executive Committee. Click a document to download it.</p>
        </div>
      </section>
      <Section>
        <label className="flex max-w-md items-center gap-3 rounded-md border bg-card px-4 py-3">
          <Search size={18} className="text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by date, topic or document" className="w-full bg-transparent outline-none" aria-label="Search meetings" />
        </label>
        <div className="mt-8 overflow-x-auto rounded-lg border bg-card">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <tr><th className="px-5 py-3">#</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Summary</th><th className="px-5 py-3">Attendance</th><th className="px-5 py-3">Documents</th></tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((m) => (
                <tr key={m.no} className="align-top">
                  <td className="px-5 py-5 font-mono text-accent">{String(m.no).padStart(2, "0")}</td>
                  <td className="whitespace-nowrap px-5 py-5"><p className="font-semibold">{m.date}</p><p className="text-xs text-muted-foreground">{m.mode}</p></td>
                  <td className="px-5 py-5">
                    <p>{m.summary}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-muted-foreground">{m.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-muted-foreground">{m.attendance ?? "—"}</td>
                  <td className="px-5 py-5">
                    <div className="grid gap-2">
                      {m.docs.map((d) => (
                        <a key={d.file} href={docUrl(d.file)} download={d.file} className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border px-3 py-2 font-semibold text-accent hover:border-accent">
                          <Download size={15} />{d.kind} · {d.format}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && <tr><td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">No meetings match “{q}”.</td></tr>}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
