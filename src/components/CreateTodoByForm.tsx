'use client'

import { SubmitButton } from '@/components/SubmitButton'
import { createTodo } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  errors: {},
  message: '',
}

export const CreateTodoByForm = () => {
  const { pending } = useFormStatus()
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

      {/* useFormStatus を動作させるには別コンポーネント化する必要がある？ */}
      {/* <button
        className={clsx(
          'rounded-lg bg-blue-600 px-2 py-1 text-sm text-white',
          pending ? 'opacity-50' : '',
        )}
        disabled={pending}
        type="submit"
      >
        Add Todo
      </button> */}
      <SubmitButton />
    </form>
  )
}
