import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.usersService.findById(id);
    }

    @Get('by-email/:email')
    findByEmail(@Param('email') email: string) {
        return this.usersService.findByEmail(email);
    }

    @Get('by-identification/:identification')
    findByIdentification(@Param('identification') identification: string) {
        return this.usersService.findByIdentification(identification);
    }

    @Post()
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id: number, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}
