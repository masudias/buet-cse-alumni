import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";
import { alumniEmail } from "@/lib/site";
import cover from "@/assets/networking-cover-batch-stairs.jpg";

export const Route = createFileRoute("/networking")({
  head: () => meta("Networking", "Alumni mentoring and job sharing for BUET CSE alumni across every batch."),
  component: Networking,
});

const careerActions = [
  { title: "Alumni Mentoring", cta: "Request a mentor", d: "Ask for guidance from alumni in industry and academia.", url: alumniEmail("Request for alumni mentoring") },
  { title: "Share a Job", cta: "Email an opening", d: "Send a role and application link to the association.", url: alumniEmail("Share a job opportunity with BUET CSE alumni") },
];

function Networking() {
  return (
    <>
      <PageHero tall image={cover} imagePosition="object-center" imageAlt="A BUET CSE batch gathered together on a campus staircase" eyebrow="Networking" title="Old friends, new opportunities." intro="Mentoring and job leads that keep BUET CSE alumni connected across every batch and continent." />
      <Section eyebrow="Careers & mentoring" title="Help each other grow">
        <div className="grid gap-5 md:grid-cols-2">
          {careerActions.map((a) => (
            <a key={a.title} className="grid" href={a.url}><Card title={a.title} cta={a.cta}>{a.d}</Card></a>
          ))}
        </div>
      </Section>
    </>
  );
}
