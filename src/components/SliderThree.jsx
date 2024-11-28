import React from "react";
import sliderThree_img from "../assets/images/slider3_img.png";
import BitcoinIcon from "../assets/icons/BitcoinIcon";
import IndicateIcon from "../assets/icons/IndicateIcon";

export default function SliderThree() {
  return (
    <div className="w-full slider_main slider3_main_wrapper">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="slider_1">
          <div className="flex flex-row items-center">
            <p className="spicy_rice text-[64px] shanta_name">Tokenomics</p>
          </div>
          <div className="">
            <p className="w-full text-[17px] font-medium montserrat">
              No team allocation, no hidden reserves, no pre-sales. 100% fair
              launch for the community.
            </p>
          </div>
          <div className="relative w-full mt-4">
            <div className="flex">
              <span className="font-semibold text-[17px] w-[156px] montserrat inline-flex items-center justify-center px-3 text-sm text-gray-900 bg-white border rounded-e-0 border-gray-300 border-e-0 rounded-s-lg hover:bg-yellow-500 cursor-pointer">
                Total Supply
              </span>
              <input
                type="text"
                id="search-dropdown"
                className="montserrat font-medium rounded-e-lg block pt-4 ps-6 pb-4 pe-6 w-full z-20 text-base text-white bg-[#FFFFFF1A] border-2 border-white"
                placeholder="Search"
                defaultValue="420,690,000,000,000"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="montserrat text-[17px] font-medium">
              Lorem ipsum dolor sit amet consectetur. Massa id mi pulvinar
              pellentesque elementum lorem. Eu pellentesque a vestibulum auctor
              in eget vel.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mt-4">
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
            <div className="flex flex-row items-center">
              <IndicateIcon /> <p className="montserrat text-base font-medium ms-4">Liquidity - 22%</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center lg:order-last md:order-last sm:order-first xs:order-first image_section image3_main">
          <img src={sliderThree_img} className="-mt-[60px]" alt="shanta-img" />
        </div>
      </div>
    </div>
  );
}
