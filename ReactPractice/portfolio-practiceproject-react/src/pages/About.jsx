import React from "react";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiAccountBoxLine,
  RiArrowRightUpLine,
} from "@remixicon/react";

const About = () => {
  return (
    // {------------body start-------------}
    <div className="flex  w-[84vw]">
      {/* ------------ Main Container Start -------------- */}
      <div className="w-[71vw] mt-20 h-[81vw] ">
        {/* ------------- upper div Start---------- */}
        <div className="flex h-[37vw] w-[63vw] ml-25 bg-red-200">
          {/* ------------- Picture Container Start---------- */}
          <div className="w-[25vw]">
            <h3 className="h3class">Nice to meet you!</h3>
            <h1 className="h1full">WELCOME TO...</h1>
            <img
              src="../src/assets/images/img2.png"
              className="h-65 w-65 mt-7"
              alt=""
            />
            <h1 className="ml-5 mt-5 h1full">JACOB JONES</h1>
            <div className="font-bold italic ml-1">
              Product Designer <span className="font-thin">based in</span>{" "}
              London
            </div>
            <h3 className="text-xs ml-22 mt-10 underline items-center flex gap-1">
              Download CV
              <RiArrowRightUpLine size={18} className="bg-black text-white" />
            </h3>
          </div>
          {/* ------------- Picture Container End---------- */}
          {/* ------------- Detail Container Start---------- */}
          <div className="w-[39vw] bg-amber-600">
            {/* ------------- Upper Detail Container Start---------- */}
            <div className="flex mt-18 ml-5 gap-10 w-120">
              <div className="text-sm font-semibold">
                <h3 className="flex items-center gap-3 mb-4">
                  <RiPhoneLine size={16} />
                  +77 022 444 05 05
                </h3>
                <h3 className="flex items-center gap-3">
                  <RiMailLine size={16} /> jacob360@gmail.com
                </h3>
              </div>
              <div className="text-sm font-semibold">
                <h3 className="flex items-center gap-3 mb-4">
                  <RiAccountBoxLine size={16} />
                  25
                </h3>
                <h3 className="flex items-center gap-3">
                  <RiMapPinLine size={16} />
                  United Kingdom, London
                </h3>
              </div>
            </div>
            {/* ------------- Upper Detail Container End---------- */}
            <div className="h-px bg-gray-400 w-[39vw] mt-5 mb-5"></div>
            {/* ------------- Lower Detail Container Start---------- */}

            <div className="flex ml-5 w-120">
              <div className="w-60">
                <div className="flex w-43 items-center">
                  <h1 className="font-inter">10+</h1>
                  <div className="ml-5 font-inter italic font-bold leading-tight">
                    Years experience...
                  </div>
                </div>
                <p className="exp w-56">
                  Hello there! My name is Jacob Jones. I am a web designer &
                  developer, and I'm very passionate and dedicated to my work.
                </p>
              </div>
              <div className="">
                <div className="flex w-43 items-center">
                  <h1 className="font-inter">14</h1>
                  <div className="ml-5 font-inter italic font-bold leading-tight">
                    Clients Worldwide...
                  </div>
                </div>
                <p className="exp w-56">
                  With 10+ years experience as a professional a graphic
                  designer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </p>
              </div>
            </div>
            <div className="inner">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit laboriosam ullam debitis architecto
              cumque quasi"
            </div>
            {/* ------------- Lower Detail Container End---------- */}
          </div>

          {/* ------------- Detail Container End---------- */}
        </div>

        {/* ------------- upper div End---------- */}
        {/* ------------- Lower div Start---------- */}
        <div className="flex h-[36vw] w-[70vw] bg-amber-200 mt-15 pt-20 pl-20 gap-30">
          {/* ------------- Left div Start---------- */}
          {/* <div className=" flex bg-blue-300 h-[30vw] w-[60vw] p-15 ml-5"> */}
          <div className=" w-[25vw] ">
            <h3 className="h3class mb-3">Experience</h3>
            <h1 className="h1full mb-3">MY EXPERIENCE</h1>
            <p className="exp w-70">
              Hello there! My name is Jacob <br></br> I am a web designer &
              developer, and I'm very passionate and dedicated to my work.
            </p>
            <button className="mt-15 bg-black text-white p-3 w-55 text-xs flex items-center justify-center">
              Download my resume
              <RiArrowRightUpLine size={20} className="bg-amber-700" />
            </button>
          </div>
          {/* ------------- Left div Start---------- */}
          {/* ------------- Right div Start---------- */}
          <div>
            <div>
              <div className="h3class experience">
                <div>-2018-Present</div>
                <div>-Rolling thunder</div>
              </div>
              <h1 className="h1full mb-10">LEAD UI/UX DESIGNER</h1>
            </div>
            <div>
              <div className="h3class experience">
                <div>-2018-2010</div>
                <div>-Locost Accessories</div>
              </div>
              <h1 className="h1full mb-10">SENIOR UI/UX DESIGNER</h1>
            </div>
            <div>
              <div className="h3class experience">
                <div>-2008-2006</div>
                <div>-Sagebrush</div>
              </div>
              <h1 className="h1full mb-10">JUNIOR UI/UX DESIGNER</h1>
            </div>
          </div>
          {/* ------------- Left div Start---------- */}
          {/* </div> */}
        </div>

        {/* ------------- Lower div End---------- */}
      </div>
      {/* ------------ Main Container Start -------------- */}
    </div>
    // {------------body end-------------}
  );
};

export default About;
