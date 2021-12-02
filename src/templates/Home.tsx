import React, { useCallback, useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IState } from "../store";
import { ICartItem, IProduct } from "../store/modules/cart/types";
import { removeProductToCart } from "../store/modules/cart/actions";

import Header from "../components/Header";
import HeadingBar from "../components/HeadingBar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import itemsBanner from "../components/Banner/mock";

import api from "../services/api";

import styles from "../styles/HomeTemplate.module.scss";
import SlickSlider, { Settings } from "react-slick";

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
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const Home = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get<IProduct[]>("/products?limit=5")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

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
