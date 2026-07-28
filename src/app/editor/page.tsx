import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

export default async function EditorPage() {
  const session = await getServerSession(authOptions)
  if (!session) return <p>Please sign in to view this page.</p>

  const user = await prisma.user.findUnique({ where: { email: session.user?.email || undefined } })
  if (!user || (user.role !== 'EDITOR' && user.role !== 'CREATOR' && user.role !== 'ADMIN')) {
    return <p>Access denied. Editors only.</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">Editor Panel</h2>
      <p className="mt-2">Edit promos, numbers, special offers (stub UI)</p>
    </div>
  )
}
