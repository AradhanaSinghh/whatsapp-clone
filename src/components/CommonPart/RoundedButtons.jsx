import React from 'react'

function RoundedButtons({icon,onClick,className}){
    return (
        <>
        <button
      className={`text-[#8796a1] text-xl p-2 rounded-full hover:bg-[#3c454c] ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
        </>
    )
}
export default RoundedButtons;