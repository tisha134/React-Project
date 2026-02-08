import React from "react";
import { RiCircleFill } from "@remixicon/react";

const Services = () => {
  return (
    <div className=" ml-27 mt-10 w-[65vw] h-[40vw]">
      <h3 className="h3class mb-3">Services</h3>
      <h1 className="h1full mb-5">My SPECIALTIES</h1>

      <div className=" p-2">
        <div className="flex items-center justify-center">
          <RiCircleFill size={32} />
          <div className="w-[70vw] h1full ">WEB DESIGN</div>
          <div className=" w-[120vw] ml-50 text-xs">
            You can customize a template or make your own from scratch,
            <br></br> with an immersive library at your disposal. You can
            customize a template
          </div>
          <h2 className="text-5xl">+</h2>
        </div>
        <div className="h-px bg-gray-300"></div>
        <div className="flex items-center">
          <RiCircleFill size={32} />
          <div className="w-[70vw] h1full ">UI/UX DESIGN</div>
          <div className=" w-[120vw] ml-50 text-xs">
            You can customize a template or make your own from scratch,
            <br></br> with an immersive library at your disposal. You can
            customize a template
          </div>
          <h2 className="text-5xl">+</h2>
        </div>
        <div className="h-px bg-gray-300"></div>

        <div className="flex items-center">
          <RiCircleFill size={32} />
          <div className="w-[80vw] h1full">MOBILE APPLICATION</div>
          <div className="flex flex-col w-[35vw]">
            <img
              src="../src/assets/images/img3.png"
              className="h-[10vw] w-[25vw] mt-2 mb-2 ml-20"
              alt=""
            />
            <div className=" w-[35vw] text-xs mb-2 ml-20">
              You can customize a template or make your own from scratch,
              <br></br> with an immersive library at your disposal. You can
              customize a template
            </div>
          </div>

          <h2 className="text-5xl">+</h2>
        </div>
        <div className="h-px bg-gray-300"></div>

        <div className="flex items-center">
          <RiCircleFill size={32} />
          <div className="w-[90vw] h1full ">USER RESEARCH</div>
          <div className=" w-[120vw] ml-35 text-xs">
            You can customize a template or make your own from scratch,
            <br></br> with an immersive library at your disposal. You can
            customize a template
          </div>
          <h2 className="text-5xl">+</h2>
        </div>
        <div className="h-px bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Services;
