"use client";
import { Nav } from "./components/Nav";
import { Background } from "./components/Background";

const Home = () => {
  return (
    <div className="relative w-screen flex overflow-y-visible">
      <Background />
      <Nav />
      {/* <!--content --> */}
      <main className=" flex-col relative w-full "></main>
    </div>
  );
};
export default Home;
