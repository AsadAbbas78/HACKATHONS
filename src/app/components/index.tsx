import React from "react";
import Image from "next/image";
import { NavberArray, NavberItemType } from "./utils/NavberArrayAndTypes";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navber = () => {
  return (
    <main>

      <div className=" flex py-6 justify-between items-center space-x-6 ">
        <Link href={''}><div className="w-36">
          <Image src={require("../../../public/images/Logo.webp")} alt="" />
        </div></Link>
 <div className="hidden lg:flex justify-center items-center w-full gap-12">
        <div>
          <ul className="flex font-medium text-lg lg:space-x-3">
            {NavberArray.map((item: NavberItemType, index: number) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-gray-600   border flex items-center pl-3  rounded-md ">
          <CiSearch />
          <input
            type="text"
            className="text-sm w-80 h-10 "
            placeholder="What you looking for"
          />
        </div>

       <Link href={''}> 
       
        <div className=" flex h-12 w-12 relative bg-gray-300 rounded-full flex items-center justify-center">
          <div className="absolute left-7 bottom-6 bg-red-400 h-5 w-5 rounded-full flex items-center justify-center ">
            3
          </div>
          <FiShoppingCart size={20} />
        </div></Link>
        </div>
      </div>
    </main>
  );
};

export default Navber;
