import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
}
