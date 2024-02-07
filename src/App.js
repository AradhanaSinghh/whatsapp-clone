import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App(props) {
  const [prevData, setData] = useState([
    {
      name: "xyz",
      phoneNumber: 7299999993,
      message: "hey..",
    },
    
  ]);


  const newDataAdded = (data) => {
    setData((prevData) => [data, ...prevData]);
  };
  
  const deleteChatEntry = (indexToDelete) => {
    const newData = prevData.filter((_, index) => index !== indexToDelete);
    setData(newData);
  };
  return (
    <>
      <LandingPage userData={prevData} onSaveData={newDataAdded} deleteChat={deleteChatEntry}/>
    </>
  );
}

export default App;
