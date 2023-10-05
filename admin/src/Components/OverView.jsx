import React from "react";
import {ScaleIcon,ArrowPathRoundedSquareIcon,CheckCircleIcon} from '@heroicons/react/24/outline'
import MainHeading from "./Mainheading";

const Statements = [
  {
    id: "account balance",
    name: "Account Balance",
    icon: "ScaleIcon", // Updated to use icon name as string
    amount: "$30.659.79",
    href: "#",
  },
  {
    id: "Pending",
    name: "Pending",
    icon: "ArrowPathRoundedSquareIcon", // Updated to use icon name as string
    amount: "-$19000.00",
    href: "#",
  },
  {
    id: "Processed",
    name: "Processed (last 30 days)",
    icon: "CheckCircleIcon", // Updated to use icon name as string
    amount: "$20.659.79",
    href: "#",
  },
];

const getIcon = (iconName) => {
  switch (iconName) {
    case "ScaleIcon":
      return <ScaleIcon />;
    case "ArrowPathRoundedSquareIcon":
      return <ArrowPathRoundedSquareIcon />;
    case "CheckCircleIcon":
      return <CheckCircleIcon />;
    default:
      return null;
  }
};

const OverView = () => {
  return (
    <div>
      <MainHeading title="Overview" />
      {/* overview card */}
      <div className="lg:flex lg:space-x-8 mt-4 sm:grid sm:gap-y-4">
        {Statements.map((Statement) => (
          <div
            key={Statement.id}
            className="grid grid-cols-1 border border-gray-200 rounded-lg w-[300px] h-auto bg-white"
          >
            <div className="flex space-x-4 items-center">
              <div className="text-gray-600 w-14 h-14 px-4">
                {getIcon(Statement.icon)} {/* Use the getIcon function */}
              </div>
              <div>
                <div className="text-sm text-gray-400">{Statement.name}</div>
                <div className=" text-gray-800 font-bold">
                  {Statement.amount}
                </div>
              </div>
            </div>
            <a
              href={Statement.href}
              className="text-indigo-600 hover:text-indigo-800 flex item-start bg-indigo-50 
            pl-4 py-2"
            >
              View all
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;