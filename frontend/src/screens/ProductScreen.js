import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductScreen.css";
// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
  const id = useParams();
  // console.log(id.id);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id.id !== product._id) {
      dispatch(getProductDetails(id.id));
    }
  }, [dispatch, product, id.id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}...</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {/* {([...Array(product.countInStock).keys()]).map((x) => {
                    return (
                      <option key={x+1} value={product.countInStock[x]}>
                        {product.countInStock[x]}
                      </option>
                    );
                  })} */}
                  {Array.from(
                    { length: parseInt(product.countInStock) },
                    (_, i) => i + 1
                  ).map((stock, index) => {
                    return (
                      <option key={index} value={stock}>
                        {stock}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart{" "}
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
