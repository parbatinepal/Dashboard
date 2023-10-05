import React from "react";
import Dashboard from "./Components/Dashboard";
import {
  HomeIcon,
  ClockIcon,
  ScaleIcon,
  CreditCardIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Components/sidebar";
import Profilewrapper from "./Components/ProfileWrapper";
import Menu from "./Components/Menu";


const App = () => {
  const Tabs = {
    upperTab: [
      {
        icon: <HomeIcon />,
        name: "Home",
        current: "false",
      },
      {
        icon: <ClockIcon />,
        name: "History",
        current: "false",
      },
      {
        icon: <ScaleIcon />,
        name: "Balance",
        current: "false",
      },
      {
        icon: <CreditCardIcon />,
        name: "Cards",
        current: "false",
      },
      {
        icon: <UserGroupIcon />,
        name: "Recepients",
        current: "false",
      },
      {
        icon: <DocumentChartBarIcon />,
        name: "Reports",
        current: "false",
      },
    ],
    lowerTab: [
      {
        icon: <CogIcon />,
        name: "Settings",
        current: "false",
      },
      {
        icon: <QuestionMarkCircleIcon />,
        name: "Help",
        current: "false",
      },
      {
        icon: <ShieldCheckIcon />,
        name: "Privacy",
        current: "false",
      },
    ],
  };
  return (
    <div
      className="flex items-center justify-center mx-8 h-[700px] w-full 
    border border-gray-400 rounded-md overflow-hidden  mt-16  "
    >
      <div className="grid w-full cols-6 ">
        <div className="bg-fuchsia-600 overflow-hidden px-4 py-10 col-start-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1507/1507120.png"
            alt="logo"
            className="w-12 h-12 rounded-full ml-4"
          />

          <Menu Tabs={Tabs} />
        </div>
        <div className="col-start-2 ">
          <Profilewrapper />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
