import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";

export default function CategoryDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Breadcrumb />
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div id="cssmenu">
                <ul>
                  <li class="has-sub">
                    <a href="#">CATEGORY</a>
                    <ul>
                      <li class="even">
                        <a href="#">Smart Phones</a>
                      </li>
                      <li class="odd">
                        <a href="#">Cell Phones</a>
                      </li>
                      <li class="last even">
                        <a href="#">Android Phones</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div class="select-option form-group">
                      <select name="select" class="form-control">
                        <option value="">Select</option>
                        <option value="">Best Match</option>
                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_1.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          Google Pixel <strong>(128GB, Black)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1100
                        </a>
                        <a href="#" class="discounted-price">
                          $1400
                        </a>
                        <span class="offer-price">20%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1200
                        </a>
                        <a href="#" class="discounted-price">
                          $1700
                        </a>
                        <span class="offer-price">10%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_3.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1500
                        </a>
                        <a href="#" class="discounted-price">
                          $2000
                        </a>
                        <span class="offer-price">40%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_3.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1500
                        </a>
                        <a href="#" class="discounted-price">
                          $2000
                        </a>
                        <span class="offer-price">40%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_4.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          Vivo V5 Plus <strong>(Matte Black)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1500
                        </a>
                        <a href="#" class="discounted-price">
                          $2000
                        </a>
                        <span class="offer-price">15%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1200
                        </a>
                        <a href="#" class="discounted-price">
                          $1700
                        </a>
                        <span class="offer-price">10%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1200
                        </a>
                        <a href="#" class="discounted-price">
                          $1700
                        </a>
                        <span class="offer-price">10%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_3.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1500
                        </a>
                        <a href="#" class="discounted-price">
                          $2000
                        </a>
                        <span class="offer-price">40%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div class="product-block">
                    <div class="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div class="product-content">
                      <h5>
                        <a href="#" class="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div class="product-meta">
                        <a href="#" class="product-price">
                          $1200
                        </a>
                        <a href="#" class="discounted-price">
                          $1700
                        </a>
                        <span class="offer-price">10%off</span>
                      </div>
                      <div class="shopping-btn">
                        <a href="#" class="product-btn btn-like">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#" class="product-btn btn-cart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="st-pagination">
                    <ul class="pagination">
                      <li>
                        <a href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </a>{" "}
                      </li>
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
