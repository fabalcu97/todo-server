import { Task } from '@models';
import { Resolver, Query, Arg, Mutation, Ctx } from '@graphql';

import { TasksType, TaskInput } from './types';

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

  @Mutation(() => Task)
  async createTask(
    @Arg('input') newTaskInput: TaskInput,
    @Ctx() ctx: any,
  ): Promise<Task> {
    console.debug('ctx =>', ctx);
    const newTask = new Task({ ...newTaskInput });
    await newTask.save();
    return newTask;
  }

  @Mutation(() => Task)
  async updateTask(
    @Arg('id') taskId: number,
    @Arg('input') taskInput: TaskInput,
    @Ctx() ctx: any,
  ): Promise<Task> {
    const taskToUpdate = await Task.findOne(taskId);
    taskToUpdate.description =
      taskInput.description || taskToUpdate.description;
    taskToUpdate.title = taskInput.title || taskToUpdate.title;
    await taskToUpdate.save();
    return taskToUpdate;
  }
}
