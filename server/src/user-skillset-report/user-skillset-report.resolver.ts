import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSkillsetReportService } from './user-skillset-report.service';
import { UserSkillsetReport } from './entities/user-skillset-report.entity';
import { CreateUserSkillsetReportInput } from './dto/create-user-skillset-report.input';
import { UpdateUserSkillsetReportInput } from './dto/update-user-skillset-report.input';

@Resolver(() => UserSkillsetReport)
export class UserSkillsetReportResolver {
  constructor(private readonly userSkillsetReportService: UserSkillsetReportService) {}

  @Mutation(() => UserSkillsetReport)
  createUserSkillsetReport(@Args('createUserSkillsetReportInput') createUserSkillsetReportInput: CreateUserSkillsetReportInput) {
    return this.userSkillsetReportService.create(createUserSkillsetReportInput);
  }

  @Query(() => [UserSkillsetReport], { name: 'userSkillsetReport' })
  findAll() {
    return this.userSkillsetReportService.findAll();
  }

  @Query(() => UserSkillsetReport, { name: 'userSkillsetReport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userSkillsetReportService.findOne(id);
  }

  @Mutation(() => UserSkillsetReport)
  updateUserSkillsetReport(@Args('updateUserSkillsetReportInput') updateUserSkillsetReportInput: UpdateUserSkillsetReportInput) {
    return this.userSkillsetReportService.update(updateUserSkillsetReportInput.id, updateUserSkillsetReportInput);
  }

  @Mutation(() => UserSkillsetReport)
  removeUserSkillsetReport(@Args('id', { type: () => Int }) id: number) {
    return this.userSkillsetReportService.remove(id);
  }
}