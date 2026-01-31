import React from "react";
import { RiAttachment2 } from "@remixicon/react";

const Contact = () => {
  return (
    <div className="">
      <div className="relative w-[84vw] justify-between">
        {/* // ---------------- Container Start ---------------------- */}
        <div className=" ml-30 h-[33vw] w-[60vw] mt-20 bg-gradient from-blue-500 to-green-400 pt-10">
          <div className="flex ml-20 h-[25vw] w-[50vw] bg-amber-200">
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
              <div className="flex mt-20 font-inter text-s gap-5">
                <h2 className="text-xs">FACEBOOK</h2>
                <h2 className="text-xs">TWITTER</h2>
                <h2 className="text-xs">INSTAGRAM</h2>
                <h2 className="text-xs">LINKEDIN</h2>
              </div>
            </div>
            <div className="bg-red-300 w-full pl-10">
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
              <button className="mt-14 bg-black text-white p-2 w-45 text-xs flex items-center justify-center">
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
