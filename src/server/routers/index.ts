import { Router } from '@baseClasses';
import { TaskControllers } from '../controllers';

class MainRouter extends Router {
  controllers = this.setControllers(TaskControllers);
}

export default [new MainRouter('/task')];
