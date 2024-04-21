import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import Input from "../component/Input/Input";
import LogoBlackImage from "../../../assets/logo_black.svg";

import "../LoginPage/LoginPage.style.css";

function JoinPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userIdIsValid, setUserIdIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);

  const [userIdTouched, setUserIdTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [isCheckingUserId, setIsCheckingUserId] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;

  const handleUserIdChange = async event => {
    const newUserId = event.target.value;
    setUserId(newUserId);
    if (!userIdTouched) setUserIdTouched(true);

    setIsCheckingUserId(true);
    const userQuery = query(
      collection(db, "USER"),
      where("userId", "==", newUserId),
    );
    const querySnapshot = await getDocs(userQuery);
    setUserIdIsValid(querySnapshot.empty);
    setIsCheckingUserId(false);
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    setPassword(value);
    if (!passwordTouched) setPasswordTouched(true);
    setPasswordIsValid(passwordRegex.test(value));
  };

  const handleConfirmPasswordChange = event => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (!confirmPasswordTouched) setConfirmPasswordTouched(true);
    setPasswordsMatch(value === password);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      !userIdIsValid ||
      !passwordIsValid ||
      !passwordsMatch ||
      !userId ||
      !password ||
      confirmPassword !== password
    ) {
      return; // 유효성 검사 실패
    }
    try {
      await addDoc(collection(db, "USER"), {
        userId,
        userPassword: password,
        bookmarkList: [],
        interestList: [],
      });
      // eslint-disable-next-line
      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } catch (error) {
      throw new Error("Error adding document: ", error);
    }
  };

  return (
    <div className="inner">
      <form className="input--box" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={LogoBlackImage} alt="Newstap" />
        </div>
        <Input
          type="text"
          value={userId}
          placeholder="사용할 아이디를 입력해주세요."
          onChange={handleUserIdChange}
          invalid={userIdTouched && !isCheckingUserId && !userIdIsValid}
          invalidText="이미 사용중인 아이디입니다."
        />
        <Input
          type="password"
          value={password}
          placeholder="영문소문자와 숫자 조합, 6자리 이상"
          onChange={handlePasswordChange}
          invalid={passwordTouched && !passwordIsValid}
          invalidText="비밀번호는 영문 소문자와 숫자 조합, 6자리 이상이어야 합니다."
        />
        <Input
          type="password"
          value={confirmPassword}
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={handleConfirmPasswordChange}
          invalid={confirmPasswordTouched && !passwordsMatch}
          invalidText="비밀번호가 일치하지 않습니다."
        />
        <button type="submit" className="custom--button">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default JoinPage;
