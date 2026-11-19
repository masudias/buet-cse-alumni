import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { committee, electionCommission, executiveCommittee, objectives } from "@/lib/site";

// Headshots cropped from the official Executive Committee and Election Commission posters, named by slugified name.
const photos = import.meta.glob<string>("../assets/{committee,election}/*.jpg", { eager: true, import: "default" });
const slug = (name: string) => name.toLowerCase().replace(/\./g, "").trim().replace(/\s+/g, "-");
const committeePhoto = (name: string) => photos[`../assets/committee/${slug(name)}.jpg`];
const electionPhoto = (name: string) => photos[`../assets/election/${slug(name)}.jpg`];

export const Route = createFileRoute("/about")({
  head: () => meta("About Us", "Mission, constitution, Executive Committee 2026–2028, interim committee and batch representatives of the BUET CSE Alumni Association."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About BCA" title="Every batch, one community, since 1986." intro="From the first graduating class to the newest, discover what BCA stands for, how it works and who leads it." />
      <section className="bg-surface">
        <Section title="Our objectives">
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
      <Section title="Constitution">
        <div className="flex flex-col gap-6 rounded-lg border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-muted-foreground">BCA is governed by its constitution, adopted at the AGM held on January 17, 2026. It sets out the association's objectives, membership and the Executive Committee.</p>
          <a href="https://cse.buet.ac.bd/alumni/constitution" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">Read the constitution ↗</a>
        </div>
      </Section>
      <Section eyebrow="Executive Committee 2026–2028" title="Your elected BCA leadership">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {executiveCommittee.map(([role, name]) => {
            const photo = committeePhoto(name);
            return (
              <div key={name} className="flex items-center gap-4 rounded-lg border bg-card p-5">
                {photo && <img src={photo} alt={`Portrait of ${name}`} width={96} height={96} loading="lazy" className="size-20 shrink-0 rounded-md border object-cover md:size-24" />}
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">{role}</p>
                  <p className="mt-2 font-display text-lg font-semibold">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="2026 Election Commission" title="Election Commissioners of 2026">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {electionCommission.map(([role, name, affiliation, hsc]) => {
              const photo = electionPhoto(name);
              return (
                <div key={name} className="flex items-center gap-4 rounded-lg border bg-card p-5">
                  {photo && <img src={photo} alt={`Portrait of ${name}`} width={96} height={96} loading="lazy" className="size-20 shrink-0 rounded-md border object-cover md:size-24" />}
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">{role}</p>
                    <p className="mt-2 font-display text-lg font-semibold">{name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{affiliation}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">HSC {hsc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </section>
      <Section eyebrow="Past interim committee" title="The people who did the groundwork">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map(([n, r]) => (
            <div key={n} className="rounded-lg border bg-card p-5"><p className="font-display font-semibold">{n}</p><p className="mt-1 text-sm text-muted-foreground">{r}</p></div>
          ))}
        </div>
      </Section>
    </>
  );
}
