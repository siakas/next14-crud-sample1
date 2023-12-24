import { addTodo } from '@/lib/actions'
import prisma from '@/lib/prisma'

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      {/* actions.ts で定義した Server Actions を action 属性で呼び出し */}
      <p className="mb-2 mt-8">
        actions.ts で定義した Server Actions をフォームの action
        属性で呼び出すパターン
        <br />
        action 属性で呼び出した関数の第一引数にはフォームデータが渡される
      </p>
      <form action={addTodo} className="flex items-center">
        <label htmlFor="name">Name:</label>
        <input className="mx-2 border p-1" name="name" type="text" />
        <button
          className="rounded-lg bg-blue-600 px-2 py-1 text-sm text-white"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default ServerTodosPage
