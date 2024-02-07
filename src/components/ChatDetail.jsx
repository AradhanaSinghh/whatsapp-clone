import React, { useState} from "react";
import RoundedButtons from "./CommonPart/RoundedButtons";
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import {
  profile_picture1,
  profile_picture2,
  profile_picture3,
  profile_picture4,
  profile_picture5,
  profile_picture6,
  profile_picture7
} from "../assets/whatsappImages";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { messagesData } from "./MessageData";
import Message from "./Message";

function ChatDetail(props) {
  const [messages, setMessages] = useState(messagesData);
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
    <>
      {
      props.userData.map((contact, index) => (
        <div key={index} className="relative flex flex-col h-screen">
          <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
            <div className="flex items-center">
              <img
                src={profilePictures[index]}
                alt="profile_picture"
                className="rounded-full w-[45px] h-[45px] mr-5"
              />
              <div className="flex flex-col text-white">
                <p className="font-bold">{contact.name}</p>
                <p className="text-[#8796a1] text-xs">Online</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center w-[85px]">
              <RoundedButtons icon={<MdSearch />} />
              <RoundedButtons icon={<HiDotsVertical />} />
            </div>
          </div>
          <div
            className="bg-[#0a131a] bg-[url('assets/images/backgroundImage.webp')] bg-contain overflow-y-scroll h-100"
            style={{ padding: "12px 7%" }}
          >
            {messages.map((message, index) => (
              <Message
                key={index}
                message={message.message}
                time={message.time}
                sent={message.sent}
                isLink={message.isLink}
                image={message.image}
              />
            ))}
          </div>
          <div className="flex items-center bg-[#202c33] w-full h-[70px] p-2">
            <RoundedButtons icon={<BiHappy />} />
            <span className="mr-2">
              <RoundedButtons icon={<AiOutlinePaperClip />} />
            </span>
            <input
              type="text"
              placeholder="Type a message"
              className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3"
              
            />

            <span className="ml-2">
               
                {/* <RoundedButtons icon={<MdSend />} /> */}
              
                <RoundedButtons icon={<BsFillMicFill />} />
              
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChatDetail;
