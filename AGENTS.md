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
- Community owns chapters, volunteering and partnerships; Careers owns jobs, mentoring and benefits; Research owns academic openings. Keep /volunteer as a redirect to /connect to preserve existing links.
- Import user-provided media through Lovable Assets pointers; retain a square raster favicon in public because browser icons require a directly served file.
- Do not treat sample directory rows as verified alumni; replace them only after reading the supplied source lists and validating batch mappings.
- Keep the uploaded alumni and representative datasets separate, preserving source HSC batch values and missing representatives, because the spreadsheets have different coverage; never infer contact or professional details.
- Meeting agendas/minutes live as static files in public/meetings with metadata in src/lib/meetings.ts, so they download directly from the site and stay in the repository.
- Only ship pages and buttons that lead to a working destination; remove inactive sections instead of showing placeholders.
