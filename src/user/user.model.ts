import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({
        type: String,
        required: true,
    })
    name: string

    @Prop({
        type: String,
        required: true,
        unique: true,
    })
    email: string

    @Prop({
        type: String,
        required: true,
    })
    role: string

    @Prop({
        type: Number,
    })
    age?: number
}

export const UserModel = SchemaFactory.createForClass(User)
