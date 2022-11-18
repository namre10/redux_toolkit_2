import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productState } from "../store/products";

const ProductDetails = () => {
  const { id } = useParams();

  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <button type="button" class="btn btn-info ml-5 my-2">
          <i className="fa-sharp fa-solid fa-backward"></i>
        </button>
        <div className="row">
          {Loading ? (
            <div> Loading...</div>
          ) : (
            <>
              <div className="col-md-6 my-4">
                <img
                  src={Product.image}
                  alt={Product.title}
                  height="300px"
                  width="300px"
                />
              </div>

              <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                  {" "}
                  {Product.category}{" "}
                </h4>
                <h1 className="display-5"> {Product.title}</h1>
                <p className="lead">
                  Rating: {Product.rating && Product.rating.rate}{" "}
                  <i className="fa-solid fa-star"></i>
                  {/* <i className="fa fa-star"></i> */}
                </p>
                <p className="lead">{Product.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
