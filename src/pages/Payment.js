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
      font-size: 2rem;
      font-weight: 700;
    }
    button {
      margin-top: 2rem;
      padding: 0.5rem;
      border-radius: 0.7rem;
      border: 0.1rem solid;
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
