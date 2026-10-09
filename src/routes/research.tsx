import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => meta("Research & Publications", "Alumni research, publications, projects, awards and grants from the BUET CSE community."),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHero eyebrow="Research" title="Ideas that started in Dhaka, shaping the world." intro="A showcase of alumni research, open projects and recognition — and ways to collaborate with the department." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Publications" cta="Browse">Papers and books authored by BUET CSE alumni.</Card>
          <Card title="Projects" cta="Explore">Open-source, startup and research projects seeking collaborators.</Card>
          <Card title="Awards" cta="See honorees">Celebrating alumni recognized for their achievements.</Card>
          <Card title="Grants" cta="Learn more">Alumni-funded grants supporting students and young faculty.</Card>
        </div>
      </Section>
    </>
  );
}
