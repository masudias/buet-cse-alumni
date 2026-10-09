import { createFileRoute } from "@tanstack/react-router";
import { Card, MembersOnly, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/careers")({
  head: () => meta("Career Opportunities", "Alumni mentoring, professional development, job postings and university RA, TA and PhD openings."),
  component: Careers,
});

const jobs = [
  { k: "Industry · Remote", t: "Senior Backend Engineer", d: "Shared by Batch 2006 · Fintech" },
  { k: "Industry · Dhaka", t: "ML Engineer", d: "Shared by Batch 2010 · AI startup" },
  { k: "Industry · Toronto", t: "Software Engineer II", d: "Shared by Batch 2003 · Big tech" },
];

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Grow your career with 30+ years of alumni behind you." intro="Mentoring, professional development and opportunities shared by the people who've been there." />
      <Section eyebrow="Benefits" title="For every stage of your career">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Alumni Mentoring" cta="Find a mentor">One-on-one guidance from alumni in industry and academia.</Card>
          <Card title="Professional Development" cta="See workshops">Talks, bootcamps and training run by alumni experts.</Card>
          <Card title="Share a Job" cta="Post a job">Hiring? Post openings directly to the alumni community.</Card>
        </div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Job board" title="Recent postings">
          <div className="grid gap-5 md:grid-cols-3">{jobs.map((j) => <Card key={j.t} kicker={j.k} title={j.t} cta="View">{j.d}</Card>)}</div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">Sample postings shown for preview.</p>
        </Section>
      </section>
      <Section eyebrow="Academia" title="University opportunities">
        <MembersOnly>Research assistant, teaching assistant and PhD student openings shared by alumni faculty worldwide are available to signed-in members.</MembersOnly>
      </Section>
    </>
  );
}
