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
  const [errorType, setErrorType] = useState(null);
  const [loginError, setLoginError] = useState(false);

  // errorType
  // 0: 입력 안됨
  // 1: 존재하지 않는 아이디
  // 2: 비밀번호 오류

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
        setErrorType(1);
      } else {
        // navigate("/mypage");
        // 아이디 있음
        const userQuery = query(
          collection(db, "USER"),
          where("userId", "==", userId),
          where("userPassword", "==", password),
        );
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
          // 비밀번호까지 일치하는 회원정보 없음
          setErrorType(2);
          setLoginError(true);
        } else {
          // 비밀번호 일치함
          setLoginError(false);
          navigate("/");
        }
      }
    } else {
      setErrorType(0);
    }
  };

  useEffect(() => {
    console.log(errorType);
  }, [errorType]);

  return (
    <div className="inner">
      <div className="input--box">
        <div className="logo">Newstab</div>
        <Input
          placeholder="아이디"
          value={userId}
          invalid={loginError}
          invalidText={
            errorType === 0
              ? "아이디와 비밀번호를 입력해주세요."
              : "존재하지 않는 아이디입니다."
          }
          onChange={event => setUserId(event.target.value)}
        />
        <Input
          type="password"
          value={password}
          invalid={loginError}
          placeholder="비밀번호"
          invalidText="비밀번호가 틀렸습니다."
          onChange={event => setPassword(event.target.value)}
        />
        <button type="button" className="custom--button" onClick={handleLogin}>
          로그인
        </button>
        <button type="button" className="link">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
