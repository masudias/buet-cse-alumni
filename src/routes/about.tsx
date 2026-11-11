import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { batchReps, committee, executiveCommittee, objectives, CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us", "Mission, constitution, Executive Committee 2026–2028, interim committee and batch representatives of the BUET CSE Alumni Association."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About BCA" title="Fellowship, support and advancement of our alma mater." intro="The BUET CSE Alumni Association (BCA) was established by the alumni of the CSE Department of BUET. Its constitution was adopted at the AGM held on January 17, 2026." />
      <Section eyebrow="Message from the Head" title="A vibrant, sustainable alumni association">
        <blockquote className="max-w-3xl border-l-2 border-accent pl-6 text-lg text-muted-foreground">
          "I sincerely request all alumni of the department to extend their cooperation and support to the interim committee. Your active engagement will be vital in shaping a vibrant and sustainable alumni association that reflects the pride, unity, and excellence of the BUET CSE community."
          <footer className="mt-4 font-mono text-sm text-foreground">— Dr. Tanzima Hashem, Professor & Head, CSE, BUET · <a href="https://cse.buet.ac.bd/alumni" target="_blank" rel="noopener noreferrer" className="text-accent underline">Read the original message</a></footer>
        </blockquote>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Article II" title="Our objectives">
          <ol className="grid gap-4 md:grid-cols-2">
            {objectives.map((o, i) => (
              <li key={o} className="flex gap-4 rounded-lg border bg-card p-5">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{o}</span>
              </li>
            ))}
          </ol>
        </Section>
      </section>
      <Section eyebrow="Article III" title="Membership">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6"><h3 className="text-xl font-semibold">Regular members</h3><p className="mt-2 text-muted-foreground">All Bachelor, Masters and Doctoral graduates of CSE, BUET are eligible, subject to accepting the terms and paying the membership fee.</p></div>
          <div className="rounded-lg border bg-card p-6"><h3 className="text-xl font-semibold">Honorary members</h3><p className="mt-2 text-muted-foreground">Past and present full-time CSE faculty, and individuals recognized by the Executive Committee. No fee, no voting rights.</p></div>
        </div>
      </Section>
      <Section eyebrow="Executive Committee 2026–2028" title="Your elected BCA leadership">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {executiveCommittee.map(([role, name]) => (
            <div key={name} className="rounded-lg border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{role}</p>
              <p className="mt-2 font-display text-lg font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Interim committee" title="The people who did the groundwork">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {committee.map(([n, r]) => (
              <div key={n} className="rounded-lg border bg-card p-5"><p className="font-display font-semibold">{n}</p><p className="mt-1 text-sm text-muted-foreground">{r}</p></div>
            ))}
          </div>
        </Section>
      </section>
      <Section eyebrow="Batch representatives" title="One representative from every graduated batch">
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {batchReps.map(([y, n]) => (
            <div key={y} className="flex items-baseline gap-3 bg-card px-4 py-3"><span className="font-mono text-sm text-accent">{y}</span><span className="text-sm">{n}</span></div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">Questions? Email <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </Section>
    </>
  );
}
