import { updateTodo } from '@/lib/actions'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const CrudTodoEditPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  const updateTodoWithId = updateTodo.bind(null, id)
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  return (
    <div className="m-8">
      <Link href="/crud/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo更新</h1>

      <form action={updateTodoWithId}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="mx-2 border p-1"
            defaultValue={todo?.name}
            name="name"
            type="text"
          />
        </div>
        <div>
          <input
            defaultChecked={todo?.isCompleted === true}
            name="isCompleted"
            type="radio"
            value="true"
          />
          完了
        </div>
        <div>
          <input
            defaultChecked={todo?.isCompleted === false}
            name="isCompleted"
            type="radio"
            value="false"
          />
          未完了
        </div>
        <button
          className="mt-4 rounded-lg bg-blue-600 px-2 py-1 text-sm text-white"
          type="submit"
        >
          データ更新
        </button>
      </form>
    </div>
  )
}

export default CrudTodoEditPage
