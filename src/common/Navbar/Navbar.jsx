import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.style.css'

const categories = ['정치', '경제', '사회', '생활/문화', 'IT/과학', '세계', '랭킹'];


function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Nav className="me-auto category-list">
            {categories.map((category, idx) => (
              <Nav.Link key={idx} as={Link} to={`/category/${category.replace('/', '')}`}>
              {category}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;