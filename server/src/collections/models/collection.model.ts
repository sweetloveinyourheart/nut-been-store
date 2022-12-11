import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Collection {
    @Field({ nullable: true })
    _id?: string

    @Field()
    name: string

    @Field()
    description: string

    @Field()
    short_link: string

    @Field()
    created_at: Date
}