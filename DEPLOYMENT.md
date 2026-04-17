# Smile Suite Website — Deployment Notes

## Current Live Alias
- `https://smile-suite-swart.vercel.app`

## Local Project
- Path: `~/Desktop/N0DE-Website-Builder/clients/smile-suite/`
- Vercel project name: `smile-suite`
- Project ID: `prj_YtFue88Vzj0Waiw3pvCjtMIg4uh7`
- Org ID: `team_CYcn2PgG1ST9LsacQ0aBc3rc`
- GitHub repo: `https://github.com/N0DEHQ/smile-suite`

## Current Deployment Workflow
This project is currently deployed straight from the local working tree.

### 1) Build locally first
```bash
cd ~/Desktop/N0DE-Website-Builder/clients/smile-suite
npm run build
```

### 2) Deploy to production
```bash
mv .git .git_backup && npx vercel --prod --force --yes && mv .git_backup .git
```

### 3) Confirm `.git` was restored
```bash
test -d .git && echo git-restored || echo git-missing
```

## Why this workflow is being used
- The active review flow has been using direct Vercel deploys.
- A GitHub repo now exists for source backup/versioning, but there is still no GitHub auto-deploy path being relied on right now.
- The swart alias is the working review URL Joshua has been using.

## Notes
- Build verification has repeatedly passed with `npm run build` during the latest polish cycle.
- Recent releases included photo swaps, About page layout cleanup, Contact strip swaps, and Technology card image updates.
- If the deploy flow changes later, update this file so it stays aligned with reality.
