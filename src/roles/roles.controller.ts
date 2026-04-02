import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    async findAll() {
        return await this.rolesService.findAll();
    }

    @Get(':id')
    async findById(id: number) {
        return await this.rolesService.findById(id);
    }

    @Get('by-name/:name')
    async findByName(@Param('name') name: string) {
        return await this.rolesService.findByName(name);
    }

    @Get('by-code/:code')
    async findByCode(@Param('code') code: string) {
        return await this.rolesService.findByCode(code);
    }

    @Post()
    async create(@Body() createRolDto) {
        return await this.rolesService.create(createRolDto);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() updateRolDto) {
        return await this.rolesService.update(id, updateRolDto);
    }

    @Delete(':id')
    async delete(@Param() id: number) {
        return await this.rolesService.delete(id);
    }
}
