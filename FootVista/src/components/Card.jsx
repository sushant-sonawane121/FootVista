import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, price, productId }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <Link to={`/product/${productId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
