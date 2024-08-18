import { useEffect } from "react";
import CheckIcon from "/Check.svg";
import TransactionErrIcon from "/TransactionErr.svg";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const electronConstants = {
  RELOAD_PROTOCOL_LINK: "cyberking://reload-user",
};

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const transactionID = searchParams.get("vnp_TxnRef");
  const transactionStatus = searchParams.get("vnp_TransactionStatus");
  const cardType = searchParams.get("vnp_CardType");
  const isSuccess = transactionStatus === "00";

  const handleSubmitTransactionResult = async () => {
    if (!transactionID || !cardType) {
      return;
    }
    try {
      const result = await axios.post(
        "http://152.42.164.132:5002/update-payment-order-status",
        {
          orderId: JSON.parse(transactionID),
          cardType: cardType,
        }
      );
      if (result) {
        setTimeout(() => {
          window.location.href = electronConstants.RELOAD_PROTOCOL_LINK;
        }, 5000);
        return;
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setTimeout(() => {
        window.location.href = electronConstants.RELOAD_PROTOCOL_LINK;
      }, 5000);
    }
  };

  useEffect(() => {
    handleSubmitTransactionResult();
  }, [isSuccess]);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <img
          className="checked"
          src={isSuccess ? CheckIcon : TransactionErrIcon}
          alt="check icon"
        />
        <h2 className="text-2xl">
          {isSuccess
            ? `Giao dịch hoàn tất, bạn sẽ tự động quay trở lại ứng dụng sau 5 giây hoặc bấm xác nhận đề quay trở về ứng dụng ngay`
            : `Giao dịch thất bại, vui lòng thử lại sau`}
        </h2>
        <a href={electronConstants.RELOAD_PROTOCOL_LINK} className="">
          <button className="bg-[#0e6fad] text-[#ffffff] px-3 py-2 rounded-xl hover:opacity-70">
            Xác Nhận
          </button>
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
