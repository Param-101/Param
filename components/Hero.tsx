"use client";

import Image from "next/image";
import logo from "@/public/images/HeroImage.png";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className=" grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary-400 to-secondary-600">
              Hello I Am{" "}
            </span>

            <br />

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Param Jot Singh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className=" text-slate-400 text-base sm:text-lg lg:text-xl mb-6">
            I'm a Software Engineer with a creative mind who likes to explore
            and learn. | Front-End Developer
          </p>

          <div className="">
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hire Me
            </button>

            <button className="px-1 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 w-full sm:w-fit">
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className=" col-span-4 place-self-center mt-4 lg:mt-0 relative">
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={logo}
              alt={"logo"}
              className=" rounded-full "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
