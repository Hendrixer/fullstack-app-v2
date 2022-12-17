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
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full flex flex-col items-stretch justify-center min-h-[content]">
        {/* @ts-expect-error Server Component */}
        <div className="flex-1 grow flex">
          <Greetings />
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <div className="w-1/3 p-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TasksCard />
          </div>
        </div>
      </div>
    </div>
  )
}
