import React from 'react';

function MenuTab({ kindTab }) {
  return (
    <div className=" flex-col ">
      {kindTab.map((tab) => (
        <button
          className={`${
            tab.current === "true" && "bg-indigo-700"
          }  rounded-md text-white flex py-2 items-center gap-x-4 hover:bg-indigo-400`}
          key={tab.name}
        >
          <div className="w-6 h-6">{tab.icon}</div>
          <div>{tab.name}</div>
        </button>
      ))}
    </div>
  );
}

const Menu = ({ Tabs }) => {
  return (
    <div className="flex flex-col">
      {/* upper tabs */}
      <div className="border-b-2 border-indigo-800 pb-8">
      <MenuTab kindTab={Tabs.upperTab} />
      </div>
      {/* lower tabs */}
      <div className="mt-4">
      <MenuTab kindTab={Tabs.lowerTab} /> {/* Fixed typo here */}
      </div>
      
    </div>
  );
};

export default Menu;
