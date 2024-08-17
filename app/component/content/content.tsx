import React from "react";
import contentImage2 from "../../../public/images/Muc game cua Trang chi tiet sp 1.png";
import iconDownload from "../../../public/images/Download.png";
import Image from "next/image";

export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <>
      <section className="w-full min-h-[670px] bg-[#1D1E2B] pt-20">
        <div className="flex justify-center">
          <div className="px-12 max-w-[40%]">
            <p className="text-[40px] font-medium text-white">
              Giải pháp kinh doanh toàn diện dành cho chủ đầu tư phòng net.
            </p>
            <p className="text-[22px] text-[#cdcfcf] py-2 font-medium">
              - Lợi ích:
            </p>
            <div className="ml-4">
              <p className="text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Tải phần mềm được phát triển chuyên nghiệp dành riêng cho phòng
                net.
              </p>
              <p className="text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Đa dạng hóa dịch vụ, tối ưu doanh thu đến từ phòng net của bạn.
              </p>
              <p className="text-[22px] text-[#cdcfcf] before:content-['\2022\0020\0020\0020'] before:text-[#cdcfcf] font-medium">
                Sử dụng trang quản lý doanh thu tự động của chúng tôi để xem
                doanh số trực tiếp đến từ phòng net của bạn, nhận % doanh thu và
                hàng trăm lợi ích khác.
              </p>
            </div>
            <p className="text-[22px] text-[#cdcfcf] py-2 font-medium">
              - Liên hệ hợp tác ngay:
            </p>
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-[22px] text-[#cdcfcf] font-medium before:content-['\2022\0020'] before:text-[#cdcfcf]">
                  Hotline: <span className="text-[#FF9A23]">0901552900</span>
                </div>
                <div className="text-[22px] text-[#cdcfcf] font-medium before:content-['\2022\0020'] before:text-[#cdcfcf]">
                  Email:{" "}
                  <span className="text-[#FF9A23]">sinhle2807@gmail.com</span>
                </div>
              </div>
              <a
                href="/CyberKingSetup0.1.0.exe"
                className="ml-8 bg-gradient-to-r opacity-100 hover:opacity-70 flex justify-center items-center from-[#5e89f2e6] to-[#d88fe2e6] text-white px-4 py-[10px] rounded-xl"
              >
                <Image
                  src={iconDownload}
                  alt="Banner Background"
                  className="h-8 mr-2"
                />
                Tải xuống bản hợp tác
              </a>
            </div>
          </div>
          <div className="w-[50%] h-full ">
            <Image src={contentImage2} alt="Banner Background" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
