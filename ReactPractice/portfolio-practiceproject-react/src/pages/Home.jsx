import React from "react";
import {
  RiSendInsLine,
  RiPhoneLine,
  RiMailLine,
  RiGlobalLine,
  RiInstagramLine,
  RiFacebookLine,
} from "@remixicon/react";

const Home = () => {
  return (
    // ---------------- Main Start ----------------------
    <div className="flex flex-col lg:flex-row w-full px-4 lg:px-0 min-h-screen lg:w-full">
      {/* // ---------------- Container Start  ---------------------- */}
      <div
        className="flex flex-col lg:flex-row justify-between 
                lg:ml-15 lg:pb-2 mt-12 lg:mt-20 
                w-full lg:w-[68vw] lg:h-[35vw]"
      >
        {/* // ---------------- Intro Start ---------------------- */}
        <div className="w-full lg:w-[62vw] mt-6 lg:mt-11 lg:ml-5 text-center lg:text-left">
          {/* --------- Name --------- */}
          <div className="p-4 lg:p-9 text-3xl sm:text-4xl lg:text-6xl font-inter">
            MY NAME <br /> IS <span className="font-bold">JACOB JONES...</span>
          </div>
          {/* --------- Profession -------- */}
          <div className="mt-2 lg:ml-8 font-bold text-sm lg:text-lg font-inter italic">
            Product Designer <span className="font-thin">based in</span> London
          </div>
          {/* ---------- Message ---------- */}
          {/* <div className="pl-4 mt-10 w-65 bg-gray-400"> */}
          <button
            className="mx-auto lg:ml-8 mt-4 flex w-52 
                   font-semibold items-center p-2 gap-2 
                   bg-black text-white justify-center"
          >
            Let's talk to me <RiSendInsLine size={22} />
          </button>
          {/* </div> */}
          {/* ---------- Contact ---------- */}
          <div
            className="flex flex-col sm:flex-row 
                justify-center lg:justify-between 
                items-center mt-8 lg:ml-2 lg:w-[25vw]"
          >
            <div className="flex items-center text-sm font-semibold gap-2">
              <RiPhoneLine size={16} />
              +77 022 444 05 05
            </div>
            <div className="flex items-center text-sm font-semibold gap-2">
              <RiMailLine size={16} /> jacob360@gmail.com
            </div>
          </div>
        </div>
        {/* // ---------------- Intro End ---------------------- */}
        {/* --------- Image Container ------------ */}
        <div className="w-full lg:w-[50vw] mt-10 lg:mt-0 flex justify-center lg:h-[35vw]">
          <img
            src="../src/assets/images/img.png"
            alt=""
            className="object-cover"
          />
        </div>
        {/* --------- Image Container ------------ */}
      </div>
      {/* // ---------------- Container End ---------------------- */}
      {/* ----------- Side Corner ------------ */}
      <div
        className="hidden lg:flex flex-col items-center 
                relative h-[16vw] mt-50 ml-30"
      >
        <div className="sideSocial">
          <RiInstagramLine size={16} />
        </div>
        <div className="sideSocial">
          <RiGlobalLine size={16} />
        </div>
        <div className="sideSocial">
          <RiFacebookLine size={16} />
        </div>
        <div className="bg-gray-500 w-px ml-3 mt-2 h-40"></div>
      </div>
      {/* ----------- Side Corner ------------ */}
    </div>
    // ---------------- Main Start ----------------------
  );
};

export default Home;
