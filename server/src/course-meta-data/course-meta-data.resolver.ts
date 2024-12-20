import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseMetaDataService } from './course-meta-data.service';
import { CourseMetaDatum } from './entities/course-meta-datum.entity';
import { CreateCourseMetaDatumInput } from './dto/create-course-meta-datum.input';
import { UpdateCourseMetaDatumInput } from './dto/update-course-meta-datum.input';
import { Schema as MongooseSchema } from 'mongoose';

@Resolver(() => CourseMetaDatum)
export class CourseMetaDataResolver {
  constructor(private readonly courseMetaDataService: CourseMetaDataService) {}

  @Mutation(() => CourseMetaDatum)
  createCourseMetaDatum(
    @Args('createCourseMetaDatumInput')
    createCourseMetaDatumInput: CreateCourseMetaDatumInput,
  ) {
    return this.courseMetaDataService.create(createCourseMetaDatumInput);
  }

  @Query(() => [CourseMetaDatum], { name: 'courseMetaData' })
  findAll() {
    return this.courseMetaDataService.findAll();
  }

  @Query(() => CourseMetaDatum, { name: 'courseMetaDatum' })
  findOne(
    @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.courseMetaDataService.findOne(id);
  }

  @Mutation(() => CourseMetaDatum)
  updateCourseMetaDatum(
    @Args('updateCourseMetaDatumInput')
    updateCourseMetaDatumInput: UpdateCourseMetaDatumInput,
  ) {
    return this.courseMetaDataService.update(
      updateCourseMetaDatumInput._id,
      updateCourseMetaDatumInput,
    );
  }

  @Mutation(() => CourseMetaDatum)
  removeCourseMetaDatum(
    @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.courseMetaDataService.remove(id);
  }
}
