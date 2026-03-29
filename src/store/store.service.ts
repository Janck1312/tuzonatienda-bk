import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/exchange/services/PrismaService'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'
import { PaginationService } from 'src/exchange/services/PaginationService'

@Injectable()
export class StoreService {
    constructor(private readonly prismaService: PrismaService) {}

    async findAll() {
        try {
            //@ts-ignore
            return await PaginationService.getInstance(this.prismaService.store).paginate(0, 10);
        } catch (error) {
            throw new BadRequestException(
                'Error fetching stores: ' + error.message,
            )
        }
    }

    async findById(id: number) {
        try {
            return await this.prismaService.store.findFirstOrThrow({
                where: { id },
            })
        } catch (error) {
            throw new NotFoundException(`Store with id ${id} not found.`)
        }
    }

    async create(createStoreDto: CreateStoreDto) {
        try {
            const store = await this.prismaService.store.create({
                data: createStoreDto,
            })
            return store
        } catch (error) {
            throw new BadRequestException(
                'Error creating store: ' + error.message,
            )
        }
    }

    async update(id: number, updateStoreDto: UpdateStoreDto) {
        try {
            const store = await this.prismaService.store.update({
                where: { id },
                data: updateStoreDto,
            })
            return store
        } catch (error) {
            throw new BadRequestException(
                'Error updating store: ' + error.message,
            )
        }
    }

    async delete(id: number) {
        try {
            await this.prismaService.store.delete({ where: { id } })
            return {
                message: `Store with id ${id} deleted successfully.`,
                success: true,
            }
        } catch (error) {
            throw new BadRequestException(
                'Error deleting store: ' + error.message,
            )
        }
    }
}
