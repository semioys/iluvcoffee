import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('')
    findAll(@Query() paginationQuery): string {
        const { limit, offset } = paginationQuery;
        return `Return all coffees, with the limit: ${limit} and ${offset}`; 
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `The id of coffee is ${id}`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Update coffee #${id} with the ${body}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Remove coffee #${id}`;
    }
}
