import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './exchange/services/PrismaService';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaService
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService]
})
export class AppModule {}
