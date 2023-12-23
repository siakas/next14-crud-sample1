import prisma from '@/lib/prisma'

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
    </div>
  )
}

export default Home
