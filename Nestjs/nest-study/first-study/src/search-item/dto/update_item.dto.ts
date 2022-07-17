import { IsNumber, IsString } from "class-validator";

export class UpdateItemDto{
    @IsString()
    readonly name: string;

    @IsString()
    readonly word: string;

    @IsNumber()
    readonly time: number;
}