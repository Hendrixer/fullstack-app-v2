import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword = (password) => bcrypt.hash(password, 10)
export const comparePasswords = (plainTextPassword, hashedPassword) =>
  bcrypt.comparePasswords(plainTextPassword, hashedPassword)

export const createJWT = (user) => {
  return jwt.sign({ id: user.id }, 'cookies')
}

export const verifyJWT = (jwt) => {
  return jwt.verify(jwt, 'cookies')
}
