import React from "react";
import { Link } from "react-router-dom";

const ProductBox = (props) => {
  console.log("product box props", props);

  return (
    <div className="product-block">
      <div className="product-img">
        <img
          src={`https://ecommerce-api.udemig.dev/${props.product.images[0].path}`}
          alt=""
          style={{ aspectRatio: "0.7" }}
        />
      </div>
      <div className="product-content">
        <h5>
          <Link to="#" className="product-title">
            <strong>{props.product.name}</strong>
          </Link>
        </h5>
        <div className="product-meta">
          <Link to="#" className="product-price">
            $1500
          </Link>
          <Link to="#" className="discounted-price">
            $2000
          </Link>
          <span className="offer-price">15%off</span>
        </div>
        <div className="shopping-btn">
          <Link to="#" className="product-btn btn-like">
            <i className="fa fa-heart"></i>
          </Link>
          <Link to="#" className="product-btn btn-cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
