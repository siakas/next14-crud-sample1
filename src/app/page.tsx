import prisma from '@/lib/prisma'
import Link from 'next/link'

const Home = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo 一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      <ul className="mt-8 space-y-2">
        <li>
          <Link className="text-blue-600 hover:underline" href="/todos">
            Client Component でフォーム処理をおこなうパターン
            <br />
            useState の値を fetch で処理するパターンと、useState の値を Server
            Actions に渡して実行するパターン
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/s-todos">
            Server Component 内で Server Actions を定義して実行するパターン
            <br />
            Server Action はフォームの action 属性に指定
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/a-todos">
            Server Component で外部に定義した Server Actions を呼び出すパターン
            <br />
            Server Action はフォームの action 属性に指定
            <br />
            Delete は Server Actions の bind を利用
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/dh-todos">
            Delete に input:hidden を利用して id を渡すパターン
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/db-todos">
            Button の formAction に Server Actions の関数を渡すパターン
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
