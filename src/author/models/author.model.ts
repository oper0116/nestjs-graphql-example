import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'author' })
export class Author {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
