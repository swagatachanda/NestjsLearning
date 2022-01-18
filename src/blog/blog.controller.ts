import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreateBlog } from './dto/create-blog.dto'

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    addFeature(@Body() blogbodyData: CreateBlog) {
        return this.blogService.addFeatureblog(blogbodyData)
    }
}
