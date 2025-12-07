# 🚀 Deployment Guide for Vercel

## Quick Deploy Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Add dynamic landing page with backend features"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables (see below)

### 3. Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Database (Required)
DATABASE_URL="postgresql://..."

# Clerk Authentication (Required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Instagram/Meta API (Optional - for automations)
INSTAGRAM_CLIENT_ID="your_client_id"
INSTAGRAM_CLIENT_SECRET="your_client_secret"
INSTAGRAM_REDIRECT_URI="https://yourdomain.com/callback/instagram"

# AI Services (Optional - for AI responses)
OPENAI_API_KEY="sk-..."
GOOGLE_GENERATIVE_AI_API_KEY="..."

# Stripe (Optional - for payments)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# App URLs
NEXT_PUBLIC_SITE_URL="https://yourdomain.vercel.app"
NEXT_PUBLIC_APP_URL="https://yourdomain.vercel.app"
```

### 4. Database Setup

#### Option A: Vercel Postgres (Recommended)

```bash
# In Vercel Dashboard:
1. Go to Storage → Create Database
2. Select Postgres
3. Copy the DATABASE_URL
4. Add to Environment Variables
```

#### Option B: External PostgreSQL

Use any of these providers:

- **Supabase** (Free tier: 500MB)
- **Railway** (Free tier: 500MB)
- **Neon** (Free tier: 3GB)
- **ElephantSQL** (Free tier: 20MB)

### 5. Run Database Migrations

After first deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run migrations
vercel env pull .env.local
bunx prisma db push

# Seed database (one-time)
bunx tsx prisma/seed.ts
```

Or use Vercel Dashboard:

1. Go to Settings → Functions
2. Add Build Command: `prisma db push && next build`

### 6. Build Settings

Vercel should auto-detect these, but verify:

```
Framework Preset: Next.js
Build Command: bun run build
Output Directory: .next
Install Command: bun install
Development Command: bun run dev
```

### 7. Deploy

Click "Deploy" - Vercel will:

- Install dependencies
- Generate Prisma Client
- Build Next.js app
- Deploy to edge network

## Post-Deployment

### Seed Database

After first deploy, seed the database:

```bash
# Local
bunx tsx prisma/seed.ts

# Or via Vercel CLI
vercel exec bunx tsx prisma/seed.ts
```

This adds:

- 3 pricing plans (Free, Pro, Enterprise)
- 8 FAQ items
- 6 testimonials

### Verify Landing Page

Visit your site - you should see:

- ✅ Hero section with CTA
- ✅ Stats section (50K users, 10M+ messages)
- ✅ Benefits grid (8 items)
- ✅ Dynamic pricing with monthly/yearly toggle
- ✅ Testimonials (6 reviews)
- ✅ FAQ accordion (8 questions)
- ✅ Newsletter subscription form
- ✅ Contact form (3 cards + form)
- ✅ CTA section with gradient
- ✅ Footer with links

### Test Features

#### Newsletter Subscription

1. Enter email in newsletter form
2. Should see success toast
3. Check database: `bunx prisma studio`
4. Newsletter table should have entry

#### Contact Form

1. Fill out contact form
2. Submit message
3. Check ContactForm table in Prisma Studio
4. Status should be "PENDING"

## Production Checklist

### Performance

- [ ] Enable Edge Runtime for API routes
- [ ] Add image optimization (already using next/image)
- [ ] Configure CDN for static assets
- [ ] Enable compression

### SEO

- [ ] Add metadata to pages
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (Schema.org)

### Security

- [ ] Add rate limiting (use Vercel Edge Config)
- [ ] Implement CSRF protection
- [ ] Add captcha to forms (hCaptcha/Turnstile)
- [ ] Set up CORS properly

### Monitoring

- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Configure uptime monitoring
- [ ] Add performance monitoring

### Email Integration

Add email service for:

- Newsletter confirmations
- Contact form notifications
- User welcome emails

Recommended services:

- **Resend** (Free: 3k emails/month)
- **SendGrid** (Free: 100 emails/day)
- **Mailgun** (Free: 5k emails/3 months)

Example with Resend:

```bash
bun add resend
```

```typescript
// app/api/send-email/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  await resend.emails.send({
    from: "Slide <onboarding@yourdomain.com>",
    to: email,
    subject: "Welcome to Slide!",
    html: "<p>Thanks for subscribing!</p>",
  });

  return Response.json({ success: true });
}
```

### Database Backups

Vercel Postgres includes automatic backups. For external providers:

**Supabase:**

- Auto backups daily (paid plans)
- Manual export: Dashboard → Database → Backups

**Railway:**

- Auto backups on Pro plan
- Manual: `pg_dump` via CLI

**Neon:**

- Point-in-time recovery (free)
- Branch for testing

## Troubleshooting

### Build Fails

```bash
# Check logs
vercel logs

# Common issues:
# 1. Missing DATABASE_URL
#    → Add in Environment Variables
# 2. Prisma generate fails
#    → Check prisma/schema.prisma syntax
# 3. TypeScript errors
#    → Run `bunx tsc --noEmit` locally
```

### Database Connection Fails

```bash
# Test connection locally
bunx prisma db pull

# If fails:
# 1. Check DATABASE_URL format
# 2. Verify database is running
# 3. Check firewall/IP whitelist
```

### Server Actions Not Working

```bash
# Ensure:
# 1. 'use server' at top of action files
# 2. Functions are async
# 3. Returning serializable data
```

### Forms Not Submitting

```bash
# Check:
# 1. Toast provider in layout
# 2. Browser console for errors
# 3. Network tab for failed requests
```

## Scaling

### As Traffic Grows

1. **Database**: Upgrade to connection pooling (PgBouncer)
2. **Caching**: Add Redis for frequently accessed data
3. **CDN**: Use Vercel Edge Network (auto-enabled)
4. **API**: Rate limit with Upstash Redis
5. **Images**: Optimize with next/image (auto-enabled)

### Monitor Costs

- Vercel: Free tier → 100GB bandwidth/month
- Database: Monitor connection count
- Edge Functions: Track invocations

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Deployment Issues**: Check Vercel Logs
- **Database Issues**: Use Prisma Studio

## Next Steps

1. **Custom Domain**: Add in Vercel → Settings → Domains
2. **Analytics**: Enable Vercel Analytics
3. **A/B Testing**: Use Vercel Edge Config
4. **API Keys**: Rotate regularly for security
5. **Monitoring**: Set up alerts for errors

---

**Deployment Time**: ~5 minutes (first deploy)
**Build Time**: ~2 minutes (subsequent deploys)

🎉 **Your Slide landing page is production-ready!**
