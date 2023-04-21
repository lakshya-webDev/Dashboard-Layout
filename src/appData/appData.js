import {
  MdHome,
  MdWork,
  MdOutlineCalendarMonth,
  MdOutlineTableRows,
  MdSettingsSuggest,
  MdLogout
} from "react-icons/md";
import { AppImages } from "./appImages";

export const AppData = {

  Sidebar: [
    {
      icon: <MdHome />,
      name: "Dashboard",
      url: "/dashboard"
    },
    {
      icon: <MdWork />,
      name: "Components",
      subCategory: [
        {
          name: "Cards",
          url: "/component/cards"
        },
        {
          name: "Buttons",
          url: "/component/buttons"
        }
      ]
    },
    {
      icon: <MdOutlineCalendarMonth />,
      name: "Calendar",
      url: "/calendar"
    },
    {
      icon: <MdOutlineTableRows />,
      name: "Data Table",
      url: "/data-table"
    },
    {
      icon: <MdSettingsSuggest />,
      name: 'Settings',
      url: '/settings'

    },
  ],
  Header:[{
    icon: <img src={AppImages.ProfilePlaceholder} className="profile" />,
    name: 'Admin',
    subMenu: [

      {
        icon: <MdLogout />,
        name: 'Logout',
      }
    ]
  },
  ]
};