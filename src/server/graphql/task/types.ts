import { Task } from '@models';
import { ObjectType, Field, InputType } from '@graphql';

@ObjectType()
export class TasksType {
  @Field(() => [Task])
  tasks: Task[];

  @Field()
  count: number;
}

@InputType({ description: 'Task input.' })
export class TaskInput {
  @Field({ nullable: true, description: 'Task title.' })
  title: string;

  @Field({ nullable: true, description: 'Task description.' })
  description: string;
}
