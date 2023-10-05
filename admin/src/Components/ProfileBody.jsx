import { CheckCircleIcon , BuildingOfficeIcon} from "@heroicons/react/24/outline";
import React from "react";

const ProfileButtons = [
  { name: "Add", bg: "bg-green-200", color: "text-gray-900" },
  { name: "Send", bg: "bg-indigo-500", color: "text-white" },
];

const ProfileBody = ({ user }) => {
  return (
    <div className="py-3 justify-between">
      <div className="flex justify-between space-x-4">
        {/* image */}
        <div className="flex item-center justify-center">
          <img
            src={user.imageSrc}
            alt={user.imageAlt}
            className="rounded-full w-8 h-8"
          />
          <div className="flex flex-col ">
            <h1 className="text-gray-900 font-boldtext-2xl text-lg">
              Good morning,{user.name}
            </h1>
            <div className="flex item-center space-x-4">
              <p className="text-sm text-[#84878d] font-light flex gap-x-2">
                <BuildingOfficeIcon className="w-6 h-6"/>
                {user.residency}
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon
                  className={`${
                    user.verified && "bg-green-600 text-white"
                  }w-4 h-4 rounded-full`}
                />

                <span className="text-sm text-[#84878d] font-light">
                  Verified Account
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          {ProfileButtons.map((Pbutton) => (
            <button
              className={`${Pbutton.bg} ${Pbutton.color}
      hover:bg-opacity-{90%} boarder rounded-md px-4 `}
            >
              {Pbutton.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
