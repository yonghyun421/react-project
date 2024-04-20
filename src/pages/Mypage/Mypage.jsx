import React from "react";
import "./Mypage.style.css";
import { Link } from "react-router-dom";
import noImage from "../../assets/noImage.jpg";

function Mypage() {
  return (
    <div className="myPage--wrap">
      <h2>마이페이지</h2>
      <div className="myPage--box">
        <div className="profile--wrap">
          <div className="profile--img">
            <img src={noImage} alt="noImage" />
          </div>
          <div className="profile--info">
            <p className="profile--info__id">react20242</p>
            <ul className="profile--info__bookmark">
              <li>
                <Link to="/mypage/bookmark">
                  뉴스
                  <span>13</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile--like">
          <p className="profile--like__title">관심분야 설정</p>
          <ul className="profile--like__list">
            <li>
              <input type="checkbox" id="business" name="interest" />
              <label htmlFor="business">경제</label>
            </li>
            <li>
              <input type="checkbox" id="entertainment" name="interest" />
              <label htmlFor="entertainment">연애</label>
            </li>
            <li>
              <input type="checkbox" id="general" name="interest" />
              <label htmlFor="general">일반</label>
            </li>
            <li>
              <input type="checkbox" id="health" name="interest" />
              <label htmlFor="health">건강</label>
            </li>
            <li>
              <input type="checkbox" id="science" name="interest" />
              <label htmlFor="science">과학</label>
            </li>
            <li>
              <input type="checkbox" id="sports" name="interest" />
              <label htmlFor="sports">스포츠</label>
            </li>
          </ul>
          <button type="button" className="profile--btn">
            저장
          </button>
        </div>
      </div>
      <p className="member_delete">
        <Link to="/">회원탈퇴</Link>
      </p>
    </div>
  );
}

export default Mypage;
