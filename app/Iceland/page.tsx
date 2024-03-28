import { Nav } from "../components/Nav";
import { ImageSlider } from "./components/ImageSlider";
import { CardSelection } from "./components/CardSelection";
import { Guides } from "./components/Guides";
import { Title } from "./components/Title";
import { IcelandBackground } from "./components/IcelandBackground";

export default function Iceland() {
  return (
    <div className="relative w-screen flex overflow-y-visible">
      <IcelandBackground />
      <Nav />

      {/* <!--content --> */}
      <div className=" flex-col relative w-full ">
        <Title />
        <ImageSlider />
        <div className="  px-14 py-10 w-full flex relative justify-center ">
          <h1 className="text-4xl text-slate-800 font-bold bg-slate-400/20 py-5 backdrop-blur-lg drop-shadow-lg rounded-2xl w-96 text-center">
            Plan your{" "}
            <span className="text-orange-500 drop-shadow-lg">
              next adventure
            </span>
          </h1>
        </div>
        <CardSelection />
        <div className=" px-14 py-10 w-full flex relative justify-center">
          <h1 className="text-4xl text-slate-800 font-bold bg-slate-400/20 py-5 backdrop-blur-lg drop-shadow-lg rounded-2xl w-96 text-center">
            Meet the{" "}
            <span className="text-orange-500 drop-shadow-lg">world class</span>{" "}
            guides
          </h1>
        </div>
        <Guides />
        <div className="w-screen h-80 bg-slate-800 pb-10 mt-10">
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
            <div className="col-span-2 text-5xl font-bold">
              <div className="w-full h-full flex relative justify-center items-center flex-col">
                <h1>
                  <span className="text-orange-500/60 ">X</span>-holidays
                </h1>
                <div className="divider-horizontal bg-orange-300/40 w-5/6 rounded-2xl h-1 mt-2"></div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="w-full h-full flex flex-col relative justify-start items-center">
                <h1 className="text-3xl font-bold m-3">Address</h1>
                <text className="text-2xl  m-2">121 King St, London</text>
                <text className="text-2xl  m-2">LO66 332, United Kingdom</text>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="w-full h-full flex flex-col relative justify-start items-center">
                <h1 className="text-3xl font-bold m-3">Contact</h1>
                <text className="text-2xl  m-2">(+44) 7559 223441</text>
                <text className="text-2xl  m-2">xholidays@xtech.net</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
