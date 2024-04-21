import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "../../../common/NewsCard/NewsCard";
import "./BookMarkPage.style.css";

function BookMarkPage() {
  const bookmarkList = useSelector(state => state.auth.bookmarkList);

  const newsList = [...bookmarkList];

  return (
    <div>
      <div className="news-list-total">
        <div className="news-list-title">북마크한 뉴스</div>
        <ul className="news-list-box">
          {newsList &&
            newsList.map(news => (
              <li key={news.id || news.url}>
                {" "}
                <NewsCard articles={news} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BookMarkPage;
