import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { PrismaService } from 'src/exchange/services/PrismaService';

@Module({
    controllers: [StoreController],
    providers: [StoreService, PrismaService],
})
export class StoreModule {}
