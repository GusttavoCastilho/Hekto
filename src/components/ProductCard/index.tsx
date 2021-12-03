/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";

import { BsCart } from "react-icons/bs";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import styles from "../../styles/ProductCard.module.scss";

export type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false)

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  const handleFavorite = () => {
    setFavourite(!favourite)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.bottom}>
        <h3>{product.title.slice(0, 20)}</h3>
        <h4>{product.category}</h4>
        <span>${product.price}</span>

        <div className={styles.wrapperButtons}>
          <button className={styles.buttonAddCart} onClick={handleAddProductToCart}>
            <BsCart color="#fff" size={16} />
            Add to cart
          </button>

          {/* favorite */}
          <button className={styles.buttonFavourite} onClick={handleFavorite}>
            {favourite ? <MdOutlineFavorite color="#fff" />: <MdFavoriteBorder color="#fff" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
