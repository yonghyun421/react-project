import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import Input from "../component/Input/Input";
import "./LoginPage.style.css";

function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    userIdInvalidText: "",
    userPasswordInvalidText: "",
  });

  const handleLogin = async event => {
    event.preventDefault();
    setLoginError(null);

    if (userId) {
      const userIdQuery = query(
        collection(db, "USER"),
        where("userId", "==", userId),
      );
      const userIdquerySnapshot = await getDocs(userIdQuery);

      if (userIdquerySnapshot.empty) {
        // 아이디 없음
        setErrorMessages({
          userIdInvalidText: "존재하지 않는 아이디입니다.",
          userPasswordInvalidText: "",
        });
      } else {
        // 아이디 있음
        const userQuery = query(
          collection(db, "USER"),
          where("userId", "==", userId),
          where("userPassword", "==", password),
        );
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
          // 비밀번호까지 일치하는 회원정보 없음
          setLoginError(true);
          setErrorMessages({
            userIdInvalidText: "",
            userPasswordInvalidText: "비밀번호가 틀렸습니다.",
          });
        } else {
          // 비밀번호 일치함
          setLoginError(false);
          navigate("/");
        }
      }
    } else {
      setErrorMessages({
        userIdInvalidText: "아이디를 입력해주세요.",
        userPasswordInvalidText: "비밀번호를 입력해주세요.",
      });
    }
  };

  return (
    <div className="inner">
      <div className="input--box">
        <div className="logo">Newstab</div>
        <Input
          placeholder="아이디"
          value={userId}
          invalid={loginError}
          invalidText={errorMessages.userIdInvalidText}
          onChange={event => setUserId(event.target.value)}
        />
        <Input
          type="password"
          value={password}
          invalid={loginError}
          placeholder="비밀번호"
          invalidText={errorMessages.userPasswordInvalidText}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="button" className="custom--button" onClick={handleLogin}>
          로그인
        </button>
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
