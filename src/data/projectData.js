import { v4 as uuid } from "uuid";
export const sideBarData = [
  { name: "Profile", icon: "/assets/user.svg", dropDown: "", route: "/" },
  {
    name: "Projects",
    icon: "/assets/projects.svg",
    dropDown: "/assets/drop.svg",
    route: "/projects",
  },
  {
    name: "Finance",
    icon: "/assets/finance.svg",
    dropDown: "/assets/drop.svg",
    route: "/",
  },
  {
    name: "Support",
    icon: "/assets/info.svg",
    dropDown: "/assets/drop.svg",
    route: "/",
  },
];

export const projectData = [
  {
    id: uuid(),
    name: "Garam Masala",
    icon: "/assets/masala.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a leo massa.",
    status: "Active",
    extra: "Bid",
  },
  {
    id: uuid(),
    name: "Hotels",
    icon: "/assets/hotels.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a leo massa.",
    status: "Active",
    extra: "Bid",
  },
  {
    id: uuid(),
    name: "Technology",
    icon: "/assets/tech.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a leo massa.",
    status: "Upcoming",
  },
  {
    id: uuid(),
    name: "F mcg",
    icon: "/assets/fmcg.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a leo massa.",
    status: "Finished",
  },
];
