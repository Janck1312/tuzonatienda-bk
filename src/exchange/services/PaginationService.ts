import { DefaultArgs, PrismaClientOptions } from '@prisma/client/runtime/client'
import { StoreDelegate } from 'generated/prisma/models'
import { paginationResponseDto } from '../dto/pagination-dto'

export class PaginationService {
    constructor(protected model: StoreDelegate<DefaultArgs, PrismaClientOptions>) {}

    static getInstance(model: StoreDelegate<DefaultArgs, PrismaClientOptions>): PaginationService {
        return new PaginationService(model)
    }

    async paginate<T>(
        page: number = 0,
        limit: number = 20,
    ): Promise<paginationResponseDto<T>> {
        const totalItems = (await this.model.count()) as number
        const totalPages = Math.ceil(totalItems / limit)
        const currentPage = page > totalPages ? totalPages : page
        const items = (await this.model.findMany({
            skip: limit * page,
            take: limit,
        })) as T[]
        return { items, totalItems, totalPages, currentPage }
    }
}
