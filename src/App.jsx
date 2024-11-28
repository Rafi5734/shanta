import { useState } from "react";
import "./App.css";
import TelegramIcon from "../src/assets/icons/TelegramIcon";

function App() {
  return (
    <section className="bg-[#279dda] homepage_section">
      <div className="container mx-auto pt-6 pb-6">
        <div className="flex justify-between items-center navbar_top">
          <p className="montserrat text-[32px] leading-10 font-bold text-white">
            Santa Ton
          </p>
          <button class="relative rounded-full" href="#">
            <span class="rounded-full absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-black"></span>
            <span class="rounded-full fold-bold flex items-center justify-center relative inline-block h-full w-full border-2 border-black bg-white pt-5 pb-5 ps-10 pe-10 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              <TelegramIcon /> <span className="ms-3 montserrat text-base font-medium">Start</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
