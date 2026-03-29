import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(
        private readonly permissionsService: PermissionsService
    ) {}

    @Get()
    findAll() {
        return this.permissionsService.findAll();
    }

    @Get(':id')
    findById(@Param("id") id: number) {
        return this.permissionsService.findById(id);
    }

    @Post()
    create(@Body() createPermissionDto) {
        return this.permissionsService.create(createPermissionDto);
    }

    @Put(':id')
    update(@Param("id") id: number, @Body() updatePermissionDto) {
        return this.permissionsService.update(id, updatePermissionDto);
    }

    @Delete(':id')
    delete(@Param("id") id: number) {
        return this.permissionsService.delete(id);
    }
}
