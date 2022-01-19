import { Injectable } from '@nestjs/common'
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator'
import { UserRepository } from '../repositories/user.repository'

@ValidatorConstraint()
@Injectable()
export class UserExistRule implements ValidatorConstraintInterface {
    constructor(private userRepo: UserRepository) {}

    async validate(value: string) {
        await this.userRepo.getOneorFail(value)

        return true
    }
}
