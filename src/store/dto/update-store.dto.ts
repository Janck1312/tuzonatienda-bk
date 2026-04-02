import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsJSON,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateStoreDto {
    @ApiProperty({
        type: String,
        description: 'The name of the store',
        required: false,
    })
    @IsOptional({ message: 'The name of the store is required' })
    @IsString({ message: 'The name of the store must be a string' })
    name: string;

    @ApiProperty({
        type: String,
        description: 'The business name of the store',
        required: false,
    })
    @IsOptional({ message: 'The business name of the store is required' })
    @IsString({ message: 'The business name of the store must be a string' })
    businessName: string;

    @ApiProperty({
        type: String,
        description: 'The identification number of the store',
        required: false,
    })
    @IsOptional({
        message: 'The identification number of the store is required',
    })
    @IsString({
        message: 'The identification number of the store must be a string',
    })
    identification: string;

    @ApiProperty({
        type: String,
        description: 'The email of the store',
        required: false,
    })
    @IsOptional({ message: 'The email of the store is required' })
    @IsString({ message: 'The email of the store must be a string' })
    @IsEmail(
        {},
        { message: 'The email of the store must be a valid email address' },
    )
    email: string;

    @ApiProperty({
        type: String,
        description: 'The address of the store',
        required: false,
    })
    @IsString({ message: 'The address of the store must be a string' })
    address: string;

    @ApiProperty({
        type: String,
        description: 'The phone numbers of the store',
        required: false,
    })
    @IsOptional()
    @IsJSON({
        message: 'The phone numbers of the store must be a valid JSON string',
    })
    phones: string;

    @ApiProperty({
        type: String,
        description: 'The logo of the store',
        required: false,
    })
    @IsString({ message: 'The logo of the store must be a string' })
    @IsOptional({ message: 'The logo of the store cannot be empty' })
    logo: string;

    @ApiProperty({
        type: String,
        description: 'The front page image of the store',
        required: false,
    })
    @IsString({ message: 'The front page image of the store must be a string' })
    @IsOptional()
    frontPageImg: string;

    @ApiProperty({
        type: String,
        description: 'The geolocation of the store',
        required: false,
    })
    @IsJSON({
        message: 'The geolocation of the store must be a valid JSON string',
    })
    @IsOptional()
    geolocalizacion: string;

    @ApiProperty({
        type: Number,
        description: 'The ID of the owner of the store',
        required: false,
    })
    @IsNumber(
        {},
        { message: 'The ID of the owner of the store must be a number' },
    )
    @IsOptional({ message: 'The ID of the owner of the store is required' })
    ownerId: number;
}
