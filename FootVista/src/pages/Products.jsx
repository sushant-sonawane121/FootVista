import React, { useState } from "react";
import Card from "../components/Card";
import "../styles/Products.css";

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$50.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$60.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$70.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$80.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$90.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$100.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      name: "Product 7",
      price: "$110.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      name: "Product 8",
      price: "$120.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      name: "Product 9",
      price: "$130.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 10,
      name: "Product 10",
      price: "$140.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 11,
      name: "Product 11",
      price: "$150.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 12,
      name: "Product 12",
      price: "$160.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 13,
      name: "Product 13",
      price: "$170.00",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 14,
      name: "Product 14",
      price: "$180.00",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  // State for filter
  const [filter, setFilter] = useState("");

  // Filtered products based on filter state
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mt-3 pt-2 border border-1 border-danger">
        
      <div className="row">
        {/* Left side - Filter Menu */}
        <div className="col-md-2 mb-4">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search Products"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {/* Additional filters can be added here */}
        </div>

        {/* Right side - Product Cards */}
        <div className="col-md-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {/* Map through filtered products and display card for each */}
            {filteredProducts.map((product) => (
              <div key={product.id} className="col">
                <Card
                  imageUrl={product.imageUrl}
                  title={product.name}
                  price={product.price}
                  productId={product.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
