'use client'

import { createTodo } from '@/lib/actions'
import { useFormState } from 'react-dom'

const initialState = {
  errors: {},
  message: '',
}

export const CreateTodoByForm = () => {
  const [state, formAction] = useFormState(createTodo, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input className="mx-2 border p-1" name="name" type="text" />

      {/* createTodo の try/catch 内で投げられたエラーを表示 */}
      {state.message && (
        <div className="my-2 font-bold text-red-600">{state.message}</div>
      )}

      {/* Zod によるバリデーションのエラーメッセージを表示 */}
      {state.errors?.name &&
        state.errors.name.map((error: string) => (
          <div className="my-2 font-bold text-red-600" key={error}>
            {error}
          </div>
        ))}

      <button
        className="rounded-lg bg-blue-600 px-2 py-1 text-sm text-white"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  )
}
