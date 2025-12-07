This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Environment variables

Copy `.env.example` to `.env` (local) and set the values in Vercel → Project Settings → Environment Variables:

| Variable                                                                                                                                       | Purpose                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_HOST_URL`                                                                                                                         | Public origin for callbacks; auto-falls back to `https://${VERCEL_URL}` if unset. |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`                                                                | Clerk authentication and webhooks.                                                |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Optional Clerk routes for redirects.                                              |
| `DATABASE_URL`                                                                                                                                 | Postgres connection string.                                                       |
| `STRIPE_CLIENT_SECRET`, `STRIPE_SUBSCRIPTION_PRICE_ID`                                                                                         | Stripe billing.                                                                   |
| `INSTAGRAM_BASE_URL`, `INSTAGRAM_TOKEN_URL`, `INSTAGRAM_CLIENT_ID`, `INSTAGRAM_CLIENT_SECRET`, `INSTAGRAM_EMBEDDED_OAUTH_URL`                  | Instagram Graph API + OAuth.                                                      |
| `OPEN_AI_KEY`, `GEMINI_AI_KEY`, `OPENROUTER_API_KEY`                                                                                           | AI provider keys (OpenAI, Gemini, OpenRouter).                                    |

## Database & Prisma

- Create a Postgres database (Vercel Postgres, Supabase, RDS, etc.).
- Enable the `pgcrypto` extension once so `gen_random_uuid()` works:
  ```sql
  CREATE EXTENSION IF NOT EXISTS pgcrypto;
  ```
- Run migrations before the first deploy: `bun run migrate:deploy` (uses `prisma migrate deploy`).

## Deploy on Vercel

1. Push the repo to GitHub and import it into Vercel. Vercel reads `vercel.json` and uses Bun because `bun.lockb` is present.
2. Add the environment variables listed above. Custom domains should set `NEXT_PUBLIC_HOST_URL`; otherwise the app will fall back to `VERCEL_URL` at runtime for redirects.
3. Ensure migrations have been applied to the target database (`bun run migrate:deploy`).
4. Deploy. Build uses `bun run build`; `postinstall` runs `prisma generate`.
5. Configure external callbacks (Clerk webhooks, Instagram webhook/redirect URLs, Stripe webhooks) to point at your Vercel domain.

If you change environment variables, redeploy to apply them.

## AI providers

- OpenAI: set `OPEN_AI_KEY`.
- Gemini: set `GEMINI_AI_KEY`.
- OpenRouter: set `OPENROUTER_API_KEY`; client helper lives at `src/lib/openrouter.ts` with `baseURL` `https://openrouter.ai/api/v1`.

  - Example usage:

    ```ts
    import { getOpenRouterClient } from "@/lib/openrouter";

    const client = getOpenRouterClient();
    const res = await client.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct",
      messages: [{ role: "user", content: "Hello!" }],
    });
    console.log(res.choices[0]?.message?.content);
    ```
