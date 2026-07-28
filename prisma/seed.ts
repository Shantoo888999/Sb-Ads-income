import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: 'demo@example.com' } })
  if (existing) {
    console.log('Demo user already exists:', existing.email)
    return
  }

  const user = await prisma.user.create({
    data: {
      name: 'Demo Creator',
      email: 'demo@example.com',
      role: 'CREATOR'
    }
  })

  console.log('Created demo creator:', user.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
