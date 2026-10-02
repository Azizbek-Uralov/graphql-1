import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    description!: string;

    @Field()
    @IsInt()
    @IsNotEmpty()
    userId!: number;
}