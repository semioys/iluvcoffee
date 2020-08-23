import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString({
        message: "Please enter a correct name of coffee",
    })
    readonly name: string;

    @IsString({
        message: "Please enter a correct brand of coffee",
    })
    readonly brand: string;

    @IsString({
        each: true,
        message: "Please enter a correct flawors",
    })
    readonly flawors: string[];
}
