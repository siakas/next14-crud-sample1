import { deleteTodo } from '@/lib/actions'

export const DeleteByBind = ({ id }: { id: number }) => {
  // bind を利用することで Server Actions の関数の第一引数に bind の第二引数で指定した値を渡すことができる
  const deleteTodoWithId = deleteTodo.bind(null, id)

  return (
    <form action={deleteTodoWithId}>
      <button className="rounded-lg bg-red-500 px-2 py-1 text-sm text-white">
        削除
      </button>
    </form>
  )
}
