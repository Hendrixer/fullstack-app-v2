import Card from '@/components/Card'
import Greetings from '@/components/Greetings'

export default function Page() {
  return (
    <div className="flex justify-between w-full pl-8">
      <div className="py-8">
        <Card>
          {/* @ts-expect-error Server Component */}
          <Greetings />
        </Card>
      </div>
      <Card>calendar</Card>
    </div>
  )
}
