import React from "react";

export const Guides = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-1 py-10 px-48">
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/iceGuide1.png')] bg-cover rounded-xl ">
          <h2 className="card-title text-orange-500 font-bold">
            Guðmundur Erikson
          </h2>
        </div>
      </div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/iceGuideW3.png')] bg-cover rounded-xl">
          <h2 className="card-title text-orange-500 font-bold">
            Anna Jónsdóttir
          </h2>
        </div>
      </div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/iceGuide2.png')] bg-cover rounded-xl">
          <h2 className="card-title text-orange-500 font-bold">
            Kristófer Sigurdsson
          </h2>
        </div>
      </div>
    </div>
  );
};
