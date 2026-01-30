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
    <div className="flex relative">
      <div className=" flex flex-col min-h-screen w-[16vw] bg-black text-white">
        <div>
          <h1 className="relative logo font-lora">Jac.</h1>
          <div className="relative flex flex-col mt-20 ml-10 gap-4">
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
        <div className="mt-22 ml-10 gap-2 ">
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
