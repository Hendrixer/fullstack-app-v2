// import { cookies } from 'next/headers'
// import { db } from '@/lib/db'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  return user
}

const Greetings = async () => {
  const user = await getData()

  return <div>{user.firstName}</div>
}

export default Greetings
