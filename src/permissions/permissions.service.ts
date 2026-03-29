import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/exchange/services/PrismaService'
import { PaginationService } from 'src/exchange/services/PaginationService'

@Injectable()
export class PermissionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createPermissionDto) {
        try {
            return await this.prismaService.permissions.create({
                data: createPermissionDto,
            })
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async update(id: number, updatePermissionDto) {
        try {
            return await this.prismaService.permissions.update({
                where: { id },
                data: updatePermissionDto,
            })
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async delete(id: number) {
        try {
            return await this.prismaService.permissions.delete({
                where: { id },
            })
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async findAll() {
        try {
            //@ts-ignore
            return await PaginationService.getInstance(this.prismaService.permissions).paginate(0, 10);
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async findById(id: number) {
        try {
            return await this.prismaService.permissions.findUnique({
                where: { id },
            })
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}
