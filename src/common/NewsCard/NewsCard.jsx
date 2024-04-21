import React from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { db } from "../../firebase-config";
import "./NewsCard.style.css";
import { authenticateActions } from "../../redux/reducer/authenticateSlice";

function NewsCard({ articles }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.auth.id);
  const bookmarkList = useSelector(state => state.auth.bookmarkList);

  const updateBookmarks = async () => {
    const currentBookmarkList = Array.isArray(bookmarkList) ? bookmarkList : [];

    const articleExists = currentBookmarkList.some(
      // eslint-disable-next-line
      item => item.url === articles.url,
    );

    const newBookmarkList = articleExists
      ? currentBookmarkList
      : [...currentBookmarkList, articles];

    const usersRef = collection(db, "USER");
    const q = query(usersRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0].ref;

      await updateDoc(userDoc, {
        bookmarkList: newBookmarkList,
      });
      dispatch(authenticateActions.updateBookmarks(newBookmarkList));
    } else {
      console.log("No matching documents found");
    }
  };

  const extractNumber = url => {
    if (!url) return null;
    const numericPart = url.match(/\d+/g);
    if (numericPart) {
      const numericString = numericPart.join("");
      return Number(numericString.substr(0, 15));
    }
    return null;
  };

  const newsDetailPage = () => {
    const newsId = extractNumber(articles ? articles.url : null);
    navigate(`/news/${newsId}`, { state: { articleData: articles } });
  };

  return (
    <div className="newscard-area">
      <button
        type="button"
        className={`bookmark ${articles.isBookmarked ? "active" : ""}`}
        onClick={updateBookmarks}>
        북마크
      </button>
      <div
        onClick={newsDetailPage}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            newsDetailPage();
          }
        }}
        role="button"
        tabIndex={0}>
        <div
          className="news-card"
          style={{
            backgroundImage: `url(${articles.urlToImage ? articles.urlToImage : "/nodata.png"})`,
          }}
          //   onClick={() => navigate(`/movies/${articles.id}`)}
        >
          <div className="overlay p-2" />
        </div>
        {articles && (
          <div className="article-contents">
            <div className="article-title">{articles.title}</div>
            <div className="article-description">{articles.description}</div>
            <div className="article-author">{articles.author}</div>
          </div>
        )}
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  articles: PropTypes.shape({
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    isBookmarked: PropTypes.bool,
  }).isRequired,
};

export default NewsCard;
