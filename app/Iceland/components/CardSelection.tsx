import React from "react";
import {
  MdOutlineExplore,
  MdOutlineHotel,
  MdFlightTakeoff,
  MdRadio,
} from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
export const CardSelection = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-2 md:grid-row-3 gap-2 md:gap-4 md:px-48 px-10">
      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl group-hover:bg-orange-500 duration-500">
            <MdOutlineExplore className="w-full h-full group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Explore!</h2>
          <p>See the sights and plan your next great adventure.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white duration-500">
              Explore!
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl group-hover:bg-orange-500 duration-500">
            <MdFlightTakeoff className="w-full h-full group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Travel!</h2>
          <p>
            Book your flight and domestic travel with our easy to use
            application
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white duration-500">
              Travel!
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl group-hover:bg-orange-500 duration-500">
            <TiWeatherPartlySunny className="w-full h-full group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Weather!</h2>
          <p>Make sure you're prepared for your next exciting excursion</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white duration-500">
              Weather!
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl group-hover:bg-orange-500">
            <MdOutlineHotel className="w-full h-full group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>See our selection of unique and beautiful hotels and Bnbs.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white duration-500">
              Stay!
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl   group-hover:bg-orange-500">
            <PiBookOpenTextLight className="w-full h-full  group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Blog!</h2>
          <p>
            Read some of the stunning blogs and reviews from previous customers.
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white duration-500">
              Read!
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl duration-500 group">
        <figure>
          <div className="bg-slate-500 w-72 h-3/4 rounded-r-2xl group-hover:bg-orange-500">
            <MdRadio className="w-full h-full group-hover:text-white duration-500" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Podcast!</h2>
          <p>Catch us in our weekly podcast for QnA.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-500 group-hover:bg-orange-500 group-hover:text-white">
              Podcast!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
