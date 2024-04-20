import React, { useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

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
      <p className="bookMarkPage__title">관심분야 설정</p>
      <ul>
        <li>dklf</li>
      </ul>
    </div>
  );
}

export default BookMarkPage;
