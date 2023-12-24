import { createTodo } from '@/lib/actions'
import Link from 'next/link'

const CreatePage = () => {
  return (
    <div className="m-8">
      <Link href="/crud/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo追加</h1>
      <form action={createTodo}>
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

export default CreatePage
