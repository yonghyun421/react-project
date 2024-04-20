import React, { useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import noImage from "../../../assets/noImage.jpg";
import "./BookMarkPage.style.css";

async function BookMarkPage() {
  const [bookmarkList, setBookmarkList] = useState(null);

  // Firestore에서 userId 검증
  // const userQuery = query(
  //   collection(db, "USER"),
  //   where("userId", "==", newUserId),
  // );
  // const querySnapshot = await getDocs(userQuery);

  return (
    <div className="bookMarkPage--wrap">
      <div className="bookMarkPage--box">
        <p className="bookMarkPage--title">
          북마크한 뉴스
          <span>13</span>
        </p>
        <ul className="bookMarkPage--list">
          <li>
            <div className="bookMarkPage--thumb">
              <img src={noImage} alt="noImage" />
            </div>
            <div className="bookMarkPage--contWrap">
              <p className="bookMarkPage--name">뉴스제목</p>
              <p className="bookMarkPage--cont">
                뉴스내용 입니다. 뉴스내용 입니다. 뉴스내용 입니다. 뉴스내용
                입니다. 뉴스내용 입니다. 뉴스내용 입니다. 뉴스내용 입니다.
                뉴스내용 입니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookMarkPage;
