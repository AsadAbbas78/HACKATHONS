import React from "react";
import Image from "next/image";

const Producttype = () => {
  return (
    <main className="py-16 px-2 space-y-5">
      <div className="text-center space-y-5">
        <p className=" text-sm font-semibold text-[#1f01ff]">PROMOTIONS</p>

        <h1 className="text-4xl font-semibold"> Our Promotions Events</h1>
      </div>
      <main>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800 ">

          
          <div className="bg-cart w-full flex flex-col justify-between items-center  sm:flex-row col-span-1  md:col-span-2 px-12">
            <div className="py-8 max-w-[13rem]">
              <h1 className="text-4xl font-bold">GET UP TO 60%</h1>
              <p className="text-xl">For the summer season</p>
            </div>
            <div className="w-64">
              <Image
                src={require("../../../../public/images/female22.webp")}
                alt="female"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          

          <div className="bg-cart3 w-full row-span-1 h-full md:row-span-2  flex flex-col items-center">
            <div className="p-4">
              <h1>Flex Sweatshirt</h1>
              <p>
                <del>$100.00</del> &nbsp;{" "}
                <ins className="font-bold">$75.00</ins>
              </p>
            </div>
            <div className="bg-cart3 w-56">
              <Image
                src={require("../../../../public/images/flex sweatshirt 75.00.webp")}
                alt="sweetshirt"
                height={1000}
                width={1000}
              />
            </div>
          </div>

    

          <div className="bg-cart w-full row-span-1 h-full md:row-span-2  flex flex-col items-center">
            <div className="p-4">
              <h1>Flex Push Button Bomber</h1>
              <p>
                <del>$250.00</del>&nbsp;{" "}
                <ins className="font-bold">$190.00</ins>
              </p>
            </div>
            <div className=" w-72">
              <Image
                src={require("../../../../public/images/Flex_Push_Button_Bomber-removebg-preview.png")}
                alt="Button Bomber"
              />
            </div>
          </div>

        
          <div className="bg-cart2 w-full  md:col-span-2 col-auto text-white flex flex-col justify-center items-center space-y-3 py-9">
            <div>
              <h1 className="text-5xl font-bold">GET 30% Off</h1>
            </div>
            <div className="mt-6 text-center">
              <h1 className=" text-sm">USE PROMO CODE</h1>
              <button
                aria-label="Redirect user  to Dine Week End Sale"
                className="py-1 bg-[#474747] rounded-lg px-8 text-xl font-bold mt-2 lg:px-20 md:px-10 "
              >
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Producttype;
