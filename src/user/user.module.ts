import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserModel } from './user.model'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserExistRule } from './validation/validation'
import { UserRepository } from './repositories/user.repository'
import { MailModule } from 'src/mail/mail.module'

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserModel,
            },
        ]),
        MailModule
    ],
    controllers: [UserController],
    providers: [UserService, UserExistRule, UserRepository],
    exports: [],
})
export class UserModule {}
