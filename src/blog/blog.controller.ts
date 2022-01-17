import { Body, Controller, Post } from '@nestjs/common'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Post()
    addFeature(@Body() blogbodyData: Record<string, any>) {
        return this.blogService.addFeatureblog(blogbodyData)
    }
}
