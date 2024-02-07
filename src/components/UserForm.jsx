import React,{useState} from "react";
import { MdClose } from "react-icons/md";
function UserForm(props){
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const nameHandler=(e)=>{
    setName(e.target.value);
  }
  const messageHandler=(e)=>{
    setMessage(e.target.value);
  }
  const phoneNumberHandler=(e)=>{
    setPhoneNumber(e.target.value);
  }
  
  const submitHandler=(event )=>{
    event.preventDefault();
    const newUserData={
      'name':name,
      'message':message,
      'phoneNumber':phoneNumber,
    }
    props.getUserDataFromUserForm(newUserData);
    setName('');
    setMessage('');
    setPhoneNumber('');
  }
    return (
        <>
  <div className={`flex items-center justify-center h-full absolute ${props.className}`}>
  <form onSubmit={submitHandler} className="w-full max-w-md p-8 bg-gray-800 text-white rounded shadow-lg">
  <div className="flex justify-end mb-1">
            <button
              className="text-2xl text-white hover:text-gray-400 focus:outline-none"
              onClick={(event) => {
                event.preventDefault();
                props.onClose();
              }}
            >
              <MdClose />
            </button>
          </div>
    <h2 className="text-2xl font-bold mb-4">Add User</h2>

    <div className="mb-6">
      <label
        className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        Name
      </label>
      <input
        className="bg-gray-600 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-purple-500"
        id="inline-full-name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={nameHandler}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        Message
      </label>
      <input
        className="bg-gray-600 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-purple-500"
        id="inline-full-message"
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={messageHandler}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        Phone Number
      </label>
      <input
        className="bg-gray-600 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-purple-500"
        id="inline-full-name"
        type="number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={phoneNumberHandler}
      />
    </div>

    <div className="flex items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button
          className="shadow bg-purple-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add User
        </button>
      </div>
    </div>
  </form>
</div>



</>
 )
}
export default UserForm;