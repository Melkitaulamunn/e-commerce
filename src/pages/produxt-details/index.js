import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import useApi from "../../hooks/useApi";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState([]);
  const params = useParams();
  console.log(params);
  const api = useApi();
  useEffect(() => {
    async function start() {
      const apiProductResult = await api.get(
        "shop/products/" + params.product_code
      );
      console.log("api product result", apiProductResult);
      const variantRequests = apiProductResult.data.variants.map(
        (item, index) => {
          return api.get(
            "shop/product-variants/" + item.split("/").reverse()[0]
          );
        }
      );
      const variantResponses = await Promise.all(variantRequests);
      console.log("variant responses", variantResponses);

      setProduct(apiProductResult.data);
      setVariants(variantResponses.map((item) => item.data));
    }
    start();
  }, []);
  //henüz apiden cevap gelmemişse loading göster
  if (!product.id) {
    <div>loading...</div>;
  }
  console.log("variants", variants);
  return (
    <>
      <Breadcrumb />
      <div className="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="box">
                <div class="box-body">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <ul id="demo1_thumbs" class="slideshow_thumbs">
                        <li>
                          <a
                            href="images/thumb_big_1.jpg"
                            data-desoslide-index="0"
                          >
                            <div class=" thumb-img">
                              <img src="images/thumb_1.jpg" alt="" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="images/thumb_big_2.jpg"
                            data-desoslide-index="1"
                          >
                            <div class=" thumb-img">
                              <img src="images/thumb_2.jpg" alt="" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="images/thumb_big_3.jpg"
                            alt=""
                            data-desoslide-index="2"
                          >
                            <div class=" thumb-img">
                              <img src="images/thumb_3.jpg" alt="" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">test</div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div class="product-single">
                        <h2>{product.name} </h2>
                        <div class="product-rating">
                          <span>
                            <i class="fa fa-star"></i>
                          </span>
                          <span>
                            <i class="fa fa-star"></i>
                          </span>
                          <span>
                            <i class="fa fa-star"></i>
                          </span>
                          <span>
                            <i class="fa fa-star"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o"></i>
                          </span>
                          <span class="text-secondary">
                            &nbsp;(4.8 Review Stars)
                          </span>
                        </div>
                        <p class="product-price">
                          $1100 <strike>$1300</strike>
                        </p>
                        <p>{product.shortDescription}</p>
                        <div class="product-quantity">
                          <h5>Quantity</h5>
                          <div class="quantity mb20">
                            <input
                              type="number"
                              class="input-text qty text"
                              step="1"
                              min="1"
                              max="6"
                              name="quantity"
                              value="1"
                              title="Qty"
                              size="4"
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-default">
                          <i class="fa fa-shopping-cart"></i>&nbsp;Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
