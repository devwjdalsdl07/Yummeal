import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const KakaoPayment = () => {
  const location = useLocation();
  const { state } = location;
  console.log("카카오페이먼트", state.qrUrl.qrCodePage)
  return (
    <div>
      이동하기
      <Link to={`${state.qrUrl.qrCodePage}`}>{state.qrUrl.qrCodePage}</Link>
    </div>
  );
};

export default KakaoPayment;
