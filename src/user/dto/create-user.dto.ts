import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateUser {
    @IsNotEmpty({ message: 'Please enter your name!!' })
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    role: string

    @IsNumber()
    age?: number
}
