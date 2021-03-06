import { useReducer } from 'react';

import Product from './components/product';

import Link from "next/link";
import lsCart from '../../utils/localStorageCart';
const cart = ({ cartActive, onClose, cartobj }) => {
  const cart = cartobj || [];
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const totalPrice = cart.reduce(((acc, curr) => {
    return acc + (parseInt(curr.price.split(" ").join("")) * curr.quantity)
  }), 0);
  return (
    <div
      className={cartActive ? "panel cart-panel active" : "panel cart-panel"}
    >
      <div className="panel__header">
        <div className="panel__close-btn" onClick={onClose}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="15.5562"
              width="22"
              height="2"
              rx="1"
              transform="rotate(-45 0 15.5562)"
            ></rect>
            <rect
              x="1.41406"
              width="22"
              height="2"
              rx="1"
              transform="rotate(45 1.41406 0)"
            ></rect>
          </svg>
        </div>
        <div className="panel__title">Закрыть корзину</div>
      </div>
      <div className="cart-list">
        {cart.map(product => (<Product key={product.id} product={product} forceUpdate={forceUpdate} lsCart={lsCart} />))}
      </div>
      {cart.length ?  (<div className="cart-footer">
        {" "}
        <Link href="/order">
          <a className="btn">Оформить заказ</a>
        </Link>
        <div className="cart-results">
          <div className="cart-results__title">Итого, без доставки: </div>
          <div className="cart-results__value">
            {totalPrice} <span>грн</span>
          </div>
        </div>
      </div>) : <div className="cart-footer">Корзина пуста</div>}
    </div>
  );
};

export default cart;
