import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class CourseMetaDatum {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Prop()
  skills: string;

  @Prop()
  estimatedLearningTime: string;

  @Prop()
  promoPhoto: string;

  @Prop()
  domainTypes: string;
}
export const CourseMetaDatumSchema =
  SchemaFactory.createForClass(CourseMetaDatum);
