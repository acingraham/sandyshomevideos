This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Roadmap
1. ~~Have domain point to vercel~~
2. ~~Grid styling~~
3. ~~Clicking preview opens modal~~
4. ~~Modal updates URL so it's shareable~~
5. ~~Switch to using full videos w/ simple thumbnails~~
6. ~~Add proper thumbnails~~
7. ~~Fix autoscroll to top of page when selecting video~~
8. ~~Get user analytics to a good state~~
9. Improve video card look
10. Add content (tags, etc.) to support improved video card look
11. Make design of page for desktop and mobile. Include mocks for modal being open.
12. Check / Improve fuzzy search. Consider maintaining order of items.
13. Improve thumbnail for each video
14. Clean up input element and overall design of page
15. Add preview gif on hover
16. Add preview gif for each video
17. Cloudfront for serving assets
18. Potentially add labels or filtering or sorting. More involved searches I guess.
19. Confirm serving appropriate size assets for different devices
20. Analytics
21. Error handling / reporting
22. Dashboard
23. Tag and clip videos
24. Avoid ad blockers by sending amplitude logs to proxy

## References
- Inspiration for current design: https://plexx.mallinidesign.com/portfolio/youtube-style/?color_scheme=dark-scheme
- Article on avoiding logs getting blocked by ad blockers and such: https://fizzog.io/article/User-Engagement-With-Amplitude-And-NEXT_js