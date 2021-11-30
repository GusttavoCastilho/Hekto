/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button";

import styles from "../../styles/Banner.module.scss";

export type BannerProps = {
  title: string;
  short_description: string;
  description: string;
  buttonText: string;
};

const Banner = ({
  title,
  short_description,
  description,
  buttonText,
}: BannerProps) => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/lamp.png"
        alt="lamp in black color"
        className={styles.lamp}
      />
      <div className={styles.wrapperContent}>
        <h6>{short_description}</h6>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button>{buttonText}</Button>
      </div>

      <div className={styles.imageRight}>
        <img src="/images/couch.png" alt="couch in pink color" />
      </div>
    </div>
  );
};

export default Banner;
