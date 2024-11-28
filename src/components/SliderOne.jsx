import React from "react";
import profilePic from "../assets/images/profile_pic.png";
import CopyIcon from "../assets/icons/CopyIcon";
import shanta_img from "../assets/images/shanta_img.png";
import TelegramIcon from "../assets/icons/TelegramIcon";

export default function SliderOne() {
  return (
    <div className="w-full slider_main">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="slider_1">
          <div className="flex flex-row items-center">
            <img src={profilePic} alt="profilePic"/>
            <p className="spicy_rice ms-4 text-[64px] shanta_name">Santa TON</p>
          </div>
          <div>
            <p className="w-full text-[17px] font-medium montserrat">
              Santa TON is a memecoin built on the TON blockchain with a
              specific utility function.
            </p>
          </div>
          <div className="mt-4">
            <div className="flex flex-col">
              <p className="montserrat text-base font-semibold mb-2">
                Token Addresss
              </p>
              <div className="relative w-full">
                <input
                  type="text"
                  id="search-dropdown"
                  className="montserrat font-medium rounded-lg block pt-4 ps-6 pb-4 pe-6 w-full z-20 text-base text-white bg-[#FFFFFF1A] border-2 border-white"
                  placeholder="Search"
                  defaultValue="EQATcUc69sGSCCMSadsVUKdGwM1BMKS-HKCW..."
                  required
                />
                <button className="flex justify-center items-center absolute top-0 end-0 p-2.5 w-[72px] h-full text-sm font-medium text-white bg-white rounded-e-lg border-2 border-white hover:bg-yellow-500">
                  <CopyIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="relative rounded-full" href="#">
              <span class="rounded-full absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-black"></span>
              <span class="rounded-full fold-bold flex items-center justify-center relative inline-block h-full w-full border-2 border-black bg-white pt-5 pb-5 ps-10 pe-10 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <TelegramIcon />{" "}
                <span className="ms-3 montserrat text-base font-medium">
                  Buy $Santa Ton
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-end lg:order-last md:order-last sm:order-first xs:order-first image_section">
          <img src={shanta_img} className="-mt-[100px]" alt="shanta-img" />
        </div>
      </div>
    </div>
  );
}
