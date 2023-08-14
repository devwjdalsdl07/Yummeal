import React from "react";
import { useNavigate } from "react-router";

const AdminMain = () => {
  const navigate = useNavigate();
  const Goadd = () => {
    navigate("/adminadd");
  };
  return (
    <div>
      AdminMain
      <button style={{ width: "300px", height: "300px" }} onClick={Goadd}>
        아이템 추가 ㄱㄱ
      </button>
    </div>
  );
};

export default AdminMain;
