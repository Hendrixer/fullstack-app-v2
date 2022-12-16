import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import Button from './Button'
import Card from './Card'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  const tasks = await db.task.findMany({
    where: {
      ownerId: user.id,
      status: 'NOT_STARTED',
    },
    take: 5,
    orderBy: {
      due: 'asc',
    },
  })

  return tasks
}
const TasksCard = async () => {
  const tasks = await getData()

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl">My Tasks</span>
        </div>
        <div>
          <Button intent="text" className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      <div>
        {tasks && tasks.length ? <div>tasks here</div> : <div>no tasks</div>}
      </div>
    </Card>
  )
}

export default TasksCard
