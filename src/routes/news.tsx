import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { AnnouncementCard } from "@/components/announcement";
import { pastEvents } from "@/lib/announcements";
import newsCover from "@/assets/news-cover-alumni-gathering.jpg";

export const Route = createFileRoute("/news")({
  head: () => meta("News & Events", "Talks, seminars, short courses and reunions shared with the BUET CSE alumni community."),
  component: News,
});

function News() {
  return (
    <>
      <PageHero tall image={newsCover} imagePosition="object-center" imageAlt="BUET CSE students gathered together at a department celebration" eyebrow="News & Events" title="What's happening across the network" intro="Talks, seminars, courses and reunions shared with BUET CSE alumni." />
      <Section>
        {/* Newspaper-style: two columns, each story keeps its natural height. */}
        <div className="gap-5 md:columns-2">
          {pastEvents.map((e) => (
            <div key={e.title} className="mb-5 break-inside-avoid">
              <AnnouncementCard post={e} when={`${e.date} · ${e.place}`} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
