import { Module } from '@nestjs/common';
import { PermissionRolesController } from './permission-roles.controller';
import { PermissionRolesService } from './permission-roles.service';
import { PrismaService } from 'src/exchange/services/PrismaService';

@Module({
  controllers: [PermissionRolesController],
  providers: [PermissionRolesService, PrismaService]
})
export class PermissionRolesModule {}
