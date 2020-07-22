import { BaseController } from '@baseClasses';
import { httpStatus, MethodsEnum } from '@interfaces';
import { Task } from '@models';

class CreateTaskController extends BaseController {
  mMethod = MethodsEnum.POST;
  mPath = '/';

  controllerMethod = async () => {
    const task = new Task();
    task.description = this.body.description;
    task.title = this.body.title;
    await task.save();
    this.success(httpStatus.CREATED, task);
  };
}

class RetrieveTaskController extends BaseController {
  mMethod = MethodsEnum.GET;
  mPath = '/:id';

  controllerMethod = async () => {
    const id = this.req.params['id'];
    const task = await Task.findOne(id);
    if (task) {
      this.success(httpStatus.OK, task);
    } else {
      this.error(httpStatus.NOT_FOUND, `Task with id (${id}) not found.`);
    }
  };
}

class ListTaskController extends BaseController {
  mMethod = MethodsEnum.GET;
  mPath = '/';

  controllerMethod = async () => {
    const [tasks, total] = await Task.findAndCount();
    this.success(httpStatus.OK, { tasks, total });
  };
}

class UpdateTaskController extends BaseController {
  mMethod = MethodsEnum.PUT;
  mPath = '/:id';

  controllerMethod = async () => {
    const id = this.req.params['id'];
    const task = await Task.findOne(id);
    if (task) {
      task.title = this.body.title || task.title;
      task.description = this.body.description || task.description;
      await task.save();
      this.success(httpStatus.OK, task);
    } else {
      this.error(httpStatus.NOT_FOUND, `Task with id (${id}) not found.`);
    }
  };
}

class DeleteTaskController extends BaseController {
  mMethod = MethodsEnum.DELETE;
  mPath = '/:id';

  controllerMethod = async () => {
    const id = this.req.params['id'];
    const task = await Task.findOne(id);
    if (task) {
      await task.remove();
      this.success(httpStatus.OK, { id });
    } else {
      this.error(httpStatus.NOT_FOUND, `Task with id (${id}) not found.`);
    }
  };
}

export default {
  CreateTaskController,
  RetrieveTaskController,
  ListTaskController,
  UpdateTaskController,
  DeleteTaskController,
};
