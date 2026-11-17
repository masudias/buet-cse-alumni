import { createFileRoute, redirect } from "@tanstack/react-router";
// Merged into /networking; kept as a redirect so existing links still work.
export const Route = createFileRoute("/careers")({ beforeLoad: () => { throw redirect({ to: "/networking" }); } });
