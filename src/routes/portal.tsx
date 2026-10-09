import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/portal")({
  head: () => meta("Member Portal", "Sign in to your BCA account to manage your profile, access the full directory and members-only opportunities."),
  component: Portal,
});

function Portal() {
  return (
    <>
      <PageHero eyebrow="Member Portal" title="Your BCA account." intro="Members get a personal account page, association email updates, the full directory, and members-only academic opportunities." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <p className="mt-2 text-sm text-muted-foreground">Member accounts are launching soon.</p>
            <div className="mt-6 grid gap-3">
              <input disabled placeholder="Email" className="rounded-md border bg-surface px-4 py-3" />
              <input disabled type="password" placeholder="Password" className="rounded-md border bg-surface px-4 py-3" />
              <button disabled className="rounded-md bg-ink px-4 py-3 font-semibold text-ink-foreground opacity-60">Coming soon</button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Card title="Personal profile">Photo, batch, contact and professional details.</Card>
            <Card title="Association email">News, election notices and event invitations.</Card>
            <Card title="Full directory">Emails and profiles of fellow alumni.</Card>
            <Card title="Academic openings">RA, TA and PhD positions from alumni faculty.</Card>
          </div>
        </div>
      </Section>
    </>
  );
}
