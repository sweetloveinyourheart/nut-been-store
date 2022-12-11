import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ProductCollection } from 'src/collections/schemas/collection.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ _id: false })
export class ProductType {
    @Prop()
    price: number

    @Prop()
    weight: string
}

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({ unique: true })
    short_link: string

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: "ProductCollection" })
    product_collection: ProductCollection

    @Prop()
    types: ProductType[]

    @Prop()
    images: string[]

    @Prop()
    created_at: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);