import React, { useState } from "react";
import ChatList from "./ChatList";
import RoundedButtons from "./CommonPart/RoundedButtons";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";
import profilePic1 from "../assets/images/profilePic1.png";

function LeftMenu(props) {
  const [filter, setFilter] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const filteredContacts = Array.isArray(props.userData)
    ? props.userData.filter((contact) =>
        contact.name?.toLowerCase().includes(searchText.toLowerCase())
      ).map(contact => ({...contact, profilePicture: profilePic1})) // Add profilePicture property
    : [];

  return (
    <>
      <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
        <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
          <img
            src={profilePic1}
            alt="profile_picture"
            className="rounded-full w-[40px]"
          />
          <div className="flex justify-between w-[175px]">
            <RoundedButtons icon={<MdPeopleAlt />} />
            <RoundedButtons icon={<IoIosSettings />} />
            <RoundedButtons icon={<BsFillChatLeftTextFill />} />
            <RoundedButtons
              icon={<RiChatNewLine />}
              onClick={props.openFormHandler}
            />
            <RoundedButtons icon={<HiDotsVertical />} />
          </div>
        </div>
        <div
          className={`flex items-center relative ${
            searchText.length > 0 ? "text-white" : ""
          }`}
        >
          {searchText.length > 0 && (
            <div className="absolute left-1 bottom-0.98 flex flex-between">
              <button
                className="text-lg mx-2 text-emerald-400 rounded-full hover:bg-emerald-700"
                onClick={clearSearch}
              >
                <FaLongArrowAltLeft />
              </button>
            </div>
          )}
          <input
            type="text"
            placeholder="Search or start a new chat"
            value={searchText}
            onChange={handleInputChange}
            className="rounded-lg bg-[#202c33] text-sm font-light outline-none mx-2 px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
          />
          <button
            className={`text-2xl m-2 p-1 rounded-full ${
              filter
                ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
                : "text-[#8796a1] hover:bg-[#3c454c]"
            }`}
            onClick={() => setFilter(!filter)}
          >
            <BiFilter />
          </button>
        </div>
        {/* Render ChatList with filtered contacts */}
        <ChatList 
          userData={filteredContacts} 
          deleteChat={props.deleteChat}
        />
      </div>
    </>
  );
}

export default LeftMenu;
