import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Banner {
    @Field(type => String)
    data_url: string
}