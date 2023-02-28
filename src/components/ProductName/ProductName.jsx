import React from 'react';
import classes from './ProductName.module.css';
import product from '../../assets/poductImg_src.png';

export default function ProductName() {
  console.log('product', require2('../../assets/poductImg_src.png'));
  const name = '래피젠 코로나 자가 검사 키트 2개입X1박스';

  return (
    <div>
      {/* 퍼블릭폴더것은 경로설정없이 자동으로 가져와지는데, src/assets에서 어떻게 가져오는지 모르겠다. 계속 실패. */}
      <img
        className={classes.productImage}
        src={product}
        alt="래피젠 코로나 자가 검사 키트 상품 이미지"
      />
      {/* <img className={classes.productImage}
      src="productImg_Rapigen_1x.png"
      alt="래피젠 코로나 자가 검사 키트 상품 이미지"
    /> */}
      <h1 className={classes.productInfo}>
        래피젠 코로나 자가 검사 키트<br></br> 2개입X1박스
      </h1>
      {/* <h1 className={classes.productInfo}>{name}</h1> */}
    </div>
  );
}
