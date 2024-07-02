import React from "react";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

const Hero = () => {
  return (
    <main>
      <div className="flex  justify-between items-center py-5 ">
        {/* left side */}
        <div className=" space-y-12 ">
          <button className="bg-[#e1edff] text-[#1f01ff] font-bold px-6 py-3 text-1xl font-serif rounded">
            Sale 70%
          </button>

          <h1 className="font-bold text-6xl">
            An Industrial Take <br /> on Streetwear
          </h1>
          <p className="text-1xl">
            Anyone can beat you but no one can beat your outfit as <br /> long
            as you wear Dine outfits.
          </p>

          <button className=" flex bg-[#212121] text-white items-center px-10 py-4 gap-2 font-bold text-1xl">
            <LuShoppingCart className="font-bold text-1xl" />
            <h1>Start Shopping</h1>
          </button>
          <br />
          <div className=" flex gap-14">
            <div className="w-12 md:w-24">
              <Image
                width={100}
                height={100}
                src={require("../../../../public/images/Logo Bazaar.webp")}
                alt=""
              />
            </div>
            <div className="w-12 md:w-24">
              <Image
                width={100}
                height={100}
                src={require("../../../../public/images/Logo Buster.webp")}
                alt=""
              />
            </div>
            <div className="w-12 md:w-24">
              <Image
                width={100}
                height={100}
                src={require("../../../../public/images/Logo Instyle.webp")}
                alt=""
              />
            </div>
            <div className="w-12 md:w-24">
              <Image
                width={100}
                height={100}
                src={require("../../../../public/images/Logo Versace.webp")}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="  hidden lg:flex bg-primarywhite rounded-full ">
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
