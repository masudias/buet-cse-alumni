import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { newtonArticle } from "@/lib/newton-article";
import { alumniEmail } from "@/lib/site";
import cover from "@/assets/buet-cse-11.jpg.asset.json";

export const Route = createFileRoute("/stories")({
  head: () => meta("Stories", "Essays and reunion stories from the BUET CSE alumni community, including Newton M A Hakim's BCA R&D article."),
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageHero image={cover.url} imageAlt="BUET CSE alumni photographed in front of the department sign" eyebrow="Stories" title="Our people, in their own words." intro="Essays, ideas and reunion memories from the BUET CSE community." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <a href="#rd" className="rounded-lg border bg-card p-6 transition hover:border-accent"><p className="eyebrow">Chapter one · Essay</p><h3 className="mt-2 text-xl font-semibold">{newtonArticle.title}</h3><p className="mt-2 text-sm text-muted-foreground">by {newtonArticle.author}</p></a>
          <a href="https://buetalumni.co.uk" target="_blank" rel="noopener noreferrer" className="rounded-lg border bg-card p-6 transition hover:border-accent"><p className="eyebrow">Chapter two · Reunion</p><h3 className="mt-2 text-xl font-semibold">BUET Reunion UK 2026</h3><p className="mt-2 text-sm text-muted-foreground">Alumni and families gathered at Sindlesham Court, Wokingham →</p></a>
          <a href={alumniEmail("Story submission for the BCA website")} className="rounded-lg border border-dashed bg-surface p-6 transition hover:border-accent"><p className="eyebrow">Your chapter</p><h3 className="mt-2 text-xl font-semibold">Share your story</h3><p className="mt-2 text-sm text-muted-foreground">Email a blog, travel story or reunion memory →</p></a>
        </div>
      </Section>
      <section id="rd" className="scroll-mt-24 bg-surface">
        <article lang="bn" className="mx-auto max-w-3xl px-5 py-16">
          <p className="eyebrow">Essay · BCA R&D</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{newtonArticle.title}</h2>
          <p className="mt-3 text-muted-foreground">{newtonArticle.author}</p>
          <div className="mt-10 space-y-5 text-lg leading-loose first-letter:text-5xl">
            {newtonArticle.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Link to="/research" className="mt-10 inline-block font-semibold text-accent underline">Explore research openings →</Link>
        </article>
      </section>
    </>
  );
}
