# Smile Suite — Project Status

## Core Info
- **Project path:** `~/Desktop/N0DE-Website-Builder/clients/smile-suite/`
- **Live review URL:** `https://smile-suite-swart.vercel.app`
- **Vercel project:** `smile-suite`
- **Vercel project ID:** `prj_YtFue88Vzj0Waiw3pvCjtMIg4uh7`
- **Vercel org ID:** `team_CYcn2PgG1ST9LsacQ0aBc3rc`
- **GitHub repo:** `https://github.com/N0DEHQ/smile-suite`
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Deploy model:** direct local deploys to Vercel, GitHub repo exists for backup/versioning but Vercel review flow is still being driven from local deploys

## Current State
The Smile Suite site has been actively polished with real office photography, hero upgrades, responsive image tuning, and About / Contact / Technology layout cleanup. Current working review alias is the swart Vercel URL above.

## What Is Live Now

### 1) Hero and readability fixes
- About page hero uses a soft motion video loop with poster fallback.
- Contact and About hero text-card readability issues were fixed by replacing the non-working `bg-[#f8f4ee]/96` utility with the stable theme token `bg-cream`.
- Durable lesson: for critical text-over-image or text-over-video readability, use stable theme utilities instead of fragile arbitrary opacity color classes unless verified in build output.

### 2) Services and Technology hero photo upgrades
- **Services hero** now uses `public/images/photos/services-hero-implant.jpg`
- **Technology hero** now uses `public/images/photos/technology-hero-tools.jpg`
- Both were rebuilt into full photo heroes with softened overlays and cream content cards for readability.

### 3) Responsive photo polish pass
A sitewide polish pass was completed for desktop + mobile image behavior:
- added explicit `sizes` to fill-based images
- tuned `object-position` values on key sections
- improved hero and section crops so mobile framing feels more intentional
- adjusted About / Contact / Technology photo behavior for cleaner composition

### 4) Technology page card photo updates
Current notable Technology image placements:
- **Digital X-Rays** → `public/images/photos/digital-xray-monitor.jpg`
- **Intraoral Cameras** → `public/images/photos/patient-chair.jpg`

### 5) Contact page photo strip updates
The Contact page office strip was refreshed and now uses:
- `public/images/photos/contact-tooth-model.jpg`
- `public/images/photos/contact-xray-film.jpg`
- `public/images/photos/sterile-tray.jpg`

That replaced older uses of the front-desk and exam-room photos in that strip.

### 6) About page layout cleanup
The About page got several rounds of cleanup:
- fixed the old desktop composition in the `A Midland Family` / `Thoughtful Details` section
- made the left column cards feel more balanced and intentional
- removed the separate **Inside the Suite** section
- moved **The Team** section upward into that slot
- replaced the earlier blurry accent image with a sharper office/reception image
- rebalanced the Personal Side section so the right-side image stack reads as a cleaner two-row collage instead of an awkward offset image block

## Current About Page Personal Side Composition
The current right-side image stack uses:
- `public/images/photos/dr-patient-lobby.jpg`
- `public/images/photos/about-front-desk-office.jpg`

The left side remains the two-card story block:
- `A Midland Family`
- `Thoughtful Details`

## Key Files Touched During This Polish Cycle
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/services/page.tsx`
- `src/app/technology/page.tsx`
- `src/components/Hero.tsx`

## Deployment Workflow (Current Reality)
This project is currently being deployed directly from the local working tree to Vercel.

### Build check
```bash
cd ~/Desktop/N0DE-Website-Builder/clients/smile-suite
npm run build
```

### Production deploy
```bash
mv .git .git_backup && npx vercel --prod --force --yes && mv .git_backup .git
```

### Post-deploy verification
```bash
test -d .git && echo git-restored || echo git-missing
```

## Important Notes
- The live working alias used during review is `https://smile-suite-swart.vercel.app`
- The project is linked to Vercel locally via `.vercel/project.json`
- Recent work has favored swapping in sharper source photography over trying to upscale soft images
- For this project, image quality improvements usually come from better source choice + better footprint sizing, not just CSS crop tweaks

## Helpful Implementation Lessons
- Prefer real source swaps over trying to rescue soft/blurry assets with layout alone
- Explicit `sizes` matter for crisp responsive image rendering
- `object-position` tuning is worth doing page by page on a photo-heavy site
- Stable theme tokens are safer than arbitrary opacity color utilities when readability is critical

## Suggested Next Steps
- Do one final full-page visual QA pass on desktop + mobile for About / Contact / Technology
- Decide whether to keep using direct Vercel deploys or reconnect a clean GitHub-based deploy path later
- Update any remaining stale generic docs in this folder if needed
