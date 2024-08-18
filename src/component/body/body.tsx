import contentImage1 from "/images/Thuê game miễn phí123 1.png";

const Body = () => {
  return (
    <>
      <section className="w-full xl:mt-[50px] min-h-[650px] overflow-hidden pt-10">
        <div className="flex justify-center">
          <div className="w-[45%] h-full">
            <img src={contentImage1} alt="Banner Background" />
          </div>
          <div className="pl-12 max-w-[36%] pt-24">
            {" "}
            <p className="text-[40px] font-medium text-white py-2">
              Trò chơi bản quyền
            </p>
            <p className="text-[24px] text-[#cdcfcf] font-medium py-2">
              Nhiều trò chơi bản quyền miễn phí.
            </p>
            <p className="text-[24px] text-[#cdcfcf] font-medium py-4">
              Trải nghiệm hơn 1000+ game bản quyền hấp dẫn với mức giá ưu đãi.
            </p>
            <p className="text-[24px] text-[#cdcfcf] font-medium py-4">
              Liên tục cập nhật trò chơi mới đáp ứng theo nhu cầu người dùng.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
