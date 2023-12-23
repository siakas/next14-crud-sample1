/**
 * Server Actions を使わず、useState を利用してフォーム処理をおこなう例
 */

'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

export const Form = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('/api/todos', {
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    setName('')
    router.push('/todos')
  }

  return (
    <form className="mt-4 flex items-center" onSubmit={handleSubmit}>
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
  )
}
