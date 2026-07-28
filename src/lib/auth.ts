import { authOptions } from './nextauth'
import { getServerSession } from 'next-auth/next'

export async function getSession(req: Request) {
  // In App Router, use getServerSession with authOptions when on server
  return await getServerSession(authOptions)
}
