import { File, Users } from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Sample Page",
        icon: File,
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/general/sample_page`, title: "Sample Page", type: "link" },
          ],
      },    
      { path: `https://support.pixelstrap.com/`, icon: Users, type: "link", active: false, title: "Support Ticket" },

    ]
  },
];
