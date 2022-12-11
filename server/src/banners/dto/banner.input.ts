import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBannerInput {
    @Field()
    data_url: string
}