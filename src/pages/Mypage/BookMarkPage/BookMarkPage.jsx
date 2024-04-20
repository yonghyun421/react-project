import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import NewsCard from "../../../common/NewsCard/NewsCard";
import noImage from "../../../assets/noImage.jpg";
import "./BookMarkPage.style.css";

function BookMarkPage() {
  const bookmarkList = useSelector(state => state.auth.bookmarkList);
  const interestList = useSelector(state => state.auth.interestList);

  const newsList = [...bookmarkList];
  useEffect(() => {}, []);

  return (
    <div className="bookMarkPage--wrap">
      <div className="bookMarkPage--box">
        <p className="bookMarkPage--title">
          북마크한 뉴스
          <span>{bookmarkList ? bookmarkList.length : 0}</span>
        </p>
        <ul className="bookMarkPage--list">
          {newsList &&
            newsList.map(news => (
              <li key={news.id || news.url} className="bookMarkPage--thumb">
                {" "}
                <div className="bookMarkPage--thumb">
                  <img src={noImage} alt="noImage" />
                </div>
                <div className="bookMarkPage--contWrap">
                  <p className="bookMarkPage--name">{news.title}</p>
                  <p className="bookMarkPage--cont">
                    <div
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: news.description }}
                    />
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BookMarkPage;
