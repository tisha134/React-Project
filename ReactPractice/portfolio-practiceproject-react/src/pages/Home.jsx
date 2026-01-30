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
    <div className="flex w-[84vw]">
      {/* // ---------------- Container Start  ---------------------- */}
      <div className="flex justify-between ml-20 h-[30vw] w-[68vw] mt-20">
        {/* // ---------------- Intro Container Start ---------------------- */}
        {/* <div className="w-[75vw] h-[40vw] bg-amber-500"> */}
        {/* // ---------------- Intro Start ---------------------- */}
        <div className="h-[27vw] w-[62vw] mt-11 ml-5">
          {/* --------- Name --------- */}
          <div className=" p-9 h-53 w-100 text-6xl font-inter leading-0.01">
            MY NAME IS <span className="font-bold">JACOB JONES...</span>
          </div>
          {/* --------- Profession -------- */}
          <div className="mt-2 ml-8 font-bold text-l w-71 font-inter italic">
            Product Designer <span className="font-thin">based in</span> London
          </div>
          {/* ---------- Message ---------- */}
          {/* <div className="pl-4 mt-10 w-65 bg-gray-400"> */}
          <button className="ml-8 mt-4 flex w-[30vh] font-semibold items-center p-1.5 gap-1 bg-black text-white justify-center">
            Let's talk to me <RiSendInsLine size={22} />
          </button>
          {/* </div> */}
          {/* ---------- Contact ---------- */}
          <div className="flex ml-5 mt-15 w-85 justify-between">
            <div className="flex items-center w-40 text-sm font-semibold gap-2">
              <RiPhoneLine size={16} />
              +77 022 444 05 05
            </div>
            <div className="flex items-center text-sm font-semibold gap-2">
              <RiMailLine size={16} /> jacob360@gmail.com
            </div>
          </div>
        </div>
        {/* // ---------------- Intro End ---------------------- */}
        {/* </div> */}
        {/* // ---------------- Intro Container End ---------------------- */}
        {/* --------- Image Container ------------ */}
        <div className="w-[50vw] h-[30vw] mr-15">
          <img
            src="../src/assets/images/img.png"
            alt=""
            className="h-[32vw] w-[30vw]"
          />
        </div>
        {/* --------- Image Container ------------ */}
      </div>
      {/* // ---------------- Container End ---------------------- */}
      {/* ----------- Side Corner ------------ */}
      <div className="relative items-center h-[16vw] mt-50 ml-30">
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
