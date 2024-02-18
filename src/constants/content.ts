import {
  AiOutlineThunderbolt as ThunderIcon,
  AiOutlineCheckCircle as TasksIcon
} from "react-icons/ai";
import {
  RxDashboard as DashboardIcon,
  RxCalendar as CalenderIcon
} from "react-icons/rx";

export const sidebarNavItems = [
  {
    id: 1,
    text: "Dashboard",
    path: "/",
    Icon: DashboardIcon
  },
  {
    id: 2,
    text: "Projects",
    path: "/projects",
    Icon: ThunderIcon
  },
  {
    id: 3,
    text: "Tasks",
    path: "/tasks",
    Icon: TasksIcon
  },
  {
    id: 4,
    text: "Calender",
    path: "/calender",
    Icon: CalenderIcon
  }
];
