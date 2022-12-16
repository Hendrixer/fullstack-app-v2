import Card from '@/components/Card'
import Greetings from '@/components/Greetings'

export default function Page() {
  return (
    <div className="flex">
      <div className="p-8 w-[80%]">
        {/* @ts-expect-error Server Component */}
        <input type="text" />
        <Greetings />
      </div>
      <div className="px-8 w-[20%]">
        <Card className=" ">calendar</Card>
      </div>
    </div>
  )
}
