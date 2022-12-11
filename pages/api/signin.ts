import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { comparePasswords, createJWT } from '@/lib/auth'

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    })

    if (!user) {
      res.status(401)
      res.json({ error: 'Invalid login' })
      return
    }

    const isUser = await comparePasswords(req.body.password, user.password)

    if (isUser) {
      const jwt = createJWT(user)

      res.status(201)
      res.json({ data: { token: jwt } })
    } else {
      res.status(401)
      res.json({ error: 'Invalid login' })
    }
  } else {
    res.status(402)
    res.end()
  }
}
