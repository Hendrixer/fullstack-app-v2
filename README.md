## Getting Started

You'll need to have a few things

- a Psql DB server running
- create a `.env` file and add the following

```env
DATABASE_URL=""
JWT_SECRET=""
COOKIE_NAME=""
```

You'll need to migrate your DB using prisma
`npx prisma migrate dev`

Now install deps and start the server.

```bash
npm run dev
# or
yarn dev
```
