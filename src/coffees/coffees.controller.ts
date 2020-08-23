import { Controller, Get, Param } from '@nestjs/common';

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
}
