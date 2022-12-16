// import { cookies } from 'next/headers'
// import { db } from '@/lib/db'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'
import Button from './Button'
import Card from './Card'
import img from '@/assets/images/marketing-manager.png'
import Image from 'next/image'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  return user
}

const Greetings = async () => {
  const user = await getData()

  return (
    <Card className="w-full py-12 relative">
      <div className="mb-8">
        <h1 className="text-5xl text-gray-700 font-bold mb-4">
          Hello, {user.firstName}!
        </h1>
        <h4 className="text-xl text-gray-400">
          Check your daily tasks and schedule
        </h4>
      </div>
      <div>
        <Button size="large">Today's Schedule</Button>
      </div>
      <div className="absolute top-[-100px] right-0">
        <Image src={img} alt="busy person on computer" className="w-96 " />
      </div>
    </Card>
  )
}

export default Greetings
