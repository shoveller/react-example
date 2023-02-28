import React from 'react';
import classes from './PurchaseCount.module.css';

export default function PurchaseCount() {
  return (
    //section에 막혀서 클릭 이벤트 안되는 상황.이벤트 위임??
    <section type="button" className={classes.purchaseCount}>
      <button className={classes.button}>-</button>
      <span className={classes.countState}>1</span>
      <button type="button" className={classes.button}>
        +
      </button>
    </section>
  );
}
