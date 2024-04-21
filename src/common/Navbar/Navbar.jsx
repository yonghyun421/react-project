import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NEWS_CATEGORY from "../../constants/NEWS_CATEGORY";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import authenticateAction from "../../redux/acticon/authenticateAction";

/* eslint-disable react/prop-types */
function NavigationBar(props) {
  const { isMenuIconVisible, handleMenuIconClick } = props;
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.auth.authenticate);
  const navigate = useNavigate();

  const loginout = () => {
    if (authenticate) {
      dispatch(authenticateAction.logout());
    } else {
      navigate("/login");
    }
    handleMenuIconClick();
  };
  const handleMyPageClick = () => {
    navigate("/mypage");
    handleMenuIconClick(); // 추가된 부분
  };
  return (
    <div>
      <div className={`navbar-container ${isMenuIconVisible ? "open" : ""}`}>
        <button type="button" className="dim" onClick={handleMenuIconClick}>
          뒷배경
        </button>
        <Navbar collapseOnSelect expand="lg" className="top-navbar">
          <div className="close-btn">
            <CloseIcon onClick={handleMenuIconClick} />
          </div>
          <div className="category-list">
            <div className="mypage--btn">
              <button type="button" onClick={() => loginout()}>
                {authenticate ? "로그아웃" : "로그인"}
              </button>
              <button type="button" onClick={handleMyPageClick}>
                마이페이지
              </button>
            </div>
            <Nav className="flex-row">
              {NEWS_CATEGORY.map(category => (
                <Nav.Item key={category.value} className="list-contain">
                  <Nav.Link
                    as={NavLink}
                    to={`/news/category/${category.value}`}
                    className={({ isActive }) =>
                      `categories-list ${isActive ? "active-link" : ""}`
                    }
                    onClick={handleMenuIconClick}>
                    {category.categoryName}
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
