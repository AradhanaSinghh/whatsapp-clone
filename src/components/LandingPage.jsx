// LandingPage.js

import React, { useState, useEffect } from "react";
import LeftMenu from "./LeftMenu";
import ChatDetail from "./ChatDetail";
import UserForm from "./UserForm";
import LoadingPage from "../components/LoadingPage";

function LandingPage(props) {
  // State for loading
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  // State for showing the form
  const [isFormOpen, setFormOpen] = useState(false);

  // Open form handler
  const openFormHandler = () => {
    setFormOpen(true);
  };

  // Close form handler
  const closeFormHandler = () => {
    setFormOpen(false);
  };

  // Function to handle saving user data from the form
  const userData = (data) => {
    props.onSaveData(data);
    console.log(data);
  };



  return (
    <>
      {loading ? (
        <LoadingPage progress={progress} />
      ) : (
        <div className="w-screen h-screen overflow-hidden">
          <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
              <LeftMenu 
                userData={props.userData} 
                openFormHandler={openFormHandler} 
                deleteChat={props.deleteChat}
              />
            </div>
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
              <ChatDetail userData={props.userData} />
              {isFormOpen && (
                <UserForm
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2"
                  onClose={closeFormHandler}
                  getUserDataFromUserForm={userData}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
