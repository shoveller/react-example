import React from 'react';
import classes from './ProductPrice.module.css';

export default function ProductPrice() {
  return (
    <section className={classes.productPrice}>
      <h2 className={classes.a11y}>상품 가격정보</h2>
      <span className={classes.discountRate}>88%</span>
      <div className={classes.productPriceInfo}>
        <span className={classes.originalPrice}>56,760원</span>
        <span className={classes.discountedPrice}>6,370원</span>
      </div>
    </section>
  );
}
