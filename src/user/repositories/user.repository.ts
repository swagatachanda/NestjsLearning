import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '../user.model'

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async getOneorFail(value: string): Promise<Record<string, any>> {
        const userExist = await this.userModel.findOne({ email: value })
        if (userExist) {
            throw new BadRequestException('User already exists')
        }
        return userExist
    }
}
