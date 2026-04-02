import { paginationResponseDto } from '../dto/pagination-dto';
import { IModel } from '../interfaces/IModel';

export class PaginationService {
    constructor(protected model: IModel) {}

    static getInstance(model: IModel): PaginationService {
        return new PaginationService(model);
    }

    async paginate<T>(
        page: number = 0,
        limit: number = 20,
    ): Promise<paginationResponseDto<T>> {
        const totalItems = (await this.model.count()) as number;
        const totalPages = Math.ceil(totalItems / limit);
        const currentPage = page > totalPages ? totalPages : page;
        const items = (await this.model.findMany({
            skip: limit * page,
            take: limit,
        })) as T[];
        return { items, totalItems, totalPages, currentPage };
    }
}
