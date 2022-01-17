import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserModel } from 'src/user/user.model'
import { BlogController } from './blog.controller'
import { Blog, BlogModel } from './blog.model'
import { BlogService } from './blog.service'

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Blog.name,
                schema: BlogModel,
            },
            {
                name: User.name,
                schema: UserModel,
            },
        ]),
    ],
    controllers: [BlogController],
    providers: [BlogService],
    exports: [],
})
export class BlogModule {}
