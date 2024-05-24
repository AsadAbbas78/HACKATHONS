import React from "react";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

const Hero = () => {
  return (
    <main>
      <div className="flex  justify-between items-center ">
        {/* left side */}
        <div className=" space-y-12 ">
          <button className="bg-[#e1edff] text-[#1f01ff] font-bold px-6 py-3  font-sans rounded">
            Sale 70%
          </button>

          <h1 className="font-bold text-6xl">
            An Industrial Take <br /> on Streetwear
          </h1>
          <p>
            Anyone can beat you but no one can beat your outfit as <br /> long
            as you wear Dine outfits.
          </p>

          <button className=" flex bg-[#212121] text-white items-center px-6 py-3 gap-2">
            <LuShoppingCart />
            <h1>Start Shopping</h1>
          </button>
        </div>

        {/* right side */}

        <div className=" hidden md:flex bg-primarywhite rounded-full ">
          <Image
            src={require("../../../../public/images/hacka2.webp")}
            alt=""
            className=" relative bottom-6 "
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
