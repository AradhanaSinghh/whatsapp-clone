import React, { useState } from 'react';
import {
  profile_picture1,
  profile_picture2,
  profile_picture3,
  profile_picture4,
  profile_picture5,
  profile_picture6,
  profile_picture7
} from "../assets/whatsappImages";
import { MdDelete,MdEdit } from 'react-icons/md';
import RoundedButtons from './CommonPart/RoundedButtons';
function ChatList(props) {
  const deleteChatEntry = (index) => {
    props.deleteChat(index);
  };

  const profilePictures = [
    profile_picture1,
    profile_picture2,
    profile_picture3,
    profile_picture4,
    profile_picture5,
    profile_picture6,
    profile_picture7
  ];

  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-full">
      {props.userData.map((contact, index) => (
        <div key={index} className="flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33]">
          {/* Profile picture */}
          <img
            src={profilePictures[index]}
            alt={`profile_picture_${index + 1}`}
            className="rounded-full w-[50px] mr-5"
          />

          {/* Info container */}
          <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
            {/* Contact name and message */}
            <div className="flex flex-col justify-between text-white">
              {/* Contact name */}
              <h1 className="font-medium mb-1">{contact.name}</h1>

              {/* Message */}
              <p className="text-sm">
                {contact.message}
              </p>
            </div>
            <div>
                <RoundedButtons icon={<MdDelete />} onClick={() => deleteChatEntry(index)} className="hover:text-red-500" />
                <RoundedButtons icon={<MdEdit />}  className="hover:text-blue-500" />
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
