import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;
    @IsNotEmpty()
    lastname: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    country: string;
    @IsNotEmpty()
    city: string;
}