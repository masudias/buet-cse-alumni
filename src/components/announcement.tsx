import type { Announcement } from "@/lib/announcements";
import { ArrowUpRight } from "lucide-react";

export function AnnouncementCard({ post }: { post: Announcement }) {
  return <article className="flex flex-col rounded-lg border bg-card p-6">
    <p className="text-xs font-medium text-accent">{post.label}</p>
    <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
    <div className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">{post.details.map((p) => <p key={p}>{p}</p>)}</div>
    {post.note && <p className="mt-5 text-xs text-muted-foreground">{post.note}</p>}
    {post.url && <a href={post.url} target={post.url.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-sm font-semibold text-accent">{post.action ?? "View source"}<ArrowUpRight size={16} /></a>}
  </article>;
}