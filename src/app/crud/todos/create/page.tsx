import { CreateTodoByForm } from '@/components/CreateTodoByForm'
import Link from 'next/link'

const CreatePage = async () => {
  return (
    <div className="m-8">
      <Link href="/crud/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo追加</h1>
      <CreateTodoByForm />
    </div>
  )
}

export default CreatePage
