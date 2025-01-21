import React from 'react'
import logo from "../assets/logo.png";
import { redirect, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
        <h1 className="logo"onClick={()=>{navigate("/")}}>
          <img src={logo} className="logoimg" alt="logo" />
          ZQuizzy
        </h1>

        <input
                  placeholder="Search"
                  class="search-box form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#647987] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
        </div>
  )
}

export default Header
