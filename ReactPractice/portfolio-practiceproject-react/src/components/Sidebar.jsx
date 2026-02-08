import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterLine,
} from "@remixicon/react";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full min-h-screen lg:w-[16vw] bg-black text-white">
        <div>
          <h1 className="logo font-lora">Jac.</h1>
          <div className="flex flex-col gap-4 mt-4 ml-3 sm:mt-6 sm:ml-4 lg:mt-20 lg:ml-10">
            <Link className="title" to="./">
              HOME
            </Link>
            <Link className="title" to="./about">
              ABOUT
            </Link>
            <Link className="title" to="./services">
              SERVICES
            </Link>
            <Link className="title" to="./works">
              WORKS
            </Link>
            <Link className="title" to="./blogs">
              BLOGS
            </Link>
            <Link className="title" to="./contact">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="mt-12 ml-10 gap-2 ">
          <div className="">
            <div className="social">
              <RiInstagramLine />
            </div>
            <div className="social">
              <RiFacebookCircleLine />
            </div>
            <div className="social">
              <RiTwitterLine />
            </div>
          </div>
          <div className="h-10 w-40 items-center p-0.2 text-gray-300">
            <p className="mt-5 text-xs font-inconsolata">
              Copyright @2026 Jacob Jones.All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
