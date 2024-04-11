import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = () => {
  return (
    <>
      {/* <div className="c-component">
       <div className="card-wraper">
         <img src={imageUrl} className="card-img" alt="Product" />
         <div className="card-data">
           <h5 className="c-title">{title}</h5>
           <p className="c-text">${price}</p>
           <Link to={`/product/${productId}`} className="btn btn-primary">
             View Details
           </Link>
         </div>
       </div>
     </div> */}

      <div className="product-card">
        <div className="new-badge">New</div>
        <img
          src="https://source.unsplash.com/random/150x150?sig=1"
          alt="Product 1 Image"
        />
        <div className="card-info">
          <h3 className="card-title">Sport Shoose for Men and women</h3>
          <p>This is best sport shoose for men and women both.</p>
        </div>
        <div className="btn-group gap-1">
          <button className="btn btn-primary rounded">Buy Now</button>
          <button className="btn btn-secondary rounded">Add to kart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
