import React from 'react';
import classes from './PurchaseButton.module.css';

export default function PurchaseButton() {
  return (
    <div>
      <button type="button" className={classes.button}>
        <img
          className={classes.logoForButton}
          src="logoAbled.svg"
          aria-hidden="true"
        />
        구매하기
      </button>
    </div>
  );
}
