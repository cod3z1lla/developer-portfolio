// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#581c87] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#581c87]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#d946ef] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">AI Engineering</h3>
              <p>{personalData.about.ai_engineering}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Programming</h3>
              <p>{personalData.about.competitive_programming}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Research</h3>
              <p>{personalData.about.research}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={320}
            height={280}
            alt="Muhammad Shahzaib Tariq"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;