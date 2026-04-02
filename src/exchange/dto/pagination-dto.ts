import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class paginationDto {
    @ApiProperty({ description: 'Page number', example: 1, required: true })
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    page: number;

    @ApiProperty({
        description: 'Number of items per page',
        example: 10,
        required: true,
    })
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    limit: number;

    @ApiProperty({
        description: 'Search query',
        example: 'example search',
        required: false,
    })
    @Type(() => String)
    @IsOptional()
    @IsString()
    search?: string;
}

export class paginationResponseDto<T> {
    @ApiProperty({ description: 'Items for the current page', example: [] })
    items: T[];
    @ApiProperty({ description: 'Total number of items', example: 100 })
    totalItems: number;
    @ApiProperty({ description: 'Total number of pages', example: 10 })
    totalPages: number;
    @ApiProperty({ description: 'Current page number', example: 1 })
    currentPage: number;
}
