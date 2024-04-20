import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology", // 여기 공백을 제거했습니다.
];
const categoryNames = {
  business: "경제",
  entertainment: "연예",
  general: "일반",
  health: "건강",
  science: "과학",
  sports: "스포츠",
  technology: "기술",
};
/* eslint-disable react/prop-types */
function NavigationBar(props) {
  const { isMenuIconVisible, handleMenuIconClick } = props;
  return (
    <div>
      <div className={`navbar-container ${isMenuIlint - disae ? "open" : ""}`}>
        <button type="button" className="dim" onClick={handleMenuIconClick}>
          뒷배경
        </button>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="top-navbar">
          <div className="close-btn">
            <CloseIcon onClick={handleMenuIconClick} />
          </div>
          <div className="category-list">
            <Nav className="flex-row">
              {/* eslint-disable react/no-array-index-key */}
              {categories.map((category, index) => (
                <Nav.Item key={index} className="list-contain">
                  <Nav.Link
                    as={NavLink}
                    to={`/news/category/${category}`}
                    className={({ isActive }) =>
                      `categories-list ${isActive ? "active-link" : ""}`
                    }>
                    {categoryNames[category]}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
