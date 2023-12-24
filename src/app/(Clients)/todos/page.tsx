import { Form } from '@/components/Form'
import { FormWithServerActions } from '@/components/FormWithServerActions'
import prisma from '@/lib/prisma'

const TodoPage = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      {/* Server Actions を使わずにフォーム処理をおこなうコンポーネント */}
      {/* <Form /> コンポーネントは Client Component */}
      <Form />

      {/* Client Component 内で Server Actions を実行するコンポーネント */}
      <FormWithServerActions />
    </div>
  )
}

export default TodoPage
