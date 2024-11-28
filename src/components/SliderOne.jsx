import React from "react";
import profilePic from "../assets/images/profile_pic.png";

export default function SliderOne() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20">
        <div>
          <div className="flex flex-row items-center">
            <img src={profilePic} alt="profilePic" />
            <p className="spicy_rice ms-4 text-[64px]">Santa TON</p>
          </div>
          <div>
            <p className="text-[17px] font-medium montserrat">
              Santa TON is a memecoin built on the TON blockchain with a
              specific utility function.
            </p>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}
