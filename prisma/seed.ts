import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from 'generated/prisma/client'

async function main() {
    const prisma = new PrismaClient({
        adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! }),
    });
    
    await prisma.roles.createMany({
        data: [
            { name: 'ADMIN', code: 'ADMIN', description: "Administrator" },
            { name: 'SELLER', code: 'SELLER', description: "Seller" },
            { name: 'USER', code: 'USER', description: "Regular User" },
            { name: 'GUEST', code: 'GUEST', description: "Guest User" },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => console.log('Seeding finished.'))
