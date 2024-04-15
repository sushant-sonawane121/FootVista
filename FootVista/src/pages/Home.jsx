import React from "react";
// import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/Home.css";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const Home = () => {
  // script.js

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero bg-dark text-light py-5">
          <div className="container text-center">
            <h1>Welcome to FootVista</h1>
            <p>Your ultimate destination for footwear!</p>
            <div className="home-search d-flex flex-row justify-content-center">
              <input
                type="text"
                name="search"
                id="search"
                className="home-search-bar"
              />
              <div className="serach-btn-wraper">
                <button className="search-btn">
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}

        <div className="new-Arivals">
          <h2 className="text-center mb-4">New Arrivals</h2>

          <section className="section-container">
            <div className="product-list-container">
              <div className="product-list" id="productList">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
              </div>
            </div>
          </section>
        </div>
        {/* Featured Products Section */}
        {/* <section className="featured-products py-5">
          <div className="container">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
             
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 1"
                price="50.00"
                productId="1"
              />
              
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 2"
                price="60.00"
                productId="2"
              />
              
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 3"
                price="70.00"
                productId="3"
              />
              
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 4"
                price="80.00"
                productId="4"
              />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
