/**
 * Server Actions を使わず、useState を利用してフォーム処理をおこなう例
 */

'use client'

import { addTodoByClient } from '@/lib/actions'
import { ChangeEvent, FormEvent, useState } from 'react'

export const FormWithServerActions = () => {
  const [name, setName] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Server Actions の関数を呼び出して実行
    // ここではフォームデータではなく useState の値を受け取れる関数を呼び出している
    await addTodoByClient(name)
    setName('')
  }

  return (
    <>
      <p className="mb-2 mt-8">
        client component 内で Server Actions を実行するパターン
        <br />
        useState の値を受け取って Server Actions を実行
      </p>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="mx-2 border p-1"
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          value={name}
        />
        <button
          className="rounded-lg bg-blue-600 px-2 py-1 text-sm text-white"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  )
}
