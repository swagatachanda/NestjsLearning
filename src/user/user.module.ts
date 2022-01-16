import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserModel } from './user.model'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserModel,
            },
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {}
