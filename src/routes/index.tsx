import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/cse-buet-2.jpg.asset.json";
import icpc from "@/assets/buet-cse-3.jpg.asset.json";
import olympiad from "@/assets/buet-cse-4.jpeg.asset.json";
import trophy from "@/assets/buet-cse-5.jpg.asset.json";
import motto from "@/assets/buet-cse-8.png.asset.json";
const hero = heroAsset.url;
const gallery = [
  [icpc.url, "BUET CSE team at an international programming contest", "On the world stage"],
  [olympiad.url, "Students holding a Blockchain Olympiad award", "Blockchain Olympiad winners"],
  [trophy.url, "Programming contest team celebrating with a trophy", "Champions at home"],
  [motto.url, "We Create, We Simulate, We Emulate", "We create, we simulate"],
] as const;
import { Card, Section, meta } from "@/components/site";
import { pastEvents } from "@/lib/announcements";

export const Route = createFileRoute("/")({
  head: () => meta("Home", "The official home of BUET CSE alumni worldwide — directory, news, careers, mentoring, stories and ways to give back."),
  component: Index,
});

const pillars = [
  { to: "/directory", k: "01", t: "Member Directory", d: "Find classmates batch by batch, from 1986 onward." },
  { to: "/careers", k: "02", t: "Careers & Mentoring", d: "Jobs, referrals, RA/TA and PhD openings, alumni mentors." },
  { to: "/connect", k: "03", t: "Global Network", d: "Regional groups, clubs and chapters across five continents." },
  { to: "/give", k: "04", t: "Give Back", d: "Donate, fund the picnic, or order the souvenir." },
] as const;

function Index() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="BUET CSE students and alumni gathered in a lecture hall" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-fade" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-20">
          <p className="eyebrow">Est. 2026 · Dhaka 1000</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            Once CSE, <span className="text-primary">always</span> CSE.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">The BUET CSE Alumni Association connects graduates across generations and continents — and back to the department that shaped us.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/connect" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Join the network</Link>
            <Link to="/about" className="rounded-md border border-ink-foreground/25 px-6 py-3 font-semibold hover:border-primary hover:text-primary">About BCA</Link>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-6">
            {[["34+", "Graduated batches"], ["11", "Interim committee"], ["5", "Continents"]].map(([n, l]) => (
              <div key={l}><dt className="font-display text-3xl font-semibold text-primary">{n}</dt><dd className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-foreground/60">{l}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <Section eyebrow="What we do" title="Built for a lifetime of connection">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link key={p.to} to={p.to}><Card kicker={p.k} title={p.t} cta="Explore">{p.d}</Card></Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pride of CSE" title="Our students and alumni, winning together">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map(([src, alt, cap]) => (
            <figure key={cap} className="overflow-hidden rounded-lg border bg-card">
              <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-4 font-display font-semibold">{cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <section className="bg-surface">
        <Section eyebrow="Latest" title="News & Events">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="grid gap-5 lg:col-span-2 md:grid-cols-2">
              {pastEvents.slice(0, 2).map((n) => (
                <Card key={n.title} kicker={n.date} title={n.title}>{n.details[0]}</Card>
              ))}
            </div>
            <div className="rounded-lg bg-ink p-6 text-ink-foreground">
              <p className="eyebrow">Upcoming</p>
              <ul className="mt-4 divide-y divide-ink-foreground/10">
                {pastEvents.slice(2).map((e) => (
                  <li key={e.title} className="py-4">
                    <p className="font-mono text-xs text-primary">{e.date}</p>
                    <p className="mt-1 font-display font-semibold">{e.title}</p>
                    <p className="text-sm text-ink-foreground/60">{e.place}</p>
                  </li>
                ))}
              </ul>
              <Link to="/news" className="mt-2 inline-block font-mono text-xs uppercase tracking-widest text-primary">All events →</Link>
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <div className="grid items-center gap-10 rounded-xl bg-ink p-10 text-ink-foreground md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow">1st BCA Election 2026</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Help build the voter list and alumni database.</h2>
          </div>
          <div>
            <p className="text-ink-foreground/70">Representatives from every graduated batch are collecting alumni information. Submit yours so you can vote and stay connected.</p>
            <Link to="/about" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Find your batch rep</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
