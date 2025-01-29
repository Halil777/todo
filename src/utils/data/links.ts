import {
  IoHomeOutline,
  IoListOutline,
  IoAtOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: IoHomeOutline,
  },
  {
    title: "My Tasks",
    path: "/my-tasks",
    icon: IoListOutline,
  },
  {
    title: "View Tasks",
    path: "/view-tasks",
    icon: IoAtOutline,
  },

  {
    title: "Task Categories",
    path: "/task-categories",
    icon: IoBookmarkOutline,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: IoSettingsOutline,
  },
  {
    title: "Help",
    path: "/help",
    icon: IoHelpCircleOutline,
  },
];
