import Image from "next/image";
import React from "react";
import iconDownload from "../../../public/images/Download.png";

const Header = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#232534] ">
      <div className="relative w-full h-full">
        <video
          className="absolute top-0 left-0 w-screen h-screen object-fill"
          autoPlay
          loop
          muted
        >
          <source src="/video/VideoFullBanner 2.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <Image src={backgroundImage} alt="Banner Background" />
        </div> */}
        <div className="absolute top-[75px] left-[3%] w-full h-full flex items-center">
          <a
            href="/CyberKingSetup0.1.0.exe"
            className="bg-gradient-to-r from-[#5e89f2e6] to-[#d88fe2e6] text-white px-4 py-3 rounded-xl flex items-center"
          >
            <Image src={iconDownload} alt="Download Icon" className="mr-2" />
            Tải xuống bản hợp tác
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
