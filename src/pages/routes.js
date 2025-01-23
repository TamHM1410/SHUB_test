import Test_1 from "./Task_1/Task_1-view";
import Task_2 from "./Task_2/Task_2-view";
import Task_3View from "./Task_3/Task_3-view";
export const routes = [
  {
    path: "/",
    component: Test_1,
  },
  { path: "/task-2", component: Task_2 },
  { path: "/task-3", component: Task_3View },

];
