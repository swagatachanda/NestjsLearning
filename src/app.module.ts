import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { OperationModule } from './operation/operation.module'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { BlogModule } from './blog/blog.module'
// import { UserExistRule } from './user/validation/validation'
import { MailModule } from './mail/mail.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        MongooseModule.forRoot(process.env.DB_CONNECTION),
        OperationModule,
        UserModule,
        BlogModule,
        MailModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
