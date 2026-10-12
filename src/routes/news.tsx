import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { AnnouncementCard } from "@/components/announcement";
import { pastEvents } from "@/lib/announcements";

export const Route = createFileRoute("/news")({
  head: () => meta("News & Events", "Talks, seminars, short courses and reunions shared with the BUET CSE alumni community."),
  component: News,
});

function News() {
  return (
    <>
      <PageHero eyebrow="News & Events" title="What's happening across the network." intro="Talks, seminars, courses and reunions shared with BUET CSE alumni." />
      <Section eyebrow="Recent" title="Events">
        <div className="grid gap-5 md:grid-cols-2">
          {pastEvents.map((e) => (
            <div key={e.title}>
              <p className="mb-2 font-mono text-xs text-accent">{e.date} · {e.place}</p>
              <AnnouncementCard post={e} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
