import { IsAlphanumeric, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateBlog{
    @IsAlphanumeric()
    userId: ObjectId

    blogName: string

    @IsNotEmpty()
    blogWriters: string[]

    admin?: boolean
}