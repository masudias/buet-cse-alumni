import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";
import { events, news } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => meta("News & Events", "Latest announcements, reunions, talks and gatherings from the BUET CSE alumni community."),
  component: News,
});

function News() {
  return (
    <>
      <PageHero eyebrow="News & Events" title="What's happening across the network." intro="Announcements from the association, the department and alumni chapters around the world." />
      <Section eyebrow="Upcoming" title="Events">
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => <Card key={e.title} kicker={e.date} title={e.title} cta="RSVP">{e.place}</Card>)}
        </div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Latest" title="News">
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((n) => <Card key={n.title} kicker={`${n.tag} · ${n.date}`} title={n.title} cta="Read">{n.body}</Card>)}
          </div>
        </Section>
      </section>
    </>
  );
}
