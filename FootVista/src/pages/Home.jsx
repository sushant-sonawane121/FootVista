import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero bg-dark text-light py-5">
          <div className="container text-center">
            <h1>Welcome to FootVista</h1>
            <p>Your ultimate destination for footwear!</p>
            <Link to="/listings" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="new-arrivals py-5">
          <div className="container">
            <h2 className="text-center mb-4">New Arrivals</h2>
            <div className="new-arrivals-scroll">
              <div className="card-container">
                {/* New Arrival 1 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 1"
                  price="100.00"
                  productId="5"
                />
                {/* New Arrival 2 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 2"
                  price="120.00"
                  productId="6"
                />
                {/* New Arrival 3 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 3"
                  price="90.00"
                  productId="7"
                />
                {/* New Arrival 4 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 4"
                  price="110.00"
                  productId="8"
                />
                {/* New Arrival 5 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 5"
                  price="95.00"
                  productId="9"
                />
                {/* New Arrival 6 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 6"
                  price="85.00"
                  productId="10"
                />
                {/* New Arrival 7 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 7"
                  price="105.00"
                  productId="11"
                />
                {/* New Arrival 8 */}
                <Card
                  imageUrl="https://via.placeholder.com/150"
                  title="New Arrival 8"
                  price="115.00"
                  productId="12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-products py-5">
          <div className="container">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
              {/* Featured Product 1 */}
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 1"
                price="50.00"
                productId="1"
              />
              {/* Featured Product 2 */}
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 2"
                price="60.00"
                productId="2"
              />
              {/* Featured Product 3 */}
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 3"
                price="70.00"
                productId="3"
              />
              {/* Featured Product 4 */}
              <Card
                imageUrl="https://via.placeholder.com/150"
                title="Product 4"
                price="80.00"
                productId="4"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
