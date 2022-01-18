import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from 'src/user/user.model'
import { Blog, BlogDocument } from './blog.model'
import { CreateBlog } from './dto/create-blog.dto'

@Injectable()
export class BlogService {
    constructor(
        @InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async addFeatureblog(
        blogData: CreateBlog
    ): Promise<Record<string, any>> {
        const findUser = await this.userModel.findById(blogData.userId)
        if(!findUser){
            throw new NotFoundException(`User not found`)
        }
        const newBlog = new this.blogModel(blogData)
        const saveBlog = await newBlog.save()
        return {
            success: true,
            data: saveBlog,
        }
    }
}
