import { FC } from 'react'
import { Prisma } from '@prisma/client'

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: { tasks: true },
})

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>

const ProjectCard: FC<{ project: ProjectWithTasks }> = ({ project }) => {
  const completedCount = project.tasks.filter(
    (t) => t.status === 'COMPLETED'
  ).length
  const progress = Math.ceil((completedCount / project.tasks.length) * 100)

  return (
    <div>
      <div>
        <span>{project.name}</span>
      </div>
      <div>
        <span>{progress}%</span>
      </div>
    </div>
  )
}

export default ProjectCard
