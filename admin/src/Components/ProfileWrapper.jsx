import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

const User = {
  name:"Paru",
  imageSrc:
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  imageAlt:"user photo",
  residency:"Dute street studio",
  verified:"yes"
}

const Profilewrapper = () => {
  return (
    <div className="bg-white divide-y-2 divide-gray-100  border-b-2 border-gray-200 drop-shadow-sm sss">
      <ProfileHeader user ={User}/>
      <ProfileBody user ={User} />
    </div>
  );
};

export default Profilewrapper;
