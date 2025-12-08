# Quick Start Guide 🚀

## ⚡ NEW: Backend-Powered Landing Page!

Your landing page now has a complete backend with:

- 💰 **Dynamic Pricing** from database (monthly/yearly toggle)
- 📧 **Newsletter Subscriptions** with validation
- 📬 **Contact Form** with status tracking
- 💬 **Testimonials** system with ratings
- ❓ **FAQ** management with categories
- 📊 **Stats & Benefits** sections

**Setup in 3 commands:**

```bash
bun install
bun run db:push     # Setup database
bun run db:seed     # Add initial data
bun run dev         # Start server
```

See [UPDATE_SUMMARY.md](./UPDATE_SUMMARY.md) for complete details!

---

## Instant Demo Access

No setup required! Just run the dev server and explore:

```bash
bun dev
```

Then visit: **http://localhost:3000**

## 🗺️ Site Navigation

### Public Pages

- **/** - Homepage with hero, features grid, and pricing
- **/features** - Detailed showcase of all 12+ features
- **/setup** - Step-by-step Meta App configuration guide

### Demo Dashboard (No Login Required)

- **/dashboard** - Main dashboard with all 17 components
- **/sign-in** - Placeholder sign-in (links to dashboard)
- **/sign-up** - Placeholder sign-up (links to dashboard)

## 🎨 What You'll See

### Dashboard Sections (Scroll to Explore)

1. **Header** - Welcome message
2. **Metrics** - 4 KPI cards (DMs, Comments, Runs, Conversion Rate)
3. **Analytics** - 7-day charts + conversion funnel + 4 stat cards
4. **Audience** - Demographics, interests, segments (3 tabs)
5. **Notifications** - Activity feed with 7 notifications (all/unread/read tabs)
6. **Conversations & Keywords** - Side-by-side DM list and keyword tracker
7. **Automation Builder** - Create new automation workflows
8. **Automations List** - Manage existing automations (4 examples)
9. **Content Planner** - Schedule posts (3 tabs: scheduled/published/ideas)
10. **Hashtag Research** - Trending tags + performance (3 tabs)
11. **Influencer Outreach** - Database of 6 influencers + 3 campaigns
12. **Competitor Analysis** - 3 competitors + industry benchmarks
13. **Smart AI** - AI conversation examples with confidence scores
14. **System Health** - 5 service status monitors
15. **Webhooks** - Instagram event logs with JSON payloads
16. **Pricing** - 3-tier pricing showcase

## ⚡ Quick Commands

```bash
# Development
bun dev              # Start dev server (localhost:3000)

# Production
bun run build        # Build for production
bun start            # Run production build

# Database (when connecting real DB)
bunx prisma generate # Generate Prisma client
bunx prisma migrate dev # Run migrations
bunx prisma studio   # Open Prisma Studio
```

## 🎯 Demo Features

### Interactive Elements

- ✅ Click "Play/Pause" on automations
- ✅ Toggle AI mode in automation builder
- ✅ Switch tabs in all tabbed components
- ✅ Search hashtags and influencers
- ✅ Mark notifications as read
- ✅ Copy hashtag sets to clipboard
- ✅ View JSON payloads in webhooks
- ✅ Filter notifications (all/unread/read)

### All Data is Mock

- No database required
- No API calls needed
- Everything renders instantly
- Perfect for demos and testing

## 📱 Responsive Design

All components are mobile-friendly:

- Grid layouts adapt to screen size
- Tabs work on mobile
- Cards stack vertically on small screens
- Touch-friendly buttons and interactions

## 🎨 Customization

All components use Tailwind classes and can be easily customized:

- Colors: Update `tailwind.config.ts`
- Components: Edit files in `src/components/global/`
- Mock data: Update `src/lib/mock-data.ts`
- Layout: Modify `src/app/(protected)/dashboard/page.tsx`

## 🔧 Troubleshooting

**Build errors?**

```bash
bun install          # Reinstall dependencies
rm -rf .next         # Clear Next.js cache
bun run build        # Rebuild
```

**Port already in use?**

```bash
# Change port in package.json or run:
bun dev -- -p 3001
```

**TypeScript errors?**

```bash
bunx tsc --noEmit    # Check types
```

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Set environment variables (optional for demo):
   - `DATABASE_URL=postgresql://dummy`
   - `STRIPE_CLIENT_SECRET=sk_test_dummy`
4. Deploy! ✨

No other config needed - everything works out of the box!

## 📚 Learn More

- See `FEATURES.md` for complete feature list
- See `README.md` for full documentation
- See `/setup` page for Instagram API setup guide

---

**Ready to explore?** Run `bun dev` and visit http://localhost:3000/dashboard 🎉
