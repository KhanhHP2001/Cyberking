import iconDownload from "/images/Download.png";

const Header = () => {
  return (
    <section className="relative w-screen xl:min-h-[900px] md:min-h-[500px] min-h-[200px] flex items-center justify-center overflow-hidden bg-transparent ">
      <video
        className="absolute top-0 left-0 w-full object-fill"
        autoPlay
        loop
        muted
      >
        <source src="/video/VideoFullBanner 2.mp4" type="video/mp4" />
      </video>
      <div className="md:ml-6 xl:ml-12 hidden lg:ml-9 xl:mt-36 lg:mt-24 w-full h-full md:flex items-center z-10">
        <a
          // href="/CyberKingSetup0.1.0.exe"
          className="bg-gradient-to-r from-[#5e89f2e6] text-[12px] md:text-[16px] xl:text-[20px] to-[#d88fe2e6] text-white px-4 py-3 rounded-xl opacity-100 hover:opacity-70 flex items-center"
        >
          <img src={iconDownload} alt="Download Icon" className="mr-2" />
          Tải xuống phần mềm
        </a>
      </div>
    </section>
  );
};

export default Header;
