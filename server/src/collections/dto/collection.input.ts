import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCollectionInput {
    @Field()
    name: string

    @Field()
    description: string
}