import React from "react";
import { CgCopyright } from "react-icons/cg";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
export const Nav = () => {
  return (
    <div className=" navbar justify-between sticky top-0 z-20 w-20 h-screen bg-slate-400/20  backdrop-blur-lg drop-shadow-lg flex-col">
      <div className="dropdown text-slate-300">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <RxHamburgerMenu size={25} className="hover:text-orange-500" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="divider-vertical bg-slate-300/40 w-1 rounded-2xl h-1/2"></div>
      <div>
        <ul className="menu  ">
          <li className="p-2">
            <button className="rounded-lg text-slate-400 hover:text-orange-500 ">
              <AiOutlineInstagram size={25} />
            </button>
          </li>
          <li className="p-2">
            <button className="rounded-lg text-slate-400 hover:text-orange-500 ">
              <AiOutlineFacebook size={25} />
            </button>
          </li>
          <li className="p-2">
            <button className="rounded-lg text-slate-400 hover:text-orange-500 ">
              <AiOutlineTwitter size={25} />
            </button>
          </li>
        </ul>
      </div>
      <div className="divider-vertical  bg-slate-300/40 w-1 rounded-full h-1/2"></div>
      <div className="py-16 flex-row text-md w-fit -rotate-90 text-center whitespace-nowrap ">
        <CgCopyright size={20} />
        <h1 className="mx-1">X-olodays</h1>
      </div>
    </div>
  );
};
