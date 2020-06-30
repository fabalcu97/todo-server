import { Task } from '@models';
import { Resolver, Query, Arg } from '@graphql';

import { TasksType } from './types';

@Resolver(Task)
export class TaskResolver {
  @Query(() => Task, { description: 'Return a single task.' })
  async task(@Arg('id') id: number) {
    const task = await Task.findOne(id);
    if (!task) {
      throw new Error(`Task with id (${id}) not found.`);
    }
    return task;
  }

  @Query(() => TasksType, {
    description: 'return list of tasks.',
  })
  async tasks() {
    const [tasks, count] = await Task.findAndCount();
    return { tasks, count };
  }
}
