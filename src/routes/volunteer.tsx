import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/volunteer")({
  head: () => meta("Volunteer", "Give your time through workshops, community programs and campus arts & history initiatives."),
  component: Volunteer,
});

function Volunteer() {
  return (
    <>
      <PageHero eyebrow="Volunteer" title="Give your time. Shape the next generation." intro="Share your expertise with students, serve the community, and help preserve the story of CSE at BUET." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Workshops" cta="Lead a session">Teach a workshop on your field — from systems to startups.</Card>
          <Card title="Community Programs" cta="Get involved">Outreach, coding camps and social welfare initiatives.</Card>
          <Card title="Campus Arts & History" cta="Contribute">Archive photos, stories and memorabilia from the department's history.</Card>
        </div>
      </Section>
    </>
  );
}
