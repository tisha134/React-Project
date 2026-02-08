import React from "react";
import { RiAttachment2 } from "@remixicon/react";

const Contact = () => {
  return (
    <div className="">
      <div className="relative w-[84vw]">
        {/* // ---------------- Container Start ---------------------- */}
        <div className=" ml-30 h-auto w-[60vw] mt-20 gap-10">
          <div className="flex ml-5 h-auto w-[50vw] gap-20">
            <div className="w-[20vw] h-full">
              <h3 className="h3class mb-2">Contact</h3>
              <h1 className="h1full">REACH OUT ME</h1>
              <h3 className="font-inter italic text-sm leading-5 mt-5">
                249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC
                3000, London.
              </h3>
              <h1 className="mt-20 text-l font-montserrat">
                +77 022 444 05 05
              </h1>
              <h1 className="mt-2 text-l font-montserrat">
                jacob360@gmail.com
              </h1>
              <div className="flex mt-15 font-inter text-s gap-1">
                <h2 className="text-xs">FACEBOOK</h2>
                <h2 className="text-xs">TWITTER</h2>
                <h2 className="text-xs">INSTAGRAM</h2>
                <h2 className="text-xs">LINKEDIN</h2>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 via-red-400 to-orange-500 w-full pl-10 pb-5">
              <h1 className="h1full mt-6 mb-4">ANY PROJECT?</h1>
              <div className="flex gap-6 mt-10">
                <textarea
                  placeholder="Name"
                  id=""
                  className="border-t-0 border border-l-0 border-r-0 h-7  focus:outline-none"
                ></textarea>
                <textarea
                  placeholder="Email"
                  id=""
                  className="h-7 border-t-0 border border-l-0 border-r-0  focus:outline-none"
                ></textarea>
              </div>
              <textarea
                placeholder="Message"
                id=""
                className="border-t-0 border border-l-0 border-r-0 h-7 focus:outline-none mt-15 w-92 mb-2"
              ></textarea>
              <h2 className="flex mb-10 gap-1">
                <RiAttachment2 />
                Attach File
              </h2>
              <button className="mt-12 bg-black text-white p-2 w-45 text-xs flex items-center justify-center">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
