import styled from "@emotion/styled";
import React from "react";

const Payment = () => {
  const PaymentWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48rem;
    text-align: center;
    p {
      font-size: 3rem;
      font-weight: 700;
    }
    button {
      margin-top: 2rem;
      padding: 1rem 6rem;
      font-weight: 800;
      border-radius: 1rem;
      background-color: #fff;
      border: 1px solid #d1d1d1;
      color: #3f3f3f;
      &:hover {
        background-color: #8eb111;
        color: white;
        border: none;
      }
    }
  `;

  const handleGoBack = () => {
    window.close();
  };

  return (
    <PaymentWrap>
      <div>
        <p>결제 완료</p>
        <button onClick={handleGoBack}>돌아가기</button>
      </div>
    </PaymentWrap>
  );
};

export default Payment;
