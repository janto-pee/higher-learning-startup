import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
