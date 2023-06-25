This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learnings
1. favicon.ico cannot be placed in public folder. It has to be placed in the `src/app` folder. [Reference](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon)
2. `page.js` cannot be renamed to `index.js`. A page.js file is required to make a route segment publicly accessible. `layout.js` also has to stay in app folder. [Reference](https://nextjs.org/docs/getting-started/project-structure#routing-files)
3. `layout.js` replaces both `_app.js` and `_document.js`. [Reference](https://www.makeuseof.com/create-custom-layout-in-nextjs/)
