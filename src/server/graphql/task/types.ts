import { Task } from '@models';
import { ObjectType, Field } from '@graphql';

@ObjectType()
export class TasksType {
  @Field(() => [Task])
  tasks: Task[];

  @Field()
  count: number;
}
