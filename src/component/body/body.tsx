import contentImage1 from "/images/Thuê game miễn phí123 1.png";

const Body = () => {
  return (
    <>
      <section className="w-full xl:mt-[50px] min-h-[400px] xl:min-h-[650px] pb-10 overflow-hidden pt-10">
        <div className="flex justify-center flex-col md:flex-row items-center">
          <div className=" px-10 w-auto md:w-[60%] xl:w-[45%] h-full">
            <img src={contentImage1} alt="Banner Background" />
          </div>
          <div className="px-10 w-auto md:max-w-[36%] mt-5 xl:pt-24">
            <p className="text-[20px] md:text-[24px] xl:text-[40px] font-medium text-white py-2">
              Trò chơi bản quyền
            </p>
            <p className="text-[12px] md:text-[14px] xl:text-[24px] text-[#cdcfcf] font-medium py-2">
              Nhiều trò chơi bản quyền miễn phí.
            </p>
            <p className="text-[12px] md:text-[14px] xl:text-[24px] text-[#cdcfcf] font-medium py-4">
              Trải nghiệm hơn 1000+ game bản quyền hấp dẫn với mức giá ưu đãi.
            </p>
            <p className="text-[12px] md:text-[14px] xl:text-[24px] text-[#cdcfcf] font-medium py-4">
              Liên tục cập nhật trò chơi mới đáp ứng theo nhu cầu người dùng.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
