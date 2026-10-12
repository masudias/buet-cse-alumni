import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";
import { AnnouncementCard } from "@/components/announcement";
import { researchOpenings } from "@/lib/announcements";
import { newtonArticle } from "@/lib/newton-article";
import cover from "@/assets/buet-cse-12.jpg.asset.json";

export const Route = createFileRoute("/research")({
  head: () => meta("Research & Publications", "PhD openings shared by BUET CSE alumni, the BCA R&D proposal, department research and alumni achievements."),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHero image={cover.url} imageAlt="BUET CSE alumni and students holding the champion cheque at the Natural Language Processing Hackathon" eyebrow="Research" title="Ideas that started in Dhaka, shaping the world." intro="PhD openings from alumni faculty, the proposed BCA research agenda, and the department's work." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <a href="https://scholar.google.com/scholar?q=%22Bangladesh+University+of+Engineering+and+Technology%22+computer+science" target="_blank" rel="noopener noreferrer"><Card title="Publications" cta="Browse on Google Scholar">Papers by BUET CSE researchers and alumni.</Card></a>
          <a href="#openings"><Card title="PhD Openings" cta="See openings">Funded positions in alumni-led research groups.</Card></a>
          <Link to="/" hash="pride"><Card title="Awards" cta="See achievements">Contest wins and honours from our students and alumni.</Card></Link>
          <Link to="/stories" hash="rd"><Card title="R&D Initiatives" cta="Read the proposal">Grants, labs and open-source ideas proposed for BCA.</Card></Link>
        </div>
      </Section>
      <section id="openings" className="scroll-mt-24 bg-surface">
        <Section eyebrow="Academic openings" title="PhD & research positions">
          <div className="grid gap-5 md:grid-cols-2">{researchOpenings.map((p) => <AnnouncementCard key={p.title} post={p} />)}</div>
        </Section>
      </section>
      <Section eyebrow="BCA R&D" title={newtonArticle.title}>
        <p className="max-w-3xl text-muted-foreground">{newtonArticle.paragraphs[0]}</p>
        <Link to="/stories" hash="rd" className="mt-6 inline-block font-semibold text-accent underline">Read Newton M A Hakim's full article →</Link>
      </Section>
    </>
  );
}
