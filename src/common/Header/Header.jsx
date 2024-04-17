import React, { useState } from "react"
import "./Header.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, useNavigate } from "react-router-dom"

function Header() {
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()

  const searchByKeyword = event => {
    event.preventDefault()
    navigate(`/news?q=${keyword}`)
    setKeyword("")
  }
  return (
    <div className="header">
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">
          <img
            src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            alt=""
            className="newsLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              로그인
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="text-white">
              마이페이지
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="SEARCH"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={event => setKeyword(event.target.value)}
            />
            <Button variant="outline-danger" type="submit">
              SEARCH
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
