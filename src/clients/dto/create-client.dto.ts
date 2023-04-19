import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class CreateClientDTo {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsNumber()
    @IsNotEmpty()
    phone: number

    @IsString()
    @IsEmail()
    email: string
}
