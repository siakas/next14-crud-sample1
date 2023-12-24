/**
 * Server Actions を別ファイルとして定義するパターン
 * この場合はファイルの先頭に 'use server' を記述する
 */

'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const addTodo = async (data: FormData) => {
  // 関数の第一引数にはフォームデータが含まれる
  const name = data.get('name') as string
  await prisma.todo.create({ data: { name } })

  // キャッシュしたデータを破棄して、引数で指定したパスをブラウザ上に表示
  revalidatePath('/a-todos')
}

// client component から利用する Server Actions の例
// Forn の action 属性からの値ではなく、useState の値を受け取るため引数の型を string とする
export const addTodoByClient = async (name: string) => {
  await prisma.todo.create({ data: { name } })

  // キャッシュしたデータを破棄して、引数で指定したパスをブラウザ上に表示
  revalidatePath('/todos')
}

// id 直接受け取って Todo を削除
export const deleteTodo = async (id: number) => {
  // console.log('delete')

  // 引数で受け取った id の todo を削除
  await prisma.todo.delete({
    where: {
      id,
    },
  })
  revalidatePath('/todos')
}

// フォームデータから id を受け取って Todo を削除
export const deleteTodoByForm = async (data: FormData) => {
  // フォームで受け取ったデータから id を取得
  const id = data.get('id') as string

  // 取得した ID を数値型に変換して指定
  await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  })
  revalidatePath('/dh-todos')
}
