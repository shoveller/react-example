import React from 'react';
import classes from './PurchaseInfo.module.css';

export default function PurchaseInfo() {
  return (
    <section className={classes.purchaseInfo}>
      <div className={classes.purchaseTooltip}>
        <h2>총 상품 금액</h2>
        <button className={classes.tooltipButton} aria-hidden="true">
          ?
        </button>
        {/* <span className={classes.tooltipIsActive}>
          총 상품금액에 배송비는 포함되어 있지 않습니다.결제시 배송비가 추가될
          수 있습니다.
        </span> */}
      </div>
      <div className={classes.userPurchaseInfo}>
        <h3 className={classes.userPurchaseCount}>총 수량 1개</h3>
        <span className={classes.divLineSmall} aria-hidden="true">
          |
        </span>
        <h3 className={classes.userPurchasePrice}>6,370원</h3>
      </div>
    </section>
  );
}
