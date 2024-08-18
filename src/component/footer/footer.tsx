import {
  faDiscord,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "/images/LOGO-CYBER-KING-1.png";
import logoATM from "/footer/ATM.png";
import logoMomo from "/footer/Momo.png";
import logoVNpay from "/footer/VNpay.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181927] text-white">
      <div className="container mx-auto flex justify-between py-6">
        <div className="flex flex-col justify-between space-y-4">
          <div className="cursor-pointer relative top-2 min-w-[140px] flex justify-start">
            <img
              src={logoImage}
              alt="Cyber King Logo"
              width={140}
              height={50}
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <img src={logoVNpay} alt="Payment 3" width={40} height={40} />
            <img src={logoMomo} alt="Payment 2" width={40} height={40} />
            <img src={logoATM} alt="Payment 1" width={40} height={40} />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-[22px] pb-2">Thông tin liên hệ</h3>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhoneVolume} width={15} />
            <span className="text-base font-semibold">
              Điện thoại: 0901.552.900
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} width={15} />
            <span className="text-base font-semibold">
              Email: sinhle2807@gmail.com
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faFacebook} width={15} />
            <span className="text-base font-semibold">
              Fanpage: Fb.com/CyberKingVietNam/
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLocationDot} width={15} />
            <span className="text-base font-semibold">
              Địa chỉ: Số 69 đường số 16, phường 15, quận 11, Tp Hồ Chí Minh
            </span>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-[22px] pb-2">Cộng đồng</h3>
          <a
            href="https://www.facebook.com/groups/cyberkingvietnam"
            className="flex items-center space-x-2 text-[#D1D1D4] hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebook} width={20} />
            <span className="text-base font-semibold">Facebook</span>
          </a>
          <a
            href="https://discord.gg/TcqaEq2RnJ"
            className="flex items-center space-x-2 text-[#D1D1D4] hover:text-white"
          >
            <FontAwesomeIcon icon={faDiscord} width={20} />
            <span className="text-base font-semibold">Discord</span>
          </a>
          <a
            href="https://www.youtube.com/@kiancharo"
            className="flex items-center space-x-2 text-[#D1D1D4] hover:text-white"
          >
            <FontAwesomeIcon icon={faYoutube} width={20} />
            <span className="text-base font-semibold">YouTube</span>
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-[22px] pb-2">Chính sách</h3>
          <a
            href="https://docs.google.com/document/d/1vdZiU2qPnGOsW4qpMm5CkerCP4ZYIvGYhxQ1vsFsmeE"
            className="text-base font-semibold text-[#D1D1D4] hover:text-white"
          >
            Chính sách bảo mật
          </a>
          <a
            href="https://docs.google.com/document/d/1vdZiU2qPnGOsW4qpMm5CkerCP4ZYIvGYhxQ1vsFsmeE"
            className="text-base font-semibold text-[#D1D1D4] hover:text-white"
          >
            Chính sách bảo hành
          </a>
          <a
            href="https://docs.google.com/document/d/1vdZiU2qPnGOsW4qpMm5CkerCP4ZYIvGYhxQ1vsFsmeE"
            className="text-base font-semibold text-[#D1D1D4] hover:text-white"
          >
            Chính sách sử dụng dịch vụ
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-600" />
      <div className="text-center font-medium py-4 text-[#9BA0A0] text-base">
        Copyright © 2024 CYBERKING. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
