import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseMaterialInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
