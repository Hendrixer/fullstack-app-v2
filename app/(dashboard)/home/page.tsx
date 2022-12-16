import Card from '@/components/Card'
import Greetings from '@/components/Greetings'
import ProjectCard from '@/components/ProejctCard'
import TasksCard from '@/components/TasksCard'
import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  const projects = await db.project.findMany({
    where: {
      ownerId: user.id,
    },
    include: {
      tasks: true,
    },
  })

  return { projects }
}

export default async function Page() {
  const { projects } = await getData()

  return (
    <div className="flex h-full">
      <div className="pr-6 w-[80%] h-full flex flex-col">
        {/* @ts-expect-error Server Component */}
        <Greetings />
        <div className="flex items-center flex-wrap mt-3 -m-3">
          {projects.map((project) => (
            <div className="w-1/3 p-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {/* <div className="flex mt-6 grow">
          <div className="w-1/2">
            <TasksCard />
          </div>
        </div> */}
      </div>
      <div className="w-[20%]">
        <Card className=" ">calendar</Card>
      </div>
    </div>
  )
}
