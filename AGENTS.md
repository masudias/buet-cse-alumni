<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep supplied public announcements in browser-safe content modules, separate from page layouts, so facts and source links remain consistent across pages.
- Networking (the merged Community + Careers page) owns mentoring and job sharing; Research owns academic openings. Keep /connect, /careers and /volunteer as redirects to /networking to preserve existing links.
- Executive Committee headshots live in src/assets/committee as <slugified-name>.jpg and are matched to names in src/lib/site.ts; a member without a file simply shows no photo.
- Lovable-hosted images (/__l5e/...) are not in the repo; vite.config.ts proxies them to the published site for local dev only.
- Import user-provided media through Lovable Assets pointers; retain a square raster favicon in public because browser icons require a directly served file.
- Do not treat sample directory rows as verified alumni; replace them only after reading the supplied source lists and validating batch mappings.
- Keep the uploaded alumni and representative datasets separate, preserving source HSC batch values and missing representatives, because the spreadsheets have different coverage; never infer contact or professional details.
- Meeting agendas/minutes live as static files in public/meetings with metadata in src/lib/meetings.ts, so they download directly from the site and stay in the repository.
- Only ship pages and buttons that lead to a working destination; remove inactive sections instead of showing placeholders.
