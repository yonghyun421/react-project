import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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

function NavigationBar(props) {
  const { isMenuIconVisible } = props;
  return (
    <div className={`navbar-container ${isMenuIconVisible ? "open" : ""}`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="top-navbar">
        <div>
          <Nav className="flex-row">
            {/* eslint-disable react/no-array-index-key */}
            {categories.map((category, index) => (
              <Nav.Item key={index} className="list-contain">
                <Nav.Link
                  as={NavLink}
                  to={`/news/category/${category}`}
                  className={({ isActive }) =>
                    `cate
                    gories-list ${isActive ? "active-link" : ""}`
                  }>
                  {categoryNames[category]}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
