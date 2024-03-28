import React from "react";

export const Guides = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-1 py-10 px-48">
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/japGuide1.png')] bg-cover rounded-xl ">
          <h2 className="card-title text-orange-500 font-bold">
            Hiroto (大翔)
          </h2>
        </div>
      </div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/japGuide3.png')] bg-cover rounded-xl">
          <h2 className="card-title text-orange-500 font-bold">Yūna (結菜)</h2>
        </div>
      </div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-xl ">
        <div className="card-body bg-[url('/japGuide2.png')] bg-cover rounded-xl">
          <h2 className="card-title text-orange-500 font-bold">
            Minato ( 湊斗)
          </h2>
        </div>
      </div>
    </div>
  );
};
