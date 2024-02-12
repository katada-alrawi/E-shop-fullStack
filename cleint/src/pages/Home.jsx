import React from 'react';
import categories from '../categories';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
  return (
    <div>
      <img src="../assets/i11.jpg" className="home-banner" alt="Home Banner" />

      <div className='feature-product-container mt-4'>
        <h2>Last Products</h2>
        {/* Last products are here */}
        <div>
          <Link to="category/all" style={{ textAlign: 'right', display: "block", textDecoration: "none" }}>See more {">>"}</Link>
        </div>
      </div>

      {/* Banner */}
      <div className='sale_banner--container m-4'>
        <img src='../assets/istockphoto-1311600080-2048x2048.jpg' alt="Sale Banner" />
      </div>

      <div className='recent-products-container container mt-4'>
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`} key={category.name}>
              <Col md={4}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${category.img})`, gap: '10px' }} className='category-tile'>
                  {/* Category content */}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
