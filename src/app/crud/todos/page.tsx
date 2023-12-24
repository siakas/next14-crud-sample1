import { DeleteByBind } from '@/components/DeleteByBind'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const CrudTodosPage = async () => {
  // DB から todo データを取得
  const todos = await prisma.todo.findMany()

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <div className="my-3">
        <Link
          className="rounded-lg bg-blue-600 p-2 text-sm text-white"
          href="/crud/todos/create"
        >
          新規追加
        </Link>
      </div>
      <ul className="mt-8 space-y-1">
        {todos.map((todo) => (
          <li className="flex items-center gap-2" key={todo.id}>
            <span>{todo.name}</span>
            <Link
              className="rounded-lg bg-cyan-600 px-2 py-1 text-sm text-white"
              href={`/crud/todos/${todo.id}`}
            >
              詳細
            </Link>
            <Link
              className="rounded-lg bg-cyan-600 px-2 py-1 text-sm text-white"
              href={`/crud/todos/${todo.id}/edit`}
            >
              更新
            </Link>
            <DeleteByBind id={todo.id} />
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          className="rounded-lg bg-blue-600 p-3 text-base text-white"
          href="/"
        >
          トップに戻る
        </Link>
      </div>
    </div>
  )
}

export default CrudTodosPage
