import { Global, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super({ adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! }) });
    }
    
    async onModuleInit() {
        await this.$connect();
    }
}