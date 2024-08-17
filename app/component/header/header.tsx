import Image from "next/image";
import React from "react";
import iconDownload from "../../../public/images/Download.png";

const Header = () => {
  return (
    <section className="relative w-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#28283b] ">
      <video
        className="absolute top-0 left-0 w-full object-fill"
        autoPlay
        loop
        muted
      >
        <source src="/video/VideoFullBanner 2.mp4" type="video/mp4" />
      </video>
      <div className=" ml-12 xl:mt-44 w-full h-full flex items-center z-10">
        <a
          href="/CyberKingSetup0.1.0.exe"
          className="bg-gradient-to-r from-[#5e89f2e6] to-[#d88fe2e6] text-white px-4 py-3 rounded-xl opacity-100 hover:opacity-70 flex items-center"
        >
          <Image src={iconDownload} alt="Download Icon" className="mr-2" />
          Tải xuống phần mềm
        </a>
      </div>
    </section>
  );
};

export default Header;
