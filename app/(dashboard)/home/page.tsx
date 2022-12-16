import Card from '@/components/Card'
import Greetings from '@/components/Greetings'
import TasksCard from '@/components/TasksCard'

export default function Page() {
  return (
    <div className="flex h-full">
      <div className="pr-6 w-[80%] h-full flex flex-col">
        {/* @ts-expect-error Server Component */}
        <Greetings />
        <div className="flex mt-6 grow">
          <div className="w-1/2">
            <TasksCard />
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <Card className=" ">calendar</Card>
      </div>
    </div>
  )
}
