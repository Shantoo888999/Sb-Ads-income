import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  if (!session) return <p>Please sign in to view this page.</p>

  // fetch current user to check role
  const user = await prisma.user.findUnique({ where: { email: session.user?.email || undefined } })

  if (!user || (user.role !== 'ADMIN' && user.role !== 'CREATOR')) {
    return <p>Access denied. Admins only.</p>
  }

  const users = await prisma.user.findMany({ take: 50 })

  return (
    <div>
      <h2 className="text-2xl font-semibold">Admin Panel</h2>
      <p className="mt-2">Manage users and roles</p>
      <div className="mt-4 space-y-2">
        {users.map((u) => (
          <div key={u.id} className="p-3 bg-white shadow rounded">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{u.email}</div>
                <div className="text-sm text-gray-500">{u.name}</div>
              </div>
              <div className="text-sm">Role: {u.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
