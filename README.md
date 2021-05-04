This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

you can check your [web](http://localhost:3000).

## Build and Deploy

start the production server:

```bash
npm run build
pm2 start npm --name "next" -- start
```

By nginx & docker, this is running in [here](https://chloekim.me).
