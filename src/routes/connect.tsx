import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/connect")({
  head: () => meta("Connect", "Register for the global alumni network, find a club or regional group, and ask for a referral."),
  component: Connect,
});

const regions = ["Dhaka", "North America — East", "North America — West", "Canada", "United Kingdom & Europe", "Australia & NZ", "Middle East", "East & Southeast Asia"];

function Connect() {
  return (
    <>
      <PageHero eyebrow="Connect" title="Wherever you are, there's a BCA near you." intro="Register with the global alumni network, join a club or regional group, and help each other move forward." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Global Alumni Network" cta="Register">Add yourself to the alumni database and voter list for the 1st BCA Election.</Card>
          <Card title="Find a Club" cta="Explore">Programming, research, entrepreneurship, sports and cultural clubs.</Card>
          <Card title="Regional Groups" cta="Join">Local chapters organizing meetups and family events.</Card>
          <Card title="Ask for a Referral" cta="Request">Reach alumni at companies and universities you're targeting.</Card>
        </div>
      </Section>
      <section className="bg-surface">
        <Section eyebrow="Chapters" title="Regional groups">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r) => <div key={r} className="rounded-lg border bg-card px-5 py-4 font-display">{r}</div>)}
          </div>
        </Section>
      </section>
    </>
  );
}
