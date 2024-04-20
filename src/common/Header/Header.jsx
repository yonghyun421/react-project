import React, { useEffect, useState, forwardRef } from "react";
import "./Header.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import authenticateAction from "../../redux/acticon/authenticateAction";

const Header = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.auth.authenticate);
  const [keyword, setKeyword] = useState("");
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const navigate = useNavigate();

  const searchByKeyword = event => {
    event.preventDefault();
    console.log("키워드", keyword);
    navigate(`/news?q=${keyword}`);
    setKeyword("");
  };

  const handleSearchIconClick = () => {
    setIsSearchBoxVisible(true);
  };

  const loginout = () => {
    if (authenticate) {
      dispatch(authenticateAction.logout());
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log("authenticate", authenticate);
  });

  return (
    <div className="header" ref={ref}>
      <div className="menu--btn">
        <MenuIcon />
      </div>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          NewsTab
        </Link>
      </div>
      <div className="util--Btn">
        <div className="mypage--btn">
          <button
            type="button"
            className="text-white"
            onClick={() => loginout()}>
            {authenticate ? "로그아웃" : "로그인"}
          </button>
          <Link as={Link} to="/mypage" className="text-white">
            마이페이지
          </Link>
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
  );
});

export default Header;
