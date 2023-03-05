import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import useApi from "../../hooks/useApi";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState(0);
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
      setSelectedVariantId(variantResponses[0].data.id);
    }
    start();
  }, []);

  //henüz apiden cevap gelmemişse loading göster
  if (!product.id) {
    <div>loading...</div>;
  }

  const selectedVariant = variants.find(
    (item) => item.id === selectedVariantId
  );

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
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <Splide
                        options={{
                          perPage: 1,
                          arrows: true,
                          pagination: true,
                          drag: "free",
                          gap: "5rem",
                          type: "loop",
                          height: "500px",
                        }}
                        aria-label="My Favorite Images"
                      >
                        {product?.images?.map((item, index) => {
                          return (
                            <SplideSlide>
                              <img
                                src={
                                  "https://ecommerce-api.udemig.dev" + item.path
                                }
                                alt="Image 1"
                              />
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                    </div>
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
                          ${selectedVariant?.price} <strike>$1300</strike>
                        </p>
                        <p>{product.shortDescription}</p>
                        <div className="row">
                          <div className="col-sm-2">
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
                          </div>
                          <div className="col-sm-4">
                            <div class="product-quantity">
                              <h5>Variant</h5>
                              <div class="quantity mb20">
                                <select
                                  onChange={(event) =>
                                    setSelectedVariantId(
                                      parseInt(event.target.value)
                                    )
                                  }
                                  class="input-text qty text"
                                >
                                  {variants.map((item, index) => {
                                    return (
                                      <option value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
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
