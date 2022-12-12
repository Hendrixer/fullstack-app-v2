import bcrypt from 'bcrypt'
import { SignJWT } from 'jose'

export const hashPassword = (password) => bcrypt.hash(password, 10)
export const comparePasswords = (plainTextPassword, hashedPassword) =>
  bcrypt.compare(plainTextPassword, hashedPassword)

export const createJWT = (user) => {
  // return jwt.sign({ id: user.id }, 'cookies')
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + 60 * 60 * 6

  return new SignJWT({ payload: user })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET))
}
