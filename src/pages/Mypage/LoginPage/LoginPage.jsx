import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import authenticateAction from "../../../redux/acticon/authenticateAction";
import { db } from "../../../firebase-config";
import Input from "../component/Input/Input";
import "./LoginPage.style.css";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    userId: { invalid: false, invalidText: "" },
    userPassword: { invalid: false, invalidText: "" },
  });

  const handleLogin = async event => {
    event.preventDefault();
    if (!userId) {
      setErrorMessages({
        userId: {
          invalid: true,
          invalidText: "아이디를 입력해주세요.",
        },
        userPassword: {
          invalid: false,
          invalidText: "",
        },
      });
      return;
    }
    if (!password) {
      setErrorMessages({
        userId: {
          invalid: false,
          invalidText: "",
        },
        userPassword: {
          invalid: true,
          invalidText: "비밀번호를 입력해주세요.",
        },
      });
      return;
    }
    if (userId) {
      const userIdQuery = query(
        collection(db, "USER"),
        where("userId", "==", userId),
      );
      const userIdquerySnapshot = await getDocs(userIdQuery);

      if (userIdquerySnapshot.empty) {
        // 아이디 없음
        setErrorMessages({
          userId: { invalid: true, invalidText: "존재하지 않는 아이디입니다." },
          userPassword: { invalid: false, invalidText: "" },
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
          setErrorMessages({
            userId: { invalid: false, invalidText: "" },
            userPassword: {
              invalid: true,
              invalidText: "비밀번호가 틀렸습니다.",
            },
          });
        } else {
          // 비밀번호 일치함
          const userData = querySnapshot.docs[0].data();
          const bookmarkList = userData.bookmark;
          dispatch(authenticateAction.login(userId, password, bookmarkList));
          navigate("/");
        }
      }
    }
  };

  return (
    <div className="inner">
      <div className="input--box">
        <div className="logo">Newstab</div>
        <Input
          placeholder="아이디"
          value={userId}
          invalid={errorMessages.userId.invalid}
          invalidText={errorMessages.userId.invalidText}
          onChange={event => setUserId(event.target.value)}
        />
        <Input
          type="password"
          value={password}
          invalid={errorMessages.userPassword.invalid}
          placeholder="비밀번호"
          invalidText={errorMessages.userPassword.invalidText}
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
