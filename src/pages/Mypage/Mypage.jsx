import React from "react";
import "./Mypage.style.css";
import noImage from "../../assets/noImage.jpg";

function Mypage() {
  return (
    <div className="myPage--wrap">
      <div className="myPage--box">
        <div className="profile--wrap">
          <div className="profile--img">
            <img src={noImage} alt="noImage" />
          </div>
          <div className="profile--info">
            <p className="profile-info__id">react20242</p>
            <ul>
              <li>
                뉴스
                <span>13</span>
              </li>
              <li>
                언론사
                <span>7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="">관심분야 설정</p>
          <ul className="">
            <li>
              <input type="checkbox" id="business" name="interest" />
              <label htmlFor="business">경제</label>
            </li>
            <li>
              <input type="checkbox" id="entertainment" name="interest" />
              <label htmlFor="entertainment">연예</label>
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
            <li>
              <input type="checkbox" id="technology" name="interest" />
              <label htmlFor="technology">기술</label>
            </li>
          </ul>
          <button type="button">저장</button>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
