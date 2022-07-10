import React, { useState, useRef } from "react";
import Loader from "../common/Loader";
import Header from "./Header";
import NavItems from "./NavItems";
import ProductCard from "./ProductCard";
import PopupBox from "./PopupBox";
import { useProductContext } from "../context/ProductContext";
import CartItems from "./CartItems";

export default function Products() {
  const { isLoadingData, data, loadError } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState({});

  const [cartCount, setCartCount] = useState(0);
  const cartItems = useRef([]);

  const onSelectItem = (product) => {
    setSelectedProduct(product);
  };

  // const addCartItems = async (item) => {
  //   cartItems.current.push(item);
  //   addToCart();
  // };

  // const addToCart = () => {
  //   setCartCount(cartItems.current.length);
  // };

  return (
    <div className="my-products">
      <Header cartCount={cartCount} />
      <NavItems />
      <hr />
      <div className="container">
        <div className="productList">
          {isLoadingData ? (
            <Loader />
          ) : (
            <div className="products">
              {data.map((product, i) => (
                <div className="product-container">
                  <a
                    href="#popup1"
                    key={`${product.id}_${i}`}
                    onClick={() => onSelectItem(product)}
                  >
                    <ProductCard href="#popup1" product={product} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <PopupBox selectedProduct={selectedProduct} />
      <CartItems />
    </div>
  );
}
