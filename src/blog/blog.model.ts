import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ObjectId } from 'mongoose'

export type BlogDocument = Blog & Document

@Schema()
export class Blog {
    @Prop({
        type: String,
        unique: true,
        required: true,
    })
    userId: ObjectId

    @Prop({
        type: String,
        default: 'Raj',
    })
    blogName?: string

    @Prop({
        type: [String],
        required: true,
    })
    blogWriters: string[]

    @Prop({
        type: Boolean,
        default: false,
    })
    admin?: boolean
}
export const BlogModel = SchemaFactory.createForClass(Blog)
