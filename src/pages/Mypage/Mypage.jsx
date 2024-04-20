import React from "react";
// import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { db } from "../../firebase-config";
import "./Mypage.style.css";
import noImage from "../../assets/noImage.jpg";
import NEWS_CATEGORY from "../../constants/NEWS_CATEGORY";

function Mypage() {
  const navigate = useNavigate();
  const userId = useSelector(state => state.auth.id);
  const bookmarkList = useSelector(state => state.auth.bookmarkList);
  const interestList = useSelector(state => state.auth.interestList);

  return (
    <div className="inner myPage--wrap">
      <h2>마이페이지</h2>
      <div className="myPage--box">
        <div className="profile--wrap">
          <div className="profile--img">
            <img src={noImage} alt="noImage" />
          </div>
          <div className="profile--info">
            <p className="profile--info__id">{userId}</p>
            <ul className="profile--info__bookmark">
              <li>
                <button type="button" onClick={() => navigate("/bookmark")}>
                  북마크한 뉴스
                  <span>{bookmarkList ? bookmarkList.length : 0}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile--like">
          <p className="profile--like__title">관심분야 설정</p>
          <ul className="profile--like__list">
            {NEWS_CATEGORY.map(category => {
              const isChecked =
                Array.isArray(interestList) &&
                interestList.some(
                  interest => interest.value === category.value,
                );

              return (
                <li key={category.value}>
                  <input
                    type="checkbox"
                    id={category.value}
                    name="interest"
                    defaultChecked={isChecked}
                  />
                  <label htmlFor={category.value}>
                    {category.categoryName}
                  </label>
                </li>
              );
            })}
          </ul>
          <button type="button" className="profile--btn">
            저장
          </button>
        </div>
      </div>
      <p className="member_delete">
        <button type="button" onClick={() => navigate("/")}>
          회원탈퇴
        </button>
      </p>
    </div>
  );
}

export default Mypage;
