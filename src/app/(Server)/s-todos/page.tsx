import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany()

  // form の action 属性に設定する関数
  // action に設定する関数に use server がないとエラーになる
  const addTodo = async (data: FormData) => {
    'use server'
    console.log('click') // ブラウザではなくターミナルに 'click' が表示される（＝サーバ側で処理されている）

    // 関数の第一引数にはフォームデータが含まれる
    const name = data.get('name') as string
    await prisma.todo.create({ data: { name } })

    // キャッシュしたデータを破棄して、引数で指定したパスをブラウザ上に表示
    revalidatePath('/s-todos')
  }

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      {/* Server Components でのフォーム処理実装 */}
      <p className="mb-2 mt-8">
        Server Component 内に `use server` を記述して関数を定義するパターン
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
