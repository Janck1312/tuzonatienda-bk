import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/exchange/services/PrismaService';

@Injectable()
export class PermissionRolesService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    /**
     * @param {{rolId:number, permissionIds:number[]}} assignPermissionToRoleDto
    */
    async assignPermissionsToRole(assignPermissionToRoleDto) {
        try {
            await this.prismaService.permissionRoles.deleteMany({
                where: {
                    roleId: assignPermissionToRoleDto.roleId
                }
            });

            return await this.prismaService.permissionRoles.createMany({
                data: assignPermissionToRoleDto.permissionIds.map(permissionId => ({
                    roleId: assignPermissionToRoleDto.roleId,
                    permissionId
                }))
            });
        } catch (error) {
            throw new Error('Error assigning permissions to role');
        }
    }
}
