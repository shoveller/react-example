import React from 'react';
import classes from './DeliveryInfo.module.css';

export default function DeliveryInfo() {
  // return에 여러줄이 필요한 경우 ()로 묶어줘야함
  return (
    <section className={classes.deliveryInfo}>
      <div className={classes.dilveryInfoDetail}>
        <span className={classes.deliveryWay}> 택배 배송 </span>
        <span className={classes.divLineSmall} aria-hidden="true">
          |
        </span>
        <span className={classes.deliveryCost}>3,000원</span>
        <span className={classes.deliveryCostTiming}>(주문시 결제)</span>
      </div>
      <span className={classes.deliveryCostPer}>10개마다 부과</span>
    </section>
  );
}
