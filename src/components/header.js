import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { categoryState } = useSelector((state) => state);
  return (
    <>
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-6 hidden-xs">
              <p class="top-text">Flexible Delivery, Fast Delivery.</p>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <ul>
                <li>+180-123-4567</li>
                <li>info@demo.com</li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="header-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-8">
              <div class="logo">
                <Link to="./">
                  <img src="assets/images/logo.png" alt="" />{" "}
                </Link>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="search-bg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Here"
                />
                <button type="Submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div class="account-section">
                <ul>
                  <li>
                    <a href="#" class="title hidden-xs">
                      My Account
                    </a>
                  </li>
                  <li class="hidden-xs">|</li>
                  <li>
                    <a href="#" class="title hidden-xs">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="#" class="title">
                      <i class="fa fa-shopping-cart"></i>{" "}
                      <sup class="cart-quantity">1</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="navigation">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="navigation">
                  <ul>
                    <li class="active">
                      <Link to="./">Home</Link>
                    </li>

                    {categoryState.categories.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={"category/" + item.code}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
