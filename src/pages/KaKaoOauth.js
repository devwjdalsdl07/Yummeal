import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

const KaKaoOauth = () => {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const close = () => {
    return window.close();
  };
  useEffect(() => {
    console.log(location);
    console.log(params);
    console.log(params.get("access_token"));
    localStorage.setItem("accessToken", params.get("access_token"));
    if (localStorage.getItem("accessToken")) {
      close();
    }
  }, []);

  return <div>KaKaoOauth</div>;
};

export default KaKaoOauth;
