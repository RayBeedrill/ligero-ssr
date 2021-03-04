import Link from "next/link";
const cart = ({ cartActive, onClose }) => {
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
        <div className="cart-list__item">
          <div className="cart-list__item-img">
            {" "}
            <img src="static/img/product-img-1.jpg" alt="" />
          </div>
          <div className="cart-list__item-content">
            <div className="cart-list__item-title">
              Уголь Oasis Premium Coalus 25мм
            </div>
            <div className="cart-list__item-amount">
              <div className="cart-list__item-amount-btn-sub">
                <svg
                  width="12"
                  height="2"
                  viewBox="0 0 12 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="1" x2="12" y2="1" strokeWidth="2"></line>
                </svg>
              </div>
              <input
                className="cart-list__item-amount-input"
                type="number"
                value="1"
              />
              <div className="cart-list__item-amount-btn-add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="6" x2="12" y2="6" strokeWidth="2"></line>
                  <line x1="6" x2="6" y2="12" strokeWidth="2"></line>
                </svg>
              </div>
            </div>
            <div className="cart-list__item-price">15 900 грн</div>
          </div>
          <div className="cart-list__item-delete-btn">
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
        </div>
        <div className="cart-list__item">
          <div className="cart-list__item-img">
            {" "}
            <img src="static/img/product-img-1.jpg" alt="" />
          </div>
          <div className="cart-list__item-content">
            <div className="cart-list__item-title">
              Уголь Oasis Premium Coalus 25мм
            </div>
            <div className="cart-list__item-amount">
              <div className="cart-list__item-amount-btn-sub">
                <svg
                  width="12"
                  height="2"
                  viewBox="0 0 12 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="1" x2="12" y2="1" strokeWidth="2"></line>
                </svg>
              </div>
              <input
                className="cart-list__item-amount-input"
                type="number"
                value="1"
              />
              <div className="cart-list__item-amount-btn-add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="6" x2="12" y2="6" strokeWidth="2"></line>
                  <line x1="6" x2="6" y2="12" strokeWidth="2"></line>
                </svg>
              </div>
            </div>
            <div className="cart-list__item-price">15 900 грн</div>
          </div>
          <div className="cart-list__item-delete-btn">
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
        </div>
        <div className="cart-list__item">
          <div className="cart-list__item-img">
            {" "}
            <img src="static/img/product-img-1.jpg" alt="" />
          </div>
          <div className="cart-list__item-content">
            <div className="cart-list__item-title">
              Уголь Oasis Premium Coalus 25мм
            </div>
            <div className="cart-list__item-amount">
              <div className="cart-list__item-amount-btn-sub">
                <svg
                  width="12"
                  height="2"
                  viewBox="0 0 12 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="1" x2="12" y2="1" strokeWidth="2"></line>
                </svg>
              </div>
              <input
                className="cart-list__item-amount-input"
                type="number"
                value="1"
              />
              <div className="cart-list__item-amount-btn-add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="6" x2="12" y2="6" strokeWidth="2"></line>
                  <line x1="6" x2="6" y2="12" strokeWidth="2"></line>
                </svg>
              </div>
            </div>
            <div className="cart-list__item-price">15 900 грн</div>
          </div>
          <div className="cart-list__item-delete-btn">
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
        </div>
      </div>
      <div className="cart-footer">
        {" "}
        <Link href="/order">
          <a className="btn">Оформить заказ</a>
        </Link>
        <div className="cart-results">
          <div className="cart-results__title">Итого, без доставки: </div>
          <div className="cart-results__value">
            38 100 <span>грн</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
