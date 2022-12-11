import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Product, ProductType } from "src/products/models/product.model";

export enum OrderStatus {
    Pending = 'pending',
    InProgress = 'in-progress',
    Finished = 'finished'
}

registerEnumType(OrderStatus, {
    name: 'OrderStatus'
})

@ObjectType()
class Customer {
    @Field()
    name: string

    @Field()
    phone: string

    @Field()
    address: string
}

@ObjectType()
export class Order {
    @Field(() => Product)
    product: Product

    @Field()
    customer: Customer

    @Field(type => ProductType)
    type: ProductType

    @Field(type => Int)
    quantity: number

    @Field(type => OrderStatus)
    status: OrderStatus

    @Field()
    created_at: Date
}

