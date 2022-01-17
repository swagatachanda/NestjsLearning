import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.model'
import { Model, ObjectId } from 'mongoose'
import { CreateUser } from './dto/create-user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {}

    async createUser(userData: CreateUser): Promise<UserDocument> {
        console.log(userData.role)
        const newUser = new this.userModel(userData)
        return newUser.save()
    }

    async getAllUser(): Promise<UserDocument[]> {
        return this.userModel.find()
    }

    async getUserbyId(id: ObjectId): Promise<UserDocument> {
        const findUser = await this.userModel.findById(id)
        if (!findUser) {
            throw new NotFoundException(`User not found with id ${id}`)
        }
        return findUser
    }

    async updateUserbyId(
        id: ObjectId,
        userBody: Record<string, any>
    ): Promise<Record<string, any>> {
        const updateUser = await this.userModel.updateOne(
            {
                _id: id,
            },
            {
                ...userBody,
            }
        )
        if (updateUser.matchedCount === 0) {
            throw new NotFoundException(`User with id ${id}`)
        } else {
            if (updateUser.modifiedCount === 0) {
                throw new BadRequestException(
                    `Update unsuccessful with userid ${id}`
                )
            }
        }
        return {
            success: true,
            message: `User id with ${id} updated successfully`,
        }
    }

    async updateUser(
        id: ObjectId,
        userBody: Record<string, any>
    ): Promise<Record<string, any>> {
        const updateUser = await this.userModel.updateOne(
            {
                _id: id,
            },
            {
                ...userBody,
            }
        )
        if (updateUser.matchedCount === 0) {
            throw new NotFoundException(`User with id ${id}`)
        } else {
            if (updateUser.modifiedCount === 0) {
                throw new BadRequestException(
                    `Update unsuccessful with userid ${id}`
                )
            }
        }
        return {
            success: true,
            message: `User id with ${id} updated successfully`,
        }
    }

    async deleteUserbyId(id: ObjectId): Promise<Record<string, any>> {
        const deleteUser = await this.userModel.deleteOne({ _id: id })
        if (deleteUser.deletedCount === 0) {
            throw new BadRequestException(
                `User id with ${id} is either not found or delete operation unsuccessfull`
            )
        }
        return {
            success: true,
            message: `User with id ${id} deleted successfully`,
        }
    }
}
