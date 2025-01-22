import { lazy } from "react";

const Hero = lazy(() => import("@/sections/Task_2/hero-view"));
const SliderTask2 = lazy(() => import("@/sections/Task_2/slider"));
const Compainionship = lazy(() => import("@/sections/Task_2/compainionship"));

export default function Task_2() {
  return (
    <div className="container ">
      <Hero />
      <SliderTask2 />
      <Compainionship />
    </div>
  );
}
