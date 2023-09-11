import React from "react";
import { useParams } from "react-router";

const SNS = () => {
  const snsResult = useParams();
  console.log("========================= SNS");
  console.log(snsResult);
  console.log("=========================");
  return (
    <h1 style={{ fontSize: 200, textAlign: "center" }}>
      SNS 로그인 됨{snsResult.access_token}
    </h1>
  );
};

export default SNS;
