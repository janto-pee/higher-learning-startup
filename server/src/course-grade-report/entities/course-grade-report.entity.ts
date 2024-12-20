import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class CourseGradeReport {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Prop()
  completedAt: number;

  @Prop()
  overallProgress: number;

  @Prop()
  approxTotalLearningHrs: number;

  @Prop()
  fullName: string;

  @Prop()
  externalId: string;

  @Prop()
  lastActivityAt: number;

  @Prop()
  courseName: string;

  @Prop()
  overallCourseGrade: number;

  @Prop()
  riskFlags: string;

  @Prop()
  courseId: string;

  @Prop()
  programId: string;

  @Prop()
  itemGradebooks: number;

  @Prop()
  CourseItemGradebook: number;

  @Prop()
  enrolledAt: number;

  @Prop()
  isCompleted: boolean;
}
export const CourseGradeReportSchema =
  SchemaFactory.createForClass(CourseGradeReport);
