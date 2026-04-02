import { Injectable } from '@nestjs/common';
import { PaginationService } from 'src/exchange/services/PaginationService';
import { PrismaService } from 'src/exchange/services/PrismaService';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async findAll() {
        try {
            //@ts-ignore
            return await PaginationService.getInstance(
                this.prismaService.users,
            ).paginate();
        } catch (error) {}
    }

    async findById(id: number) {
        try {
            return await this.prismaService.users.findUniqueOrThrow({
                where: {
                    id,
                },
            });
        } catch (error) {}
    }

    async findByEmail(email: string) {
        try {
            return await this.prismaService.users.findUniqueOrThrow({
                where: {
                    email,
                },
            });
        } catch (error) {}
    }

    async findByIdentification(identification: string) {
        try {
            return await this.prismaService.users.findUniqueOrThrow({
                where: {
                    identification,
                },
            });
        } catch (error) {}
    }

    async create(createUserDto) {
        try {
            return await this.prismaService.users.create({
                data: createUserDto,
            });
        } catch (error) {}
    }

    async update(id: number, updateUserDto) {
        try {
            return await this.prismaService.users.update({
                where: {
                    id,
                },
                data: updateUserDto,
            });
        } catch (error) {}
    }

    async delete(id: number) {
        try {
            await this.prismaService.users.delete({
                where: {
                    id,
                },
            });
            return { success: true };
        } catch (error) {}
    }
}
