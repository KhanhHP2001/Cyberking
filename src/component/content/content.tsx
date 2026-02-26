import React from "react";
import contentImage2 from "/images/Muc game cua Trang chi tiet sp 1.png";
// import iconDownload from "/images/Download.png";

const Content: React.FC = () => {
  return (
    <>
      <section className="w-full min-h-[670px] bg-[#1D1E2B] py-20">
        <div className="flex md:justify-center items-center flex-col-reverse md:flex-row">
          <div className="px-4 md:px-12 w-auto my-5 md:max-w-[40%]">
            <p className="text-[20px] md:text-[24px] xl:text-[40px] font-medium text-white">
              Giải pháp kinh doanh toàn diện dành cho chủ đầu tư phòng net.
            </p>
            <p className="text-[12px] xl:text-[22px] text-[#cdcfcf] py-2 font-medium">
              - Lợi ích:
            </p>
            <div className="ml-4">
              <p className="text-[12px] xl:text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Tải phần mềm được phát triển chuyên nghiệp dành riêng cho phòng
                net.
              </p>
              <p className="text-[12px] xl:text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Đa dạng hóa dịch vụ, tối ưu doanh thu đến từ phòng net của bạn.
              </p>
              <p className="text-[12px] xl:text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Sử dụng trang quản lý doanh thu tự động của chúng tôi để xem
                doanh số trực tiếp đến từ phòng net của bạn, nhận % doanh thu và
                hàng trăm lợi ích khác.
              </p>
            </div>
            <p className="text-[22px] text-[#cdcfcf] py-2 font-medium">
              - Liên hệ hợp tác ngay:
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="flex flex-col">
                <a href="tel:0901552900" target="_blank" className="text-[22px] text-[#cdcfcf] font-medium before:content-['\2022\0020'] before:text-[#cdcfcf]">
                  Hotline: <span className="text-[#FF9A23]">0901552900</span>
                </a>
                <a href="mailto:sinhle2807@gmail.com" target="_blank" className="text-[22px] text-[#cdcfcf] font-medium before:content-['\2022\0020'] before:text-[#cdcfcf]">
                  Email:{" "}
                  <span className="text-[#FF9A23]">sinhle2807@gmail.com</span>
                </a>
              </div>
              <a
                href="tel:0901552900"
                target="_blank"
                className="ml-0 mt-5 md:mt-0 ml-0 md:ml-5 bg-gradient-to-r opacity-100 hover:opacity-70 flex justify-center items-center from-[#5e89f2e6] to-[#d88fe2e6] text-white px-4 py-[10px] rounded-xl"
              >
                {/* <img
                  src={iconDownload}
                  alt="Banner Background"
                  className="h-8 mr-2"
                /> */}
                Liên hệ hợp tác
              </a>
            </div>
          </div>
          <div className="w-auto mt-5 md:mt-0 md:w-[50%] h-full ">
            <img src={contentImage2} alt="Banner Background" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Content;
