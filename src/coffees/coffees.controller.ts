import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('')
    findAll(): string {
        return 'All coffees';
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
