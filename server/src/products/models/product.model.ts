import { Field, ObjectType } from "@nestjs/graphql";
import { Collection } from "src/collections/models/collection.model";

@ObjectType()
export class ProductType {
    @Field()
    price: number

    @Field()
    weight: string
}

@ObjectType()
export class Product {
    @Field()
    _id?: string

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    short_link: string

    @Field(type => Collection)
    product_collection: Collection

    @Field(type => [ProductType])
    types: ProductType[]

    @Field(type => [String])
    images: string[]

    @Field()
    created_at: Date
}