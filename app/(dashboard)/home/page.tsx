import Greetings from '@/components/Greetings'
import GreetingsSkeleton from '@/components/GreetingsSkeleton'
import ProjectCard from '@/components/ProejctCard'
import TasksCard from '@/components/TasksCard'
import { delay } from '@/lib/async'
import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

const getData = async () => {
  await delay(2000)
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
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <Greetings />
          </Suspense>
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
            {/* @ts-expect-error Server Component */}
            <TasksCard />
          </div>
        </div>
      </div>
    </div>
  )
}
