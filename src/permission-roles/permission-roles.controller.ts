import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PermissionRolesService } from './permission-roles.service'

@Controller('permission-roles')
export class PermissionRolesController {
    
    constructor(private readonly permissionRolesService: PermissionRolesService) {}
    @Post('assign')
    assignPermissionsToRole(@Body() assignPermissionToRoleDto) {
        return this.permissionRolesService.assignPermissionsToRole(
            assignPermissionToRoleDto,
        );
    }

    @Get('by-role/:roleId')
    getByRoleId(@Param("roleId") roleId: number) {
        return this.permissionRolesService.getByRoleId(roleId);
    }

    @Get('by-permission/:permissionId')
    getByPermissionId(@Param("permissionId") permissionId: number) {
        return this.permissionRolesService.getByPermissionId(permissionId);
    }
}
