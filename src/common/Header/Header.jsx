import React, { useEffect, useState, forwardRef } from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import authenticateAction from "../../redux/acticon/authenticateAction";
import NavigationBar from "../Navbar/Navbar";

const Header = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.auth.authenticate);
  const [keyword, setKeyword] = useState("");
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const navigate = useNavigate();
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(false);

  const searchByKeyword = event => {
    event.preventDefault();
    console.log("키워드", keyword);
    navigate(`/news?q=${keyword}`);
    setKeyword("");
  };

  const handleSearchIconClick = () => {
    setIsSearchBoxVisible(true);
  };
  const handleMenuIconClick = () => {
    setIsMenuIconVisible(!isMenuIconVisible);
  };

  const loginout = () => {
    if (authenticate) {
      dispatch(authenticateAction.logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="header" ref={ref}>
        <button
          type="button"
          tabIndex={0}
          onClick={handleMenuIconClick}
          className="menu--icon menu--btn"
          aria-label="menuIcon">
          <MenuIcon />
        </button>
        <div className="logo">
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{ textDecoration: "none", color: "white" }}>
            NewsTab
          </button>
        </div>
        <div className="util--Btn">
          <div className="mypage--btn">
            <button
              type="button"
              className="text-white"
              onClick={() => loginout()}>
              {authenticate ? "로그아웃" : "로그인"}
            </button>
            <button
              type="button"
              className="text-white"
              onClick={() => navigate("/mypage")}>
              마이페이지
            </button>
          </div>
          <div className="search--btn">
            <div
              role="button"
              tabIndex={0}
              onClick={handleSearchIconClick}
              className={`search--icon ${isSearchBoxVisible ? "hidden" : ""}`}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  handleSearchIconClick();
                }
              }}>
              검색
              <SearchIcon />
            </div>
            <Form
              className={`d-flex search--box ${
                isSearchBoxVisible ? "" : "hidden"
              }`}
              onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="SEARCH"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={event => setKeyword(event.target.value)}
              />
              <Button type="submit">
                <SearchIcon />
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <NavigationBar
        isMenuIconVisible={isMenuIconVisible}
        handleMenuIconClick={handleMenuIconClick}
      />
    </>
  );
});

export default Header;
