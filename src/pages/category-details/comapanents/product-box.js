import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../../hooks/useApi";

const ProductBox = (props) => {
  const [variant, setVariant] = useState({});
  const api = useApi();

  const variantCode = props.product.variants[0].split("/").reverse()[0];
  console.log("variant code", variantCode);

  useEffect(() => {
    api.get("shop/product-variants/" + variantCode).then((res) => {
      setVariant(res.data);
    });
  }, []);

  return (
    <div className="product-block">
      <div className="product-img">
        <Link to={`/product/${props.product.code}`}>
          <img
            src={`https://ecommerce-api.udemig.dev/${props.product.images[0].path}`}
            alt=""
            style={{ aspectRatio: "0.7" }}
          />
        </Link>
      </div>
      <div className="product-content">
        <h5>
          <Link to={`/product/${props.product.code}`} className="product-title">
            <strong>{props.product.name}</strong>
          </Link>
        </h5>
        <div className="product-meta">
          <Link to={`/product/${props.product.code}`} className="product-price">
            ${variant.price ? variant.price : "Loading..."}
          </Link>
          <Link
            to={`/product/${props.product.code}`}
            className="discounted-price"
          >
            ${variant.originalPrice ? variant.originalPrice : "Loading..."}
          </Link>
          <span className="offer-price"></span>
        </div>
        <div className="shopping-btn">
          <Link
            to={`/product/${props.product.code}`}
            className="product-btn btn-like"
          >
            <i className="fa fa-heart"></i>
          </Link>
          <Link
            to={`/product/${props.product.code}`}
            className="product-btn btn-cart"
          >
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
