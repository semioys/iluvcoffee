import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flawors: [
                'chocolate',
                'vanilla',
            ],
        },
    ];

    findAll(): Coffee[] {
        return this.coffees;
    }

    findOne(id: string): Coffee {
        return this.coffees.find(item => item.id == +id);
    }

    create(createCoffeeDto: any): Coffee {
        this.coffees.push(createCoffeeDto);
        const [ createdCoffee ] = this.coffees.slice(-1);
        return createdCoffee;
    }

    update(id: string, updateCoffeeDto: any): Coffee {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            // update the existing entry
            return existingCoffee;
        }
    }

    remove(id: string): Coffee {
        const coffeeIndex = this.coffees.findIndex(item => item.id == +id);
        if (coffeeIndex >= 0) {
            return this.coffees.splice(coffeeIndex, 1)[0];
        }
    }
}
