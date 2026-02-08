import React from "react";
import {
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiArrowLeftLine,
} from "@remixicon/react";

const Works = () => {
  return (
    // {------------body start-------------}
    <div className="flex  w-[84vw]">
      {/* ------------ Main Container Start -------------- */}
      <div className="w-[73vw] mt-10 h-[85vw] ">
        {/* ------------- upper div Start---------- */}
        <div className="flex h-auto w-[63vw] ml-23 mt-3 ">
          <div>
            <h3 className="h3class mb-2">Work</h3>
            <h1 className="h1full">RECENT PROJECT</h1>

            <div className="flex gap-20">
              <div className="flex">
                <div className="">
                  <h3 className="h3class mb-2">UX case STudy</h3>
                  <h1 className="h1short w-30">Bally website Research</h1>
                  <RiArrowRightUpLine size={50} />
                </div>
                <img src="../src/assets/images/img4.png" className="imgclass" />
              </div>
              <div className="flex">
                <div className="">
                  <h3 className="h3class mb-2">UX case STudy</h3>
                  <h1 className="h1short  w-30">Bally website Research</h1>
                  <RiArrowRightUpLine size={50} />
                </div>
                <img src="../src/assets/images/img5.png" className="imgclass" />
              </div>
            </div>
            <div className="flex  mt-5 gap-20">
              <div className="flex">
                <div className="">
                  <h3 className="h3class mb-2">UX case STudy</h3>
                  <h1 className="h1short  w-30">Bally website Research</h1>
                  <RiArrowRightUpLine size={50} />
                </div>
                <img src="../src/assets/images/img6.png" className="imgclass" />
              </div>
              <div className="flex">
                <div className="">
                  <h3 className="h3class mb-2">UX case STudy</h3>
                  <h1 className="h1short  w-30">Bally website Research</h1>
                  <RiArrowRightUpLine size={50} />
                </div>
                <img src="../src/assets/images/img7.png" className="imgclass" />
              </div>
            </div>

            <button className="mt-5 ml-90 bg-black text-white p-2 w-45 text-xs gap-2 flex items-center justify-center">
              Learn more{" "}
              <RiArrowRightUpLine
                size={20}
                className="bg-gradient-to-r from-purple-500 via-red-400 to-orange-500"
              />
            </button>
          </div>
        </div>
        {/* ------------- Upper div End---------- */}

        {/* ------------- Lower div Start---------- */}

        <div className="h-[36vw] w-[63vw] bg-gradient-to-r from-purple-500 via-red-400 to-orange-500 mt-18 ml-23">
          <div className=" w-[50vw] pt-15 ml-25 h-[33vw]">
            <div>
              <h3 className="h3class mb-3 ml-80">Testimonial</h3>
              <h1 className="h1full ml-60 text-white">WHAT THEY SAY</h1>
            </div>
            <div>
              <div className=" flex h-[20vw] gap-40">
                <img src="../src/assets/images/img8.png" alt="" />
                <div className="mt-15 font-inter font-semibold italic text-m leading-5 text-white">
                  <p className=" w-[20vw]">
                    “ File storage made easy – including powerful features you
                    won’t find <br /> anywhere else. Whether you’re.”
                  </p>
                  <h2 className="mt-5">-Larry Diamond</h2>
                  <h3 className="h3class mt-2">
                    {" "}
                    Chief Executive Officer, Besnik
                  </h3>
                  <div className="flex gap-2 mt-5">
                    {" "}
                    <button className="arrow">
                      <RiArrowLeftLine />
                    </button>
                    <button className="arrow">
                      <RiArrowRightLine />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50vw] h-px bg-gray-400"></div>
            <div className="flex ml-5 mt-4 gap-18 items-center">
              <div className="w-30 h-20">
                <img src="../src/assets/images/img9.png" alt="" />
              </div>
              <div className="w-30 h-20">
                <img src="../src/assets/images/img10.png" alt="" />
              </div>
              <div className="w-30 h-20 mb-3">
                <img src="../src/assets/images/img11.png" alt="" />
              </div>
              <div className="w-30 h-20">
                <img src="../src/assets/images/img12.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ------------- Lower div End---------- */}
      </div>
      {/* ------------ Main Container Start -------------- */}
    </div>
    // {------------body end-------------}
  );
};

export default Works;
