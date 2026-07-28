import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      {session ? (
        <div className="mt-4">
          <p>Signed in as: {session.user?.email}</p>
          <p>Role: {/* role is stored in DB; fetching full user would require DB call */} (check Admin)</p>
        </div>
      ) : (
        <p className="mt-4">You are not signed in. Use OAuth to sign in.</p>
      )}
    </div>
  )
}
