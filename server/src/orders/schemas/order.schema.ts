import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { Product, ProductType } from "src/products/schemas/product.schema";
import { OrderStatus } from "../models/order.model";

export type OrderDocument = HydratedDocument<Order>

@Schema({ _id: false })
class Customer {
    @Prop()
    name: string

    @Prop()
    phone: string

    @Prop()
    address: string
}

@Schema()
export class Order {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product' })
    product: Product

    @Prop()
    customer: Customer

    @Prop()
    quantity: number

    @Prop()
    status: OrderStatus

    @Prop()
    type: ProductType

    @Prop()
    created_at: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order)