import React from "react";
import BitcoinIcon from "../assets/icons/BitcoinIcon";
import slider2_img from "../assets/images/slider2_img.png";

export default function SliderTwo() {
  return (
    <div className="w-full slider_main">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="slider_1">
          <div className="flex flex-row items-center">
            <p className="spicy_rice ms-4 text-[64px] shanta_name">
              What is Santa TON?
            </p>
          </div>
          <div>
            <p className="w-full text-[17px] font-medium montserrat">
              Meet Santa Ton, your friendly neighborhood TON-giver! This festive
              figure, inspired by the legendary Santa Claus, uses our AI faucet
              to spread holiday cheer (and TON tokens) on celebration day.
            </p>
          </div>
          <div className="mt-6">
            <button className="relative rounded-full" href="#">
              <span class="rounded-full absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-black"></span>
              <span class="rounded-full fold-bold flex items-center justify-center relative inline-block h-full w-full border-2 border-black bg-white pt-5 pb-5 ps-10 pe-10 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <BitcoinIcon />{" "}
                <span className="ms-3 montserrat text-base font-medium">
                  Buy $Santa Ton
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-end lg:order-last md:order-last sm:order-first xs:order-first image_section">
          <img src={slider2_img} className="-mt-[100px]" alt="shanta-img" />
        </div>
      </div>
    </div>
  );
}
