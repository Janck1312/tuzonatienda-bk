import { Module } from '@nestjs/common';
import { PermissionRolesController } from './permission-roles.controller';
import { PermissionRolesService } from './permission-roles.service';

@Module({
  controllers: [PermissionRolesController],
  providers: [PermissionRolesService]
})
export class PermissionRolesModule {}
