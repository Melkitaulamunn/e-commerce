import React from 'react';
import {Link} from "react-router-dom"


const ProductBox = () => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
    <div className="product-block">
      <div className="product-img">
        <img src="images/product_img_4.png" alt="" />
      </div>
      <div className="product-content">
        <h5>
          <Link to="#" className="product-title">
            Vivo V5 Plus <strong>(Matte Black)</strong>
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
  </div>
  )
}

export default ProductBox
