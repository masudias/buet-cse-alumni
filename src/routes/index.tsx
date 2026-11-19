import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/cse-buet-2.jpg.asset.json";
const hero = heroAsset.url;
import { Card, Section, meta } from "@/components/site";
import { REGISTER_URL, alumniEmail } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => meta("Home", "The official home of BUET CSE alumni worldwide — directory, news, careers and community of BCA."),
  component: Index,
});

const actions = [
  { title: "Join Global Alumni Network", cta: "Register", d: "Stay connected with fellow alumni and contribute your information to the global network.", url: REGISTER_URL },
  { title: "Ask for a Referral", cta: "Request a referral", d: "Ask the association to connect you with a fellow alumnus in industry or academia.", url: alumniEmail("Request for a fellow alumni referral") },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="BUET CSE students and alumni gathered in a lecture hall" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-scrim" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-20">
          <p className="eyebrow">Est. 2026 · Dhaka 1000</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            Welcome to your <span className="text-primary">community</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">The BUET CSE Alumni Association (BCA) connects graduates across generations and continents — and back to the department that shaped us.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">About BCA</Link>
            <Link to="/networking" className="rounded-md border border-ink-foreground/25 px-6 py-3 font-semibold hover:border-primary hover:text-primary">Join the network</Link>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-6">
            {[["34+", "Graduated batches"], ["17", "Executive committee"], ["5", "Continents"]].map(([n, l]) => (
              <div key={l}><dt className="font-display text-3xl font-semibold text-primary">{n}</dt><dd className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-foreground/60">{l}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <Section eyebrow="What we do" title="Built for a lifetime of connection">
        <p className="mb-8 max-w-3xl text-lg text-muted-foreground">Whether you graduated last year or decades ago, there's a place for you here and someone ready to help.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {actions.map((a) => (
            <a key={a.title} className="grid" href={a.url} target={a.url.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer"><Card title={a.title} cta={a.cta}>{a.d}</Card></a>
          ))}
        </div>
      </Section>

      <Section title="Membership">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6"><h3 className="text-xl font-semibold">Regular members</h3><p className="mt-2 text-muted-foreground">All Bachelor, Masters and Doctoral graduates of CSE, BUET are eligible, subject to accepting the terms and paying the membership fee.</p></div>
          <div className="rounded-lg border bg-card p-6"><h3 className="text-xl font-semibold">Honorary members</h3><p className="mt-2 text-muted-foreground">Past and present full-time CSE faculty, and individuals recognized by the Executive Committee. No fee, no voting rights.</p></div>
        </div>
      </Section>

      <Section eyebrow="Message from the Head" title="A vibrant, sustainable alumni association">
        <blockquote className="max-w-3xl border-l-2 border-accent pl-6 text-lg text-muted-foreground">
          "I sincerely request all alumni of the department to extend their cooperation and support to the interim committee. Your active engagement will be vital in shaping a vibrant and sustainable alumni association that reflects the pride, unity, and excellence of the BUET CSE community."
          <footer className="mt-4 font-mono text-sm text-foreground">— Dr. Tanzima Hashem, Professor & Head, CSE, BUET · <a href="https://cse.buet.ac.bd/alumni" target="_blank" rel="noopener noreferrer" className="text-accent underline">Read the original message</a></footer>
        </blockquote>
      </Section>
    </>
  );
}
