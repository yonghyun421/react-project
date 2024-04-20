import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Input from "../component/Input/Input";
import "./LoginPage.style.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="inner">
      <div className="input--box">
        <div className="logo">Newstab</div>
        <Input placeholder="아이디" invalidText="존재하지 않는 아이디입니다." />
        <Input
          type="password"
          placeholder="비밀번호"
          invalidText="비밀번호가 틀렸습니다."
        />
        <Button className="custom--button">로그인</Button>
        <button
          type="button"
          className="link"
          onClick={() => navigate("/mypage/join")}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
