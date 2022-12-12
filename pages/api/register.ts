import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { createJWT, hashPassword } from '@/lib/auth'
import { serialize } from 'cookie'

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

    const jwt = await createJWT(user)
    res.setHeader(
      'Set-Cookie',
      serialize(process.env.COOKIE_NAME, jwt, { httpOnly: true, path: '/' })
    )
    res.status(201)
    res.end()
  } else {
    res.status(402)
    res.end()
  }
}
