import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from 'generated/prisma/client'
import { BcryptService } from 'src/exchange/services/BcryptService';

async function main() {
    const prisma = new PrismaClient({
        adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! }),
    });
    //@ts-ignore
    await prisma.roles.createMany({
        data: [
            { name: 'ADMIN', code: 'ADMIN', description: "Administrator" },
            { name: 'SELLER', code: 'SELLER', description: "Seller" },
            { name: 'USER', code: 'USER', description: "Regular User" },
            { name: 'GUEST', code: 'GUEST', description: "Guest User" },
        ],
    });
    //@ts-ignore
    await prisma.users.create({
        data: {
            firstName : "Admin",
            lastName : "User",
            identification : "123456789",
            email : "admin@example.com",
            bornDate : new Date(),
            phone : { personal:"04247265959" },
            aditionalPermissions: [],
            age: 18,
            password: BcryptService.makeHash("admin123")
        },
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => console.log('Seeding finished.'))
