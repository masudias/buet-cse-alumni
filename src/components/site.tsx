import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { NAV, CONTACT_EMAIL } from "@/lib/site";
import logo from "@/assets/logo3.png.asset.json";
import campus from "@/assets/buet-ece.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-card text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="block h-11 w-11 shrink-0 overflow-hidden"><img src={logo.url} alt="BUET department emblem" className="h-11 w-auto max-w-none" /></span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold">BUET CSE Alumni</span>
            <span className="block text-xs text-accent">Association</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="rounded px-2 py-2 text-sm text-muted-foreground transition hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Link to="/portal" className="px-2 py-2 text-sm text-muted-foreground hover:text-primary">Member Portal</Link>
          <Link to="/give" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Give</Link>
        </div>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t px-5 py-4 xl:hidden">
          {[...NAV, { to: "/portal", label: "Member Portal" }, { to: "/give", label: "Give" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground">{n.label}</Link>
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
          <a href="https://cse.buet.ac.bd/" target="_blank" rel="noopener noreferrer" className="mb-6 inline-block max-w-full rounded bg-card p-2"><img src={logo.url} alt="Department of Computer Science and Engineering, BUET" width={579} height={80} className="w-96 max-w-full" /></a>
          <p className="font-display text-2xl font-semibold">BUET CSE Alumni Association</p>
          <p className="mt-3 max-w-md text-sm text-ink-foreground/60">Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology, Dhaka 1000.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block break-all text-sm text-hero-accent">{CONTACT_EMAIL}</a>
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

export function PageHero({ eyebrow, title, intro, image, imageAlt, imagePosition = "object-top" }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; imagePosition?: string }) {
  const alt = imageAlt ?? (image ? "Cover photo" : "BUET ECE building");
  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-ink text-ink-foreground md:min-h-[420px]">
      <img src={image ?? campus.url} alt={alt} className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`} />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-5 pt-24 md:pb-6 md:pt-28">
        <div className="max-w-3xl rounded-lg border border-border bg-surface/85 p-4 shadow-lg backdrop-blur-md md:p-5">
          <p className="eyebrow text-hero-accent">{eyebrow}</p>
          <div className="mt-1 grid gap-x-8 gap-y-2 md:grid-cols-[auto_minmax(0,1fr)] md:items-baseline">
            <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
            <p className="text-sm text-ink-foreground/70 md:text-base">{intro}</p>
          </div>
        </div>
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
