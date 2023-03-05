import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import useApi from "../../hooks/useApi";
import ProductBox from "./comapanents/product-box";

export default function CategoryDetails() {
  const params = useParams();
  const api = useApi();
  const [products, setProducts] = useState([]);

  function getProducts() {
    const config = {
      order: "asc",
      "productTaxons.taxon.code": params.category_code,
    };
    api
      .get("shop/products", { params: config })
      .then((res) => setProducts(res.data));
  }
  useEffect(() => {
    getProducts();
  }, [params.category_code]);

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
                {products.map((item, index) => {
                  return (
                    <div
                      key={index}
                      class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30"
                    >
                      <ProductBox product={item} />
                    </div>
                  );
                })}
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
