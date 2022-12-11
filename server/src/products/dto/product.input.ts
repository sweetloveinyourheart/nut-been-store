import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductTypeInput {
    @Field()
    price: number

    @Field()
    weight: string
}

@InputType()
export class CreateProductInput {
    @Field()
    name: string;

    @Field(type => [ProductTypeInput])
    types: ProductTypeInput[]

    @Field(type => [String])
    images: string[]

    @Field()
    product_collection: string
}

@InputType()
export class UpdateProductInput {
    @Field({ nullable: true })
    name: string;

    @Field(type => [ProductTypeInput], { nullable: true })
    types: ProductTypeInput[]

    @Field(type => [String], { nullable: true })
    images: string[]

    @Field({ nullable: true })
    product_collection: string
}