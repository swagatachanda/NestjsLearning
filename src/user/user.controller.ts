import { Controller, Post, Body, Get, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateUser } from './dto/create-user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createNewUser(
        @Body()
        createUserBody: CreateUser
    ) {
        return this.userService.createUser(createUserBody)
    }

    @Get('/all')
    getAllUser() {
        return this.userService.getAllUser()
    }

    @Get('/:id')
    getUserbyId(@Param('id') id: ObjectId) {
        return this.userService.getUserbyId(id)
    }

    @Put()
    updateUserbyId(@Body() { id, ...userBody }: Record<string, any>) {
        return this.userService.updateUserbyId(id, userBody)
    }

    @Put('/:id')
    updateUser(
        @Body() userBody: Record<string, any>,
        @Param('id') id: ObjectId
    ) {
        return this.userService.updateUser(id, userBody)
    }

    @Delete('/:id')
    deleteUserbyId(@Param('id') id: ObjectId) {
        return this.userService.deleteUserbyId(id)
    }
}
