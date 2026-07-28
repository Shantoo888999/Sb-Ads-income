import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

export default async function CreatorPage() {
  const session = await getServerSession(authOptions)
  if (!session) return <p>Please sign in to view this page.</p>

  const user = await prisma.user.findUnique({ where: { email: session.user?.email || undefined } })
  if (!user || user.role !== 'CREATOR') return <p>Access denied. Creator only.</p>

  return (
    <div>
      <h2 className="text-2xl font-semibold">Creator / Owner Panel</h2>
      <p className="mt-2">Full access — assign Admin / Editor roles to staff (stub).</p>
    </div>
  )
}
