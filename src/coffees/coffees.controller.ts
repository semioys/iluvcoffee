import { Controller, Get, Param, Post, Body, Patch, Delete, Query, NotFoundException } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get('')
    findAll(@Query() paginationQuery): Coffee[] {
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffee {
        const coffee = this.coffeesService.findOne(id); 
        if (!coffee) {
            throw new NotFoundException(`Coffe #${id} not found`);
        }
        return coffee;
    }

    @Post()
    create(@Body() body) {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
