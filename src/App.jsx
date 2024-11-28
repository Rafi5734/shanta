import { useState } from "react";
import "./App.css";
import TelegramIcon from "../src/assets/icons/TelegramIcon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "./components/CustomButtonGroup";
import LeftIcon from "./assets/icons/LeftIcon";
import RightIcon from "./assets/icons/RightIcon";
import SliderOne from "./components/SliderOne";
import TwitterIcon from "./assets/icons/TwitterIcon";
import GitbookIcon from "./assets/icons/GitbookIcon";
import DiscordIcon from "./assets/icons/DiscordIcon";
import BitcoinIcon from "./assets/icons/BitcoinIcon";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Example Component
  const SlideContent = ({ text }) => {
    return <div className="p-4 bg-blue-500 rounded text-white">{text}</div>;
  };

  const slides = [
    { id: 1, content: <SliderOne /> },
    { id: 2, content: <SliderOne /> },
    { id: 3, content: <SliderOne /> },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#279dda] homepage_section">
      <div className="container mx-auto pt-6 pb-6">
        <div className="flex justify-between items-center navbar_top">
          <p className="montserrat text-[32px] leading-10 font-bold text-white">
            Santa Ton
          </p>
          <button className="relative rounded-full" href="#">
            <span className="rounded-full absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-black"></span>
            <span className="rounded-full fold-bold flex items-center justify-center relative inline-block h-full w-full border-2 border-black bg-white pt-5 pb-5 ps-10 pe-10 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              <TelegramIcon />{" "}
              <span className="ms-3 montserrat text-base font-medium">
                Start
              </span>
            </span>
          </button>
        </div>

        <div className="relative w-full max-w-full mx-auto overflow-hidden direction_btn">
          <div className="flex flex-row mt-[84.5px]">
            <button onClick={prevSlide} className="transform -translate-y-1/2">
              <LeftIcon />
            </button>
            <div className="transform -mt-1 flex gap-2 ms-4 me-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "w-6 bg-white" : "w-2 bg-white"
                  }`}
                ></button>
              ))}
            </div>
            <button onClick={nextSlide} className="transform -translate-y-1/2">
              <RightIcon />
            </button>
          </div>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`w-full flex-shrink-0 ${slide.bg} text-white`}
              >
                {slide.content}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white -mt-3 pt-6 pb-6 ps-[121px] pe-[121px] rounded-2xl footer_section">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <TelegramIcon />{" "}
              <p className="ms-2 montserrat text-sm font-medium icon_name">
                Telegram
              </p>
            </div>
            <div className="flex flex-row items-center">
              <TwitterIcon />{" "}
              <p className="ms-2 montserrat text-sm font-medium icon_name">
                X (Formerly Twitter)
              </p>
            </div>
            <div className="flex flex-row items-center">
              <GitbookIcon />{" "}
              <p className="ms-2 montserrat text-sm font-medium icon_name">
                Gitbook
              </p>
            </div>
            <div className="flex flex-row items-center">
              <DiscordIcon />{" "}
              <p className="ms-2 montserrat text-sm font-medium icon_name">
                Discord
              </p>
            </div>
            <div className="flex flex-row items-center">
              <BitcoinIcon />{" "}
              <p className="ms-2 montserrat text-sm font-medium icon_name">
                Buy $SANTA coin
              </p>
            </div>
          </div>

          <div>
            <hr className="mt-6 mb-6 bg-black border-1.5" />
            <p className="text-center text-[#000000A6] montserrat text-[13px]">
              © Copyright Santa Coin 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
