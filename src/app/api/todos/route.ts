/**
 * /api/todos の API エンドポイント
 */

export const POST = async (request: Request) => {
  const { name } = await request.json()
  await prisma.todo.create({ data: { name } })

  return Response.json({ message: 'success' })
}
