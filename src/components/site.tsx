import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { NAV, CONTACT_EMAIL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink-foreground/10 bg-ink/90 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">BCA</span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold">BUET CSE Alumni</span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-foreground/60">Association</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="rounded px-3 py-2 text-sm text-ink-foreground/75 transition hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/portal" className="px-3 py-2 text-sm text-ink-foreground/80 hover:text-primary">Member Portal</Link>
          <Link to="/give" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Give</Link>
        </div>
        <button className="font-mono text-xs uppercase tracking-widest lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-ink-foreground/10 px-5 py-4 lg:hidden">
          {[...NAV, { to: "/portal", label: "Member Portal" }, { to: "/give", label: "Give" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-ink-foreground/85">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold">BUET CSE Alumni Association</p>
          <p className="mt-3 max-w-md text-sm text-ink-foreground/60">Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology, Dhaka 1000.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block font-mono text-sm text-primary">{CONTACT_EMAIL}</a>
        </div>
        <div className="grid gap-2 text-sm text-ink-foreground/70">
          {NAV.slice(0, 4).map((n) => <Link key={n.to} to={n.to} className="hover:text-primary">{n.label}</Link>)}
        </div>
        <div className="grid gap-2 text-sm text-ink-foreground/70">
          {NAV.slice(4).map((n) => <Link key={n.to} to={n.to} className="hover:text-primary">{n.label}</Link>)}
          <Link to="/give" className="hover:text-primary">Give</Link>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-5 py-6 text-center font-mono text-xs text-ink-foreground/40">© {new Date().getFullYear()} BUET CSE Alumni Association</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute inset-0 bg-glow" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-foreground/70">{intro}</p>
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 md:py-20 ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="mt-3 mb-10 text-3xl font-semibold md:text-4xl">{title}</h2>}
      {children}
    </section>
  );
}

export function Card({ kicker, title, children, cta }: { kicker?: string; title: string; children?: ReactNode; cta?: string }) {
  return (
    <div className="group flex flex-col rounded-lg border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
      {kicker && <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{kicker}</p>}
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      {children && <div className="mt-3 flex-1 text-sm text-muted-foreground">{children}</div>}
      {cta && <span className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">{cta} →</span>}
    </div>
  );
}

export function MembersOnly({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-accent bg-surface p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Members only</p>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
      <Link to="/portal" className="mt-4 inline-block rounded-md bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground">Go to Member Portal</Link>
    </div>
  );
}

export function meta(title: string, description: string) {
  const t = `${title} — BUET CSE Alumni Association`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
