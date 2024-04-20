import React, { useState } from "react";
import "./Header.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

function Header() {
  const [keyword, setKeyword] = useState("");
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const navigate = useNavigate();

  const searchByKeyword = event => {
    event.preventDefault();
    navigate(`/news?q=${keyword}`);
    setKeyword("");
  };

  const handleSearchIconClick = () => {
    setIsSearchBoxVisible(true);
  };

  return (
    <div className="header">
      <div className="menu--btn">
        <MenuIcon />
      </div>
      <div className="logo">
        <Link to="/">NewsTab</Link>
      </div>
      <div className="util--Btn">
        <div className="mypage--btn">
          <Link as={Link} to="/mypage/login" className="text-white">
            로그인
          </Link>
          <Link as={Link} to="/movies" className="text-white">
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
            className={`d-flex search--box ${isSearchBoxVisible ? "" : "hidden"}`}
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
}

export default Header;
