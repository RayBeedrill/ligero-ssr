function Product({ product, forceUpdate, lsCart }) {
    return (<div className="cart-list__item">
    <div className="cart-list__item-img">
      {" "}
      <img src={product.img} alt="" />
    </div>
    <div className="cart-list__item-content">
      <div className="cart-list__item-title">
        {product.brand} - {product.model}
      </div>
      <div className="cart-list__item-amount">
        <div className="cart-list__item-amount-btn-sub"  onClick={(e) => {
          e.preventDefault();
          if(product.quantity > 1) {
            lsCart.addToCart(product, 'sub');
            forceUpdate();
          }
        }}>
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
          value={product.quantity}
        />
        <div className="cart-list__item-amount-btn-add" onClick={(e) => {
          e.preventDefault();
          lsCart.addToCart(product);
          forceUpdate();
        }}>
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
      <div className="cart-list__item-price">{product.price} грн</div>
    </div>
    <div className="cart-list__item-delete-btn" onClick={() => {
        lsCart.removeFromCart(product.id)
        forceUpdate()
      }}>
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
  </div>)
}

export default Product