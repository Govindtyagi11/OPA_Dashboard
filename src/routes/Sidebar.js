import { RiPagesLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";

const SideBarRoute = [
  {
    path: "/app/dashboard",
    icon: <i className="material-icons">home</i>,
    name: "Dashboard",
  },
  {
    path: "/app/library",
    icon: <i className="material-icons">widgets</i>,
    name: "Library",
  },
  {
    path: "/app/courses",
    icon: <IoIosStar />,
    name: "Courses",
  },
  {
    path: "/app/test",
    icon: <RiPagesLine />,
    name: "Test",
  },
  {
    path: "/app/messages",
    icon: <BiMessageSquareDots />,
    name: "Messages",
  },
  {
    path: "/app/help",
    icon: <MdHelp />,
    name: "Help",
  },
  {
    path: "/app/settings",
    icon: <IoMdSettings />,
    name: "Settings",
  },
  
];

export default SideBarRoute;