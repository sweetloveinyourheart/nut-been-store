import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<ProductCollection>;

@Schema()
export class ProductCollection {
    @Prop()
    name: string;

    @Prop()
    description: string

    @Prop()
    short_link: string

    @Prop()
    created_at: Date
}

export const CollectionSchema = SchemaFactory.createForClass(ProductCollection);