import React, { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IState } from "../store";
import { removeProductToCart } from "../store/modules/cart/actions";

import Header from "../components/Header";
import HeadingBar from "../components/HeadingBar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import itemsBanner from "../components/Banner/mock";

import styles from "../styles/HomeTemplate.module.scss";
import SlickSlider, { Settings } from "react-slick";
import { fetchProductRequest } from "../store/modules/product/actions";

const settings: Settings = {
  dots: true,
  arrows: false,
  slidesToShow: 3,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

const Home = () => {
  const cart = useSelector((state: IState) => state.cart.items);
  const { products, pending, error } = useSelector((state: IState) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductRequest())
  },[dispatch]);

  const handleRemoveProductToCart = useCallback(
    (productId: number) => {
      dispatch(removeProductToCart(productId));
    },
    [dispatch]
  );

  return (
    <div>
      <HeadingBar />
      <Header />
      <Banner {...itemsBanner} />
      <div className={styles.wrapperProducts}>
        <h2>Featured Products</h2>
        <div className={styles.products}>
          <SlickSlider {...settings}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </SlickSlider>
        </div>
      </div>

      {cart.map((item) => (
        <div key={item.product.id}>
          <h1>{item.product.title}</h1>
          <h2>{item.product.description}</h2>
          <h3>{item.product.price}</h3>
          <button onClick={() => handleRemoveProductToCart(item.product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
