import { Controller, Post, Body, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createNewUser(
        @Body()
        createUserBody: Record<string, any>
    ) {
        return this.userService.createUser(createUserBody)
    }

    @Get('/all')
    getAllUser() {
        return this.userService.getAllUser()
    }
}
