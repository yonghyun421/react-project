import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../component/Input/Input";

function JoinPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userIdIsValid, setUserIdIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;

  const handleUserIdChange = event => {
    setUserId(event.target.value);
    // 아이디 유효성 검사 로직 추가 필요
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    setPassword(value);
    setPasswordIsValid(passwordRegex.test(value));
  };

  const handleConfirmPasswordChange = event => {
    const { value } = event.target;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  return (
    <div className="inner">
      <div className="input--box">
        <div className="logo">Newstab</div>
        <Input
          type="text"
          value={userId}
          placeholder="사용할 아이디를 입력해주세요."
          onChange={handleUserIdChange}
          invalid={!userIdIsValid}
          invalidText="이미 사용중인 아이디입니다."
        />
        <Input
          type="password"
          value={password}
          placeholder="영문소문자와 숫자 조합, 6자리 이상"
          onChange={handlePasswordChange}
          invalid={!passwordIsValid}
          invalidText="비밀번호는 영문 소문자와 숫자 조합, 6자리 이상이어야 합니다."
        />
        <Input
          type="password"
          value={confirmPassword}
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={handleConfirmPasswordChange}
          invalid={!passwordsMatch}
          invalidText="비밀번호가 일치하지 않습니다."
        />
        <Button className="custom--button">회원가입</Button>
      </div>
    </div>
  );
}

export default JoinPage;
