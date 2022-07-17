import { IsNumber, IsString } from "class-validator";

export class ItemDto{
    @IsString()
    readonly name: string;

    @IsString()
    readonly word: string;

    @IsNumber()
    readonly time: number;
}