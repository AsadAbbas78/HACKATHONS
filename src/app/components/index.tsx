import React from "react";
import Image from "next/image";
import { NavberArray, NavberItemType } from "./utils/NavberArrayAndTypes";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";

const Navber = () => {
  return (
    <main>
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
              className="text-sm w-[400px] h-6 pl-2 "
              placeholder="What you looking for"
            />
          </div>

          <Link href={""}>
            <div className=" flex h-12 w-12 relative bg-gray-300 rounded-full flex items-center justify-center">
              <div className="absolute left-7 bottom-6 bg-red-400 h-5 w-5 rounded-full flex items-center justify-center ">
                3
              </div>
              <FiShoppingCart size={20} />
            </div>
          </Link>
        </div>

        <div>
          <MobileNavbar />
        </div>
      </div>
    </main>
  );
};

export default Navber;
