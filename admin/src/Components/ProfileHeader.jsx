import React from 'react'
import {MagnifyingGlassIcon, BellIcon, ChevronDownIcon} from "@heroicons/react/24/outline"

const ProfileHeader = ({user}) => {
  return (
    <div className="flex justify-between ">
      {/* search icon */}
      <div className="flex gap-x-2 items-center">
        <div className="w-4 h-4">
          <MagnifyingGlassIcon/>
        </div>
        Search transaction
      </div>
      {/* Notify icon and User wrapper */}
      <div className="flex gap-x-2 items-center">
        <div className="w-4 h-4">
          <BellIcon/>
          </div>
        <div className="flex items-center gap-x-2">
          <img 
          src={user.imageSrc}
            alt={user.imageAlt}
            className="rounded-full w-4 h-4 object-cover object-center"/>
          <span className="flex items-center space-x-2">
            {user.name}
            <span className="w-4 h-4">
              <ChevronDownIcon/>
              </span>
              </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader