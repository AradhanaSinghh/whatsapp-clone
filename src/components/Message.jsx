import {
    profile_picture1,
    profile_picture2,
    profile_picture3,
    profile_picture4,
    profile_picture5,
    profile_picture6,
    profile_picture7
  } from "../assets/whatsappImages";
function Message({message,sent,image,time,isLink}){
    return (
        <>
          <div className={`flex justify-center items-center rounded-md w-fit my-1 
        ${
            sent ? "bg-[#005c4b] ml-auto": "bg-[#202d33] mr-auto"
        }`}
          >
            {image ? (
                <div className="relative w-100 p-2">
                    <img src={image} alt="image_message" className="rounded-md max-w-[270px] w-100"/>
                    <p className="absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
                </div>
            ) :
            (
                <div className="flex justify-between items-end max-w-[410px] p-2"
                style={{wordBreak:"break-word"}}
                >
                  {isLink ? (
                    <a href={message}
                      target="blank"
                      className="text-[#53beec] hover:text-[#53beec] focus:text-[#53beec]
                      active:text-[#53beec]
                      text-sm underline hover:underline
                      mr-3
                      "
                    >
                      {message}
                    </a>
                  ): (
                    <p className="text-white text-sm mr-2">{message}</p>
                  )}
                  <p className="text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
                </div>
            )}
          </div>
        </>
    )
}
export default Message;