This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the
file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback
and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

## Commands

- nextjs
- shadcn
- npx shadcn@2.1.0 add button
- npx shadcn@2.1.0 add
  - avatar, badge, calender, card, chart, checkbox, dialog, drawer, dropdown-menu, form, input,
    label, popover, scroll-area, select, separator, sheet, skeleton, sonner, table, tabs, textarea
  - do you want to override button.tsx? Yes
- fix errors between nextjs and shadcn (npm run build)
- rm -rf .next/ (to remove all cache)
- logoipsum (website for placeholder logos)
- npm install react-icons

## Git

- git checkout -b feature/add-shadcn-components
- git push origin feature/add-shadcn-components

## Notes

- Export default for pages and layouts
- Most stable branch (Oct 21 at 1:00PM)

## Test

- 1:34:20

## Prisma

- npm i prisma --save-dev
- npx prisma init --datasource-provider sqlite

## Hono

- npm install hono

```ts
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

// /api/hello
app.get('/hello', c => {
  return c.json({ hello: 'world' });
});

// /api/project/123
app.get('project/:projectId', c => {
  return c.json({ project: 'projectId' });
});

export const GET = handle(app);
```
