import { Field, InputType, Int } from "@nestjs/graphql";
import { ProductTypeInput } from "src/products/dto/product.input";

@InputType()
class CustomerInput {
    @Field()
    name: string

    @Field()
    phone: string

    @Field()
    address: string
}

@InputType()
export class CreateOrderInput {
    @Field()
    product: string

    @Field(type => ProductTypeInput)
    type: ProductTypeInput

    @Field(type => Int)
    quantity: number

    @Field(type => CustomerInput)
    customer: CustomerInput
}