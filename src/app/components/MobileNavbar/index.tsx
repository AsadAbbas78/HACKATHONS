"use client";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
      {isNavbarOpen ? (
         
        
        <div  className="flex lg:hidden ">
          <RxCross2 className="text-xl font-semibold"/>
          
        </div>
        
        
      ) : (
        <div className="flex lg:hidden">
          <RxHamburgerMenu className="text-xl font-semibold"/>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
