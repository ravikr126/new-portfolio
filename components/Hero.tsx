import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import { TypewriterEffectSmooth } from "./ui/TypewritterEffect";
import { GreetingWords } from "@/data";
import Link from "next/link";
import { CardSpotlight } from "./ui/CardSpotLight";
const Hero = () => {
  //  const words = [
  //   {
  //     text: "Build",
  //   },
  //   {
  //     text: "awesome",
  //   },
  //   {
  //     text: "apps",
  //   },
  //   {
  //     text: "with",
  //   },
  //   {
  //     text: "Aceternity.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className=" flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-8">
             {/* Image Section */}
             <div className=" lg:w-1/2 flex justify-center lg:justify-end items-center relative">
              <img
                src="/myimg.png"
                alt="Ravi Kumar"
                className="w-[80%] md:w-[60%] lg:w-full object-cover rounded-lg shadow-lg transform hidden lg:block pb-5 transition-transform"
                style={{ transformOrigin: "center center" }}
              />
            </div>

            
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="uppercase tracking-widest text-lg font-bold text-blue-100">
                Hi <FlipWords words={GreetingWords} /> 🚀 <br />
              </h1>
              <TextGenerateEffect
                words="Transforming Concepts into Seamless User Experiences"
                className="text-center lg:text-left text-[32px] md:text-4xl lg:text-5xl"
              />
              <p className="text-center lg:text-left md:tracking-wider mt-4 text-sm md:text-lg lg:text-xl">
                Hi! I&apos;m Ravi, a Full-Stack Developer based in India .
              </p>
            </div>

           
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
            {/* First Button: Link to Google Drive */}
            <Link
              href="https://drive.google.com/drive/u/0/folders/1G6h4x5Kl2Erj8NO3GgO5ES0Y-Q4KnUC5"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <MagicButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="
                      bg-gradient-to-r from-[#3A3A6D] to-[#1E1E3A] 
                      !text-white font-semibold w-full sm:w-[300px] 
                      rounded-lg shadow-lg transition-all duration-300 
                      hover:shadow-2xl hover:from-[#2A2A5A] hover:to-[#14142B]
    "
              />
            </Link>

            {/* Second Button: MagicButton (About Section) */}
            <a href="#about" className="w-full sm:w-auto">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="
        
        !text-white font-semibold w-full sm:w-[300px] 
        rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-2xl hover:from-[#00A8E0] hover:to-[#5A56D6]
      "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
