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
          url: "/components/cards"
        },
        {
          name: "Buttons",
          url: "/components/buttons"
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
    }
  ],
  Header:[{
    icon: <MdSettingsSuggest/>,
    name: 'Profile',
    subMenu: [
      {
        icon: <img src={AppImages.ProfilePlaceholder} />,
        name: 'Settings'
      },
      {
        icon: <MdLogout />,
        name: 'Logout'
      }
    ]
  },
  ]
};