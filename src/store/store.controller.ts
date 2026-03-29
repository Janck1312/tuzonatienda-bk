import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { StoreService } from './store.service'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Get()
    findAll() {
        return this.storeService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.storeService.findById(id)
    }

    @Post()
    create(@Body() createStoreDto: CreateStoreDto) {
        return this.storeService.create(createStoreDto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateStoreDto: UpdateStoreDto) {
        return this.storeService.update(id, updateStoreDto)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.storeService.delete(id)
    }
}
