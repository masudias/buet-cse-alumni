import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/give")({
  head: () => meta("Give", "Support BUET CSE through donations, the alumni picnic fund and the souvenir publication."),
  component: Give,
});

const options = [
  { t: "Donate", d: "Support scholarships, student activities and departmental development.", c: "Donate" },
  { t: "Picnic Fund", d: "Contribute to the annual reunion and picnic for alumni and families.", c: "Contribute" },
  { t: "Souvenir", d: "Order the souvenir publication or place an advertisement.", c: "Order" },
];

function Give() {
  return (
    <>
      <PageHero eyebrow="Give" title="Invest in the department that invested in you." intro="Every contribution strengthens the CSE community — today's students and tomorrow's alumni." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {options.map((o) => (
            <div key={o.t} className="flex flex-col rounded-lg border bg-card p-8">
              <h3 className="text-2xl font-semibold">{o.t}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{o.d}</p>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(o.t)}`} className="mt-6 rounded-md bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">{o.c}</a>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">Online payments coming soon. Until then, buttons open an email to the association.</p>
      </Section>
    </>
  );
}
