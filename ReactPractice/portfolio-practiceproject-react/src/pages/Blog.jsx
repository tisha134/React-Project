import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

const Blog = () => {
  return (
    <div className="relative w-[84vw] justify-between">
      {/* // ---------------- Container Start ---------------------- */}
      <div className=" ml-30 h-[33vw] w-[60vw] mt-20">
        <div className="ml-80">
          <h3 className="h3class pt-2 ml-24">Blog</h3>
          <h1 className="h1full">READ MY BLOG</h1>
        </div>
        <div className="flex mt-7 ml-8 gap-15">
          <div className="h-60 w-60">
            <img src="../src/assets/images/img13.png" alt="" />
            <h3 className="h3class mt-3 mb-1">10 July, 2022</h3>
            <p className="font-inter font-semibold text-l">
              12 Unique Example of <br /> portfolio website
            </p>
            <div className="w-60 h-px bg-gray-400 mt-3"></div>
          </div>
          <div className="h-60 w-60">
            <img src="../src/assets/images/img14.png" alt="" />
            <h3 className="h3class mt-3 mb-1">10 July, 2022</h3>
            <p className="font-inter font-semibold text-l">
              12 Unique Example of <br /> portfolio website
            </p>
            <div className="w-60 h-px bg-gray-400 mt-3"></div>
          </div>
          <div className="h-60 w-60">
            <img src="../src/assets/images/img15.png" alt="" />
            <h3 className="h3class mt-3 mb-1">10 July, 2022</h3>
            <p className="font-inter font-semibold text-l">
              12 Unique Example of <br /> portfolio website
            </p>
            <div className="w-60 h-px bg-gray-400 mt-3"></div>
          </div>
        </div>

        <button className="mt-20 ml-90 bg-black text-white p-2 w-45 text-xs gap-2 flex items-center justify-center">
          Load more{" "}
          <RiArrowRightUpLine
            size={20}
            className="bg-linear-to-r from-purple-500 via-red-400 to-orange-500"
          />
        </button>
      </div>
      {/* // ---------------- Container End ---------------------- */}
    </div>
  );
  // ---------------- Main Start ----------------------
};

export default Blog;
