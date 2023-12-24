import prisma from '@/lib/prisma'
import Link from 'next/link'

const CrudTodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  return (
    <div className="m-8">
      <Link href="/crud/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo詳細</h1>
      <div>Todo ID: {todo?.id}</div>
      <div>名前: {todo?.name}</div>
      <div>
        完了: {todo?.isCompleted ? <span>完了</span> : <span>未完了</span>}
      </div>
    </div>
  )
}

export default CrudTodoDetailPage
