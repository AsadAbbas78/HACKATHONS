"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NavberArray, NavberItemType } from "./utils/NavberArrayAndTypes";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navber = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <main className="">
      <div className=" flex py-6  items-center justify-between">
        <Link href={""}>
          <div className="w-36">
            <Image src={require("../../../public/images/Logo.webp")} alt="" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center justify-evenly w-full">
          <div>
            <ul className="flex  text-sm  lg:space-x-8 mt-1 ">
              {NavberArray.map((item: NavberItemType, index: number) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-gray-600   border flex items-center pl-4  rounded-md ">
            <CiSearch />
            <input
              type="text"
              className=" outline-none text-sm w-[400px] h-6 pl-2 "
              placeholder="What you looking for"
            />
          </div>

          <Link href={""}>
            <div className="  h-12 w-12 relative bg-gray-300 rounded-full flex items-center justify-center">
              <div className="absolute left-7 bottom-6 bg-red-400 h-5 w-5 rounded-full flex items-center justify-center ">
                0
              </div>
              <FiShoppingCart size={20} />
            </div>
          </Link>
        </div>

        <div>
          <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <div className="flex lg:hidden ">
                <RxCross2 className="text-xl font-bold" />
              </div>
            ) : (
              <div className="flex lg:hidden">
                <RxHamburgerMenu className="text-xl font-bold" />
              </div>
            )}
          </div>
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar />}
    </main>
  );
};

export default Navber;
