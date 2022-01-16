import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.model'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {}

    async createUser(userData: Record<string, any>): Promise<UserDocument> {
        const newUser = new this.userModel(userData)
        return newUser.save()
    }

    async getAllUser(): Promise<UserDocument[]> {
        return this.userModel.find()
    }
}
