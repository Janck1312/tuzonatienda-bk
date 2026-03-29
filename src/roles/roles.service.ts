import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/exchange/services/PrismaService';

@Injectable()
export class RolesService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    async findAll() {
        try {
            return await this.prismaService.roles.findMany();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findById(id: number) {
        try {
            return await this.prismaService.roles.findUnique({
                where: { id },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findByName(name: string) {
        try {
            return await this.prismaService.roles.findUnique({
                where: { name },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findByCode(code: string) {
        try {
            return await this.prismaService.roles.findUnique({
                where: { code },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async create(createRolDto) {
        try {
            return await this.prismaService.roles.create({
                data: createRolDto,
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async update(id: number, updateRolDto) {
        try {
            return await this.prismaService.roles.update({
                where: { id },
                data: updateRolDto,
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async delete(id: number) {
        try {
            return await this.prismaService.roles.delete({
                where: { id },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
