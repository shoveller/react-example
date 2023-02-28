import React from 'react';
import './style.css';

//이거 해결 못했긔...ㅠㅠ 확장자는 안써도 되는데 왜 안써도 됐더라?
//src/index.js 파일에서 왜 못가져오지?
import DivLine from './components/DivLine/DivLine';
import ProductName from './components/ProductName/ProductName';
import ProductPrice from './components/ProductPrice/ProductPrice';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import PurchaseCount from './components/PurchaseCount/PurchaseCount';
import PurchaseInfo from './components/PurchaseInfo/PurchaseInfo';
import PurchaseButton from './components/PurchaseButton/PurchaseButton';

export default function App() {
  return (
    <div>
      <ProductName />
      <ProductPrice />
      <DivLine />
      <DeliveryInfo />
      <DivLine />
      <PurchaseCount />
      <DivLine />
      <PurchaseInfo />
      <PurchaseButton />
    </div>
  );
}
