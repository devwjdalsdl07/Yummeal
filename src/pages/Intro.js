import React from "react";
import { useNavigate } from "react-router";
import { IntroWrap } from "../style/IntroCss";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <IntroWrap>
      <div className="img-wrap">
        <h1>YUMMEAL</h1>
        <button onClick={() => navigate("/main")}>Enter</button>
      </div>
    </IntroWrap>
  );
};

export default Intro;
