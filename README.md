# Nottingham Clean Co (Dynamic Next.js Portfolio Project)

Production-style full-stack cleaning business website built with **Next.js App Router**, **Prisma**, and **SQLite**.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM + SQLite
- Route Handlers + Server Actions

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy env file:

```bash
cp .env.example .env
```

3. Generate Prisma client and sync schema:

```bash
npm run prisma:generate
npm run prisma:push
```

4. Start development server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

- `DATABASE_URL` - SQLite connection string (`file:./dev.db`)
- `ADMIN_PASSWORD` - basic password for `/admin`

## Database Migration Notes

For local iteration you can use:

```bash
npm run prisma:migrate -- --name init
```

Or push schema quickly:

```bash
npm run prisma:push
```

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import in Vercel.
3. Configure environment variables (`DATABASE_URL`, `ADMIN_PASSWORD`).
4. Build command: `npm run build`
5. Install command: `npm install`

> Note: SQLite is suitable for local demos/portfolio. For production, move to managed Postgres.
