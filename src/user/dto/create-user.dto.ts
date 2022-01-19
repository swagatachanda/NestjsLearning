import { IsEmail, IsNotEmpty, IsNumber, Validate } from 'class-validator'
import { UserExistRule } from '../validation/validation'

export class CreateUser {
    @IsNotEmpty({ message: 'Please enter your name!!' })
    name: string

    @IsEmail()
    @Validate(UserExistRule)
    email: string

    @IsNotEmpty()
    role: string

    age?: number
}
