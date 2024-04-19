import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology '];
  const categoryNames = {
  business: '경제',
  entertainment: '엔터테인먼트',
  general: '일반',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술'
};

const NavigationBar = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="top-navbar">
      <Container >
        <Nav className="flex-row">
          {categories.map((category, index) => (
            <Nav.Item key={index} className='list-contain'>
              <Nav.Link as={NavLink} to={`/category/${category}`} activeClassName="active" className='categories-list'>
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


