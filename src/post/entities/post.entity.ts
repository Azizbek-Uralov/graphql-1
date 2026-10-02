import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field(() => Int)
    id!: number;

    @Field()
    name!: string;

    @Field()
    description!: string;

    @Field()
    cretedAt!: string;

    @Field()
    updatedAt!: string;    
}