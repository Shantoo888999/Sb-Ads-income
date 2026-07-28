# Sb-Ads-Income

This repository is a scaffolded Next.js + NextAuth.js + Prisma + PostgreSQL + TailwindCSS project for an advertising/affiliate platform with four roles: CREATOR, ADMIN, EDITOR, USER.

What's included
- Next.js (App Router) + TypeScript
- NextAuth.js with GitHub + Google providers (placeholders) and Prisma adapter
- Prisma schema and seed script (creates a demo Creator: demo@example.com)
- Role-based page stubs and simple RBAC helpers
- TailwindCSS for basic styling

Quickstart (local)
1. Install dependencies
   npm install

2. Create .env (see .env.example) and set DATABASE_URL and NEXTAUTH_SECRET

3. Run Prisma migrate + generate
   npx prisma migrate dev --name init

4. Seed demo Creator user
   node prisma/seed.ts

5. Start dev server
   npm run dev

Vercel 1‑click deploy
You can deploy this repository to Vercel with the following quick link:

https://vercel.com/new/clone?repository-url=https://github.com/Shantoo888999/Sb-Ads-Income

Important Vercel environment variables (add these in Project Settings -> Environment Variables before deploying if you want the site to work fully):
- DATABASE_URL (required)
- NEXTAUTH_URL (set to your vercel deployed URL, e.g. https://your-project.vercel.app)
- NEXTAUTH_SECRET (generate a long random string)
- GITHUB_ID, GITHUB_SECRET (for GitHub OAuth)
- GOOGLE_ID, GOOGLE_SECRET (for Google OAuth)
- EMAIL_SERVER, EMAIL_FROM (if you plan to use Email provider)

Notes
- For security, do NOT commit real secrets. Use Vercel UI to add secrets.
- OAuth providers require configuring redirect URIs on their platforms -> set callback to: https://<your-deploy-domain>/api/auth/callback/github (or /google)

RBAC
- Roles: CREATOR (full), ADMIN, EDITOR, USER
- The seeded user demo@example.com is CREATOR and can assign roles via the Admin UI (stub).

If you want, I can also add a GitHub Actions workflow, expand the Admin UI, or wire up email signups. Let me know.
