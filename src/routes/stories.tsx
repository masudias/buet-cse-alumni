import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/stories")({
  head: () => meta("Stories", "Blogs, travel writing, reunion memories and magazines from BUET CSE alumni."),
  component: Stories,
});

const cats = [
  { t: "Blogs", d: "Essays and reflections on tech, research and life after BUET." },
  { t: "Travel", d: "Alumni journeys from Dhaka to Silicon Valley, Sydney and beyond." },
  { t: "Reunions", d: "Photos and memories from batch reunions and picnics." },
  { t: "Magazines", d: "Souvenir publications and the BCA annual magazine." },
];
const posts = [
  { k: "Reunions · Batch 1995", t: "Thirty years later, back at the ECE building" },
  { k: "Blogs · Batch 2008", t: "What competitive programming taught me about engineering leadership" },
  { k: "Travel · Batch 2012", t: "A PhD across three continents" },
];

function Stories() {
  return (
    <>
      <PageHero eyebrow="Stories" title="Our people, in their own words." intro="Share a blog post, travel story or reunion memory with the community." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{cats.map((c) => <Card key={c.t} title={c.t} cta="Browse">{c.d}</Card>)}</div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Featured" title="Recent stories">
          <div className="grid gap-5 md:grid-cols-3">{posts.map((p) => <Card key={p.t} kicker={p.k} title={p.t} cta="Read" />)}</div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">Sample stories shown for preview.</p>
        </Section>
      </section>
    </>
  );
}
