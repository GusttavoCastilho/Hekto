/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";

import { BsCart } from "react-icons/bs";

import styles from "../../styles/ProductCard.module.scss";

export type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.bottom}>
        <h3>{product.title.slice(0, 20)}</h3>
        <span>${product.price}</span>

        <div className={styles.addButton}>
          <button onClick={handleAddProductToCart}>
            <BsCart color="#fff" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
