import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { createJWT, hashPassword } from '@/lib/auth'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
    })

    const jwt = createJWT(user)
    res.status(201)
    res.json({ data: { token: jwt } })
  } else {
    res.status(402)
    res.end()
  }
}
