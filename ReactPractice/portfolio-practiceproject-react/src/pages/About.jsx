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
    <div className="flex flex-col lg:flex-row w-full lg:w-[84vw] lg:mx-auto px-4">
      {/* ------------ Main Container Start -------------- */}
      <div className="w-full lg:w-[71vw] mt-6 lg:mt-20 min-h-[60vh] lg:h-[81vw]">
        {/* ------------- upper div Start---------- */}
        <div className="flex w-full lg:w-[63vw] mt-6 lg:mt-0 lg:ml-6 h-auto lg:h-[37vw] bg-red-200">
          {/* ------------- Picture Container Start---------- */}
          <div className="w-full lg:w-[25vw]">
            <h3 className="h3class">Nice to meet you!</h3>
            <h1 className="h1full">WELCOME TO...</h1>
            <img
              src="../src/assets/images/img2.png"
              className="w-40 h-40 sm:w-52 sm:h-52 lg:w-65 lg:h-65 mt-4 sm:mt-6 lg:mt-7 object-cover"
              alt=""
            />
            <h1 className="ml-2 mt-2 lg:ml-5 lg:mt-5 h1full">JACOB JONES</h1>
            <div className="font-bold italic ml-1 lg:ml-4">
              Product Designer <span className="font-thin">based in</span>{" "}
              London
            </div>
            <h3 className="text-xs mt-7 ml-4 sm:ml-6 lg:ml-25 underline flex items-center gap-1">
              Download CV
              <RiArrowRightUpLine size={18} className="bg-black text-white" />
            </h3>
          </div>
          {/* ------------- Picture Container End---------- */}
          {/* ------------- Detail Container Start---------- */}
          <div className="w-full lg:w-[39vw] bg-amber-600">
            {/* ------------- Upper Detail Container Start---------- */}
            <div className="flex flex-col sm:flex-row mt-6 sm:mt-10 ml-2 sm:ml-5 gap-4 sm:gap-10 w-full sm:w-auto lg:w-[30rem]">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                <h3 className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                  <RiPhoneLine size={16} />
                  +77 022 444 05 05
                </h3>
                <h3 className="flex flex-col sm:flex-row items-center gap-3">
                  <RiMailLine size={16} /> jacob360@gmail.com
                </h3>
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                <h3 className="flex flex-col sm:flex-row items-center gap-3 mb-4 sm:mb-6 lg:mb-8">
                  <RiAccountBoxLine size={16} />
                  25
                </h3>
                <h3 className="flex flex-col sm:flex-row items-center gap-3 mb-4 sm:mb-6 lg:mb-8">
                  <RiMapPinLine size={16} />
                  United Kingdom, London
                </h3>
              </div>
            </div>
            {/* ------------- Upper Detail Container End---------- */}
            <div className="h-px bg-gray-400 w-full sm:w-[39vw] mt-2 sm:mt-5 mb-2 sm:mb-5"></div>
            {/* ------------- Lower Detail Container Start---------- */}

            <div className="flex w-full sm:w-auto lg:w-[30rem] ml-2 sm:ml-5">
              <div className="w-full sm:w-60">
                <div className="flex flex-col sm:flex-row w-full sm:w-43 items-center">
                  <h1 className="font-inter text-lg sm:text-xl">10+</h1>
                  <div className="mt-2 sm:mt-0 sm:ml-5 font-inter italic font-bold leading-tight text-sm sm:text-base">
                    Years experience...
                  </div>
                </div>
                <p className="exp w-full sm:w-56">
                  Hello there! My name is Jacob Jones. I am a web designer &
                  developer, and I'm very passionate and dedicated to my work.
                </p>
              </div>
              <div className="">
                <div className="flex flex-col sm:flex-row w-full sm:w-43 items-center">
                  <h1 className="font-inter text-lg sm:text-xl">14</h1>
                  <div className="mt-2 sm:mt-0 sm:ml-5 font-inter italic font-bold leading-tight text-sm sm:text-base">
                    Clients Worldwide...
                  </div>
                </div>

                <p className="exp w-full sm:w-56">
                  With 10+ years experience as a professional a graphic
                  designer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-120 bg-black text-white text-xs sm:text-sm font-semibold ml-2 sm:ml-5 mt-2 sm:mt-7 p-8 sm:px-10 sm:py-4">
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
