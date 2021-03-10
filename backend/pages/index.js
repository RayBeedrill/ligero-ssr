import { useState, useReducer } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import Sidebar from '../components/sidebar';
import MobileSidebar from '../components/mobileSideBar';
import MobileMenu from '../components/mobileMenu';
import Bar from '../components/bar';
import Cart from '../components/cart';
import Search from '../components/search';

import products from '../mocks/hookah';
import lsCart from '../utils/localStorageCart';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={'products-slider__arr-next'} onClick={onClick}>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.779297 15L7.7793 7.674L0.779297 1"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="products-slider__arr-prev"  onClick={onClick}>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 15L1 7.674L8 1" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [state, setState] = useState({
    cartActive: false,
    searchActive: false,
    mobileMenuActive: false
  });
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const cart = lsCart.getCart() || [];
  const totalPrice = cart.reduce(((acc, curr) => {
    return acc + (parseInt(curr.price.split(" ").join("")) * curr.quantity)
  }), 0);
  const amount = cart.length;

  function addToCart(e, product) {
    e.stopPropagation();
    e.preventDefault();
    lsCart.addToCart(product);
    forceUpdate();
  }

  return (
    <>
      <div className="wrapper">
        <div className="overlay"></div>
        <MobileSidebar onMenuActive={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setState({mobileMenuActive: !state.mobileMenuActive})
        }} 
        onCart={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setState({ cartActive: !state.cartActive });
        }}
        amount={amount}
        />
        <MobileMenu menuActive={state.mobileMenuActive} />
        <Cart
          cartActive={state.cartActive}
          cartobj={cart}
          onClose={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setState({ cartActive: !state.cartActive });
          }}
        />
        <Search
          searchActive={state.searchActive}
          onClose={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setState({ searchActive: !state.searchActive });
          }}
        />
        <div className="panel order-thanks-panel">
          <div className="panel__header">
            <div className="panel__close-btn">
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
            <div className="panel__title">Закрыть поиск</div>
          </div>
          <div className="panel__message">
            <div className="panel__message-title">
              Спасибо! <br /> Номер Вашей заявки - 399
            </div>
            <div className="panel__message-text">
              В ближайшее время мы Вам позвоним и обсудим детали вашего заказа.
            </div>
            <div className="panel__message-icon">
              {' '}
              <img src="static/img/ico-check.svg" alt="" />
            </div>
            <div className="panel__message-footer">
              <a className="btn btn--xl" href="">
                Все понятно{' '}
              </a>
            </div>
          </div>
        </div>
        <Sidebar />
        <Bar
          totalPrice={totalPrice}
          amount={amount}
          onCart={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setState({ cartActive: !state.cartActive });
          }}
          onSearch={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setState({ searchActive: !state.searchActive });
          }}
        />
        <main className="main">
          <div className="banners-section">
            <div className="container">
              <div className="banners-section__row">
                <div className="banners-section__col">
                  <Link href="/catalog/hookah">
                    <a
                      className="banners-section__item banners-section__item--main"
                      style={{
                        backgroundImage: 'url(static/img/banner-bg-1.jpg)',
                      }}
                    >
                      <div className="banners-section__item-icon">
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M40.9701 35.36C40.9857 35.4388 41.0016 35.5175 41.0145 35.5972C41.6107 39.2618 39.4415 42.7142 35.9897 43.8007L38.0295 47.8802C38.2565 48.3343 38.2322 48.8735 37.9653 49.3054C37.6984 49.7372 37.2269 50.0001 36.7192 50.0001H19.1411C18.6334 50.0001 18.1619 49.7372 17.895 49.3054C17.6281 48.8735 17.6039 48.3343 17.8308 47.8802L19.9011 43.7397C17.2971 42.8791 15.2809 40.7111 14.8457 38.0358C14.1051 33.4822 17.6023 29.3945 22.0708 29.3945H23.5356V26.2129C21.8306 25.6082 20.6059 23.98 20.6059 22.0703C20.6059 20.0466 21.9814 18.339 23.8463 17.8307C23.6466 17.329 23.5356 16.7829 23.5356 16.2109C23.5356 15.0862 23.9608 14.0594 24.6582 13.2812C24.2792 12.8584 23.9811 12.362 23.7876 11.8164H20.6059C14.1442 11.8164 8.88719 17.0734 8.88719 23.5352V35.6035C10.5922 36.2082 11.8169 37.8364 11.8169 39.7461V45.6055C11.8169 46.4145 11.161 47.0703 10.352 47.0703H8.88719V48.5352C8.88719 49.3441 8.23133 50 7.42234 50C6.61336 50 5.9575 49.3441 5.9575 48.5352V47.0703H4.49266C3.68367 47.0703 3.02781 46.4145 3.02781 45.6055V39.7461C3.02781 37.8364 4.25252 36.2082 5.9575 35.6035V23.5352C5.9575 15.458 12.5288 8.88672 20.6059 8.88672H23.5356V7.29395C21.71 5.91846 20.6059 3.75537 20.6059 1.46484C20.6059 0.655859 21.2618 0 22.0708 0H33.7895C34.5985 0 35.2544 0.655859 35.2544 1.46484C35.2544 3.75537 34.1503 5.91836 32.3247 7.29395V8.89844C39.9945 9.18223 46.5683 15.0908 46.9542 22.7826C47.2027 27.7359 44.93 32.4597 40.9701 35.36ZM5.9575 44.1406H8.88719V39.7461C8.88719 38.9384 8.23006 38.2812 7.42234 38.2812C6.61463 38.2812 5.9575 38.9384 5.9575 39.7461V44.1406ZM34.3491 47.0703L32.8843 44.1406H22.9762L21.5113 47.0703H34.3491ZM22.0708 32.3242C19.4135 32.3242 17.2856 34.7878 17.7374 37.5652C18.0756 39.6437 20.0733 41.2109 22.3844 41.2109H33.7895C36.4205 41.2109 38.5796 38.8754 38.1229 36.0676C37.7814 33.9685 35.7402 32.3242 33.476 32.3242H30.8598C30.0509 32.3242 29.395 31.6684 29.395 30.8594V26.4648H26.4653V30.8594C26.4653 31.6684 25.8095 32.3242 25.0005 32.3242H22.0708ZM25.0005 23.5352H30.8598C31.6676 23.5352 32.3247 22.878 32.3247 22.0703C32.3247 21.2626 31.6676 20.6055 30.8598 20.6055H25.0005C24.1928 20.6055 23.5356 21.2626 23.5356 22.0703C23.5356 22.878 24.1928 23.5352 25.0005 23.5352ZM26.4653 16.2109C26.4653 17.0187 27.1224 17.6758 27.9302 17.6758C28.7379 17.6758 29.395 17.0187 29.395 16.2109C29.395 15.4032 28.7379 14.7461 27.9302 14.7461C27.1224 14.7461 26.4653 15.4032 26.4653 16.2109ZM23.7883 2.92969C24.1306 3.88555 24.8077 4.70449 25.7373 5.24551C26.1881 5.50781 26.4653 5.99004 26.4653 6.51152V10.3516C26.4653 11.1593 27.1224 11.8164 27.9302 11.8164C28.7379 11.8164 29.395 11.1593 29.395 10.3516V6.51152C29.395 5.99004 29.6722 5.50781 30.123 5.24551C31.0526 4.70449 31.7297 3.88555 32.0721 2.92969H23.7883ZM44.0283 22.9294C43.7261 16.9056 38.3952 11.9861 32.0713 11.8209C31.8777 12.3647 31.5802 12.8596 31.2022 13.2812C31.8997 14.0593 32.3248 15.0861 32.3248 16.2108C32.3248 16.7828 32.2138 17.3289 32.0141 17.8306C33.879 18.3389 35.2545 20.0465 35.2545 22.0702C35.2545 23.9799 34.0298 25.6081 32.3248 26.2128V29.3945H33.4761C36.0351 29.3945 38.3667 30.6548 39.7609 32.5915C42.6064 30.2497 44.216 26.6715 44.0283 22.9294Z"></path>
                        </svg>
                      </div>
                      <div className="banners-section__item-content">
                        <div className="banners-section__item-title">
                          Кальяны
                        </div>
                        <div className="banners-section__item-text">
                          поможем выбрать кальян
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="banners-section__col">
                  <a
                    className="banners-section__item"
                    href=""
                    style={{
                      backgroundImage: 'url(static/img/banner-bg-2.jpg)',
                    }}
                  >
                    <div className="banners-section__item-icon">
                      <svg
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.0952517 32.6589C-0.0782612 31.7279 0.0417106 30.7766 0.0248551 29.8364C-0.0118305 29.2858 0.438312 28.7518 1.02826 28.6787C4.26254 28.2262 7.49979 27.7839 10.7341 27.3341C10.7866 26.7261 10.5566 25.9997 11.0494 25.5028C11.5084 25.0104 12.4246 25.0373 12.8499 25.5564C13.2555 26.0117 13.076 26.6419 13.1147 27.1824C18.6354 27.1824 24.156 27.1824 29.6767 27.1824C30.9944 27.162 32.327 27.2619 33.6279 27.0121C36.0511 26.5762 38.274 25.2529 39.7306 23.3947C41.1266 21.6447 41.8226 19.4247 41.6471 17.2472C41.5232 15.4168 40.7716 13.6382 39.565 12.1945C38.3851 10.7722 36.7491 9.69502 34.9317 9.10554C32.9051 8.45868 30.6544 8.44758 28.6208 9.07222C26.4157 9.7561 24.4763 11.1729 23.2637 13.0255C21.6922 15.3428 21.3481 18.3272 22.3029 20.9146C22.6301 21.8233 23.1953 22.6303 23.7069 23.4548C23.8685 23.7306 24.0361 24.0462 23.9577 24.3691C23.7079 25.1335 22.5211 25.4704 21.9182 24.8522C20.4439 23.081 19.5882 20.8831 19.4186 18.6501C19.266 16.469 19.8004 14.2508 20.9337 12.3389C22.1036 10.3595 23.9111 8.71131 26.0677 7.67856C27.9614 6.76519 30.114 6.31822 32.2447 6.39966C34.5738 6.4922 36.8681 7.22419 38.7777 8.47164C41.9029 10.477 43.8979 13.901 44.0406 17.4342C44.1537 19.9142 43.3595 22.4165 41.8435 24.4524C39.8505 27.1666 36.5528 28.9869 33.0508 29.3367C32.2269 29.4237 31.397 29.4015 30.5701 29.4033C24.7519 29.4042 18.9338 29.4033 13.1167 29.4043C13.1127 30.5147 13.1157 31.6243 13.1147 32.7348C19.2283 32.7348 25.3409 32.7338 31.4535 32.7357C32.9546 32.7487 34.4627 32.5913 35.9063 32.2036C40.4276 31.0802 44.3222 27.9773 46.213 23.9832C47.1054 22.1343 47.6001 20.1151 47.6219 18.0856C47.6794 14.1869 46.0157 10.2882 43.0709 7.51847C40.0528 4.60623 35.7001 2.96179 31.3633 3.06266C27.0245 3.14502 22.758 4.97731 19.8817 8.01171C17.1392 10.8545 15.642 14.7218 15.8463 18.5465C15.8939 18.937 15.7808 19.359 15.4467 19.6172C15.0104 19.9911 14.2797 19.9799 13.8543 19.5978C13.6005 19.3877 13.4746 19.0731 13.4667 18.7612C13.2912 15.5528 14.1042 12.2963 15.8185 9.50809C17.5497 6.62916 20.2079 4.2481 23.3509 2.73507C27.3338 0.802822 32.092 0.317913 36.4259 1.41452C39.9308 2.28162 43.1512 4.14723 45.513 6.71707C47.8173 9.17587 49.3303 12.2667 49.8171 15.5019C50.3317 18.8167 49.7507 22.2638 48.196 25.2807C46.675 28.2364 44.2191 30.7664 41.2148 32.4636C38.7262 33.8906 35.8617 34.7355 32.9487 34.9169C32.1565 34.9687 31.3623 34.9548 30.5691 34.9557C24.7519 34.9567 18.9338 34.9557 13.1167 34.9567C13.1147 35.4295 13.1603 35.9219 12.9808 36.3744C12.6923 37.1823 11.2516 37.2128 10.9016 36.4364C10.6627 35.9237 10.7321 35.3481 10.737 34.804C7.49979 34.3533 4.26155 33.9128 1.02528 33.4584C0.559275 33.4279 0.168623 33.0883 0.0952517 32.6589ZM2.40545 31.4059C5.18067 31.7909 7.95688 32.174 10.7331 32.558C10.737 31.5641 10.7331 30.5703 10.7341 29.5754C7.95985 29.9595 5.18662 30.35 2.4114 30.7267C2.40744 30.9534 2.40545 31.1792 2.40545 31.4059Z"></path>
                        <path d="M14.4668 23.4983C14.1535 22.7376 14.9398 21.9103 15.7756 22.0103C16.7225 22.1204 17.0854 23.4234 16.3943 23.9999C15.7865 24.4968 14.7008 24.2312 14.4668 23.4983Z"></path>
                        <path d="M25.5583 18.3235C25.4632 17.1519 25.7616 15.9544 26.414 14.9485C27.3321 13.4975 28.9622 12.4574 30.7489 12.1992C32.016 12.0122 33.3496 12.1936 34.4928 12.7442C35.6667 13.2902 36.6424 14.199 37.2323 15.2928C37.9422 16.5624 38.089 18.0856 37.6735 19.4608C37.2224 20.9562 36.096 22.261 34.6237 22.9856C33.5439 23.5372 32.2817 23.7556 31.0602 23.6325C29.3974 23.4733 27.8299 22.6377 26.8195 21.3976C26.0928 20.5157 25.6416 19.4349 25.5583 18.3235ZM27.936 18.23C28.047 19.409 28.8392 20.5074 29.9695 21.0451C31.1227 21.6179 32.5931 21.5688 33.7006 20.9238C35.0847 20.1585 35.8184 18.5234 35.4188 17.0668C35.1601 16.0488 34.3936 15.1558 33.3813 14.7052C32.4324 14.2684 31.2872 14.2332 30.3076 14.6024C28.7758 15.153 27.7565 16.7049 27.936 18.23Z"></path>
                      </svg>
                    </div>
                    <div className="banners-section__item-content">
                      <div className="banners-section__item-title">
                        Аксессуары
                      </div>
                      <div className="banners-section__item-text">
                        узнать больше
                      </div>
                    </div>
                  </a>
                </div>
                <div className="banners-section__col">
                  <a
                    className="banners-section__item"
                    href=""
                    style={{
                      backgroundImage: 'url(static/img/banner-bg-3.jpg)',
                    }}
                  >
                    <div className="banners-section__item-icon">
                      <svg
                        width="50"
                        height="34"
                        viewBox="0 0 50 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M49.7335 10.1785L49.5725 9.17937L48.502 9.02907C48.1793 8.98377 41.0211 8.01845 34.5868 10.2553C31.6877 4.66584 26.1851 0.816847 25.8709 0.600376L25 0L24.1291 0.600285C23.8151 0.816756 18.3125 4.66575 15.4133 10.2553C8.97887 8.01845 1.82087 8.98377 1.49812 9.02907L0.427517 9.17937L0.266482 10.1785C0.187478 10.6691 -1.59074 22.2663 5.21667 28.6198C11.7598 34.7267 23.4932 33.4306 24.8613 33.2552H25.1388C25.585 33.3124 27.1326 33.4888 29.2442 33.4887C33.6072 33.4886 40.3741 32.7351 44.7833 28.6198C51.5908 22.2663 49.8125 10.6691 49.7335 10.1785ZM44.9772 11.5335L35.9669 19.943C36.2059 18.9621 36.342 17.948 36.342 16.9072C36.342 15.4831 36.0891 14.1084 35.6628 12.8018C38.9347 11.6773 42.5094 11.4879 44.9772 11.5335ZM33.4105 16.9072C33.4105 20.3214 31.554 23.5029 29.5016 25.9773L26.466 28.8106V4.69892C29.2159 7.1677 33.4105 11.7748 33.4105 16.9072ZM23.5342 4.69901V28.8107L20.4985 25.9774C18.446 23.503 16.5896 20.3215 16.5896 16.9072C16.5897 11.7746 20.7846 7.16742 23.5342 4.69901ZM14.3374 12.8016C13.911 14.1083 13.6581 15.4831 13.6581 16.9072C13.6581 17.9481 13.7942 18.9622 14.0332 19.9431L5.01979 11.5307C7.48483 11.4836 11.0571 11.6726 14.3374 12.8016ZM7.28971 26.6851C3.40115 23.0558 2.87702 17.0296 2.95115 13.4694L18.2238 27.7239C19.1971 28.893 20.2019 29.9091 21.1013 30.739C17.252 30.7716 11.0622 30.2061 7.28971 26.6851ZM42.7104 26.6851C38.9377 30.2062 32.7477 30.7716 28.8987 30.739C29.7982 29.9091 30.803 28.8929 31.7764 27.7238L47.0489 13.4694C47.1231 17.0298 46.5988 23.0558 42.7104 26.6851Z"></path>
                      </svg>
                    </div>
                    <div className="banners-section__item-content">
                      <div className="banners-section__item-title">Табак</div>
                      <div className="banners-section__item-text">
                        подобрать
                      </div>
                    </div>
                  </a>
                </div>
                <div className="banners-section__col">
                  <a
                    className="banners-section__item"
                    href=""
                    style={{
                      backgroundImage: 'url(static/img/banner-bg-4.jpg)',
                    }}
                  >
                    <div className="banners-section__item-icon">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5133 5.0263C25.2476 4.94562 26.0153 5.04866 26.6788 5.3617C31.8461 7.83876 37.0166 10.309 42.1851 12.7851C42.6746 13.0349 43.2069 13.2235 43.6422 13.556C44.5078 14.1996 45.0328 15.2301 44.9984 16.2645C45.0005 22.4221 44.9995 28.5798 44.9995 34.7374C44.9536 35.9429 44.162 37.0978 42.9975 37.6257C37.5812 40.2184 32.1649 42.8112 26.7486 45.403C25.6976 45.9202 24.3821 45.9309 23.3186 45.437C17.8606 42.8219 12.4006 40.2107 6.94154 37.5975C5.77703 37.0453 4.99167 35.8554 5.00104 34.6344C5 28.4796 4.99896 22.3239 5.00208 16.1682C4.98958 14.9229 5.80828 13.7155 7.00612 13.172C12.4224 10.5793 17.8387 7.98653 23.2561 5.39378C23.6467 5.20227 24.0748 5.07977 24.5133 5.0263ZM24.5362 7.58017C19.0543 10.1992 13.5786 12.8279 8.09667 15.4449C13.7359 18.2088 19.3647 20.9882 24.9997 23.7588C30.6296 20.9814 36.2688 18.2224 41.8944 15.4372C36.425 12.8337 30.9681 10.2089 25.5039 7.59864C25.208 7.45476 24.8383 7.45087 24.5362 7.58017ZM7.66337 18.3157C7.67274 23.5945 7.66649 28.8743 7.66649 34.1531C7.67691 34.474 7.61024 34.8356 7.83419 35.1098C7.98626 35.3372 8.26854 35.4315 8.51123 35.5511C13.563 37.9689 18.6137 40.3866 23.6654 42.8034C23.6686 37.3204 23.6623 31.8365 23.6686 26.3525C18.3366 23.6684 12.9953 21.0008 7.66337 18.3157ZM26.4653 26.2826C26.4694 31.7694 26.4684 37.2563 26.4663 42.7431C31.568 40.2982 36.6708 37.8561 41.7747 35.415C42.0976 35.2779 42.3319 34.9668 42.3298 34.6324C42.3371 29.1932 42.3257 23.7549 42.3361 18.3167C37.0489 20.9765 31.7555 23.6266 26.4653 26.2826Z"></path>
                      </svg>
                    </div>
                    <div className="banners-section__item-content">
                      <div className="banners-section__item-title">Уголь</div>
                      <div className="banners-section__item-text">перейти</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-section">
            <div className="container">
              <div className="container-inner">
                <div className="benefits-section__row">
                  <div className="benefits-section__col">
                    <div className="benefits-section__item">
                      <div className="benefits-section__item-icon">
                        <img src="static/img/beneftis-icon.svg" alt="" />
                      </div>
                      <div className="benefits-section__item-title">
                        <b>Доставка </b>по всей Украине
                      </div>
                    </div>
                  </div>
                  <div className="benefits-section__col">
                    <div className="benefits-section__item">
                      <div className="benefits-section__item-icon">
                        <img src="static/img/beneftis-icon.svg" alt="" />
                      </div>
                      <div className="benefits-section__item-title">
                        <b>Высылаем </b>в день заказа
                      </div>
                    </div>
                  </div>
                  <div className="benefits-section__col">
                    <div className="benefits-section__item">
                      <div className="benefits-section__item-icon">
                        <img src="static/img/beneftis-icon.svg" alt="" />
                      </div>
                      <div className="benefits-section__item-title">
                        <b>Гарантия </b>на обмен 14 дней
                      </div>
                    </div>
                  </div>
                  <div className="benefits-section__col">
                    <div className="benefits-section__item">
                      <div className="benefits-section__item-icon">
                        <img src="static/img/beneftis-icon.svg" alt="" />
                      </div>
                      <div className="benefits-section__item-title">
                        <b>Все товары </b>сертифицированы
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section section-white section--border">
            <div className="container">
              <div className="container-inner">
                <div className="section__header">
                  <h2 className="section__header-title">Хиты продаж</h2>
                  <Link href="/catalog/hookah">
                    <a className="btn btn--black">Смотреть все</a>
                  </Link>
                </div>
                <Slider
                  slidesToShow={4}
                  nextArrow={<NextArrow />}
                  prevArrow={<PrevArrow />}
                  responsive={ [
                    {
                      breakpoint: 1500,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        variableWidth: true,
                      },
                    },
                  ]}
                  // className="products-slider"
                  settings={{
                    infinite: true,
                    arrows: true,
                  }}
                >
                  {products.slice(0,8).map(product => {
                    return ( 
                      <div key={product.id} className="products-slider__item">
                        <div className="product-card product-card--hit">
                          <a className="product-card__img" href="">
                            <img src={product.img} alt="" />
                          </a>
                          <div className="product-card__rate">
                            <img src="static/img/rate-list.svg" alt="" />
                          </div>
                          <a className="product-card__title" href="">
                            {`${product.brand} - ${product.model} ${product.id}`}
                          </a>
                          <div className="product-card__footer">
                            <div className="product-card__price">
                              ${product.price} <span>грн</span>
                            </div>
                            <a className="product-card__buy-btn btn" onClick={(e) => {addToCart(e, product)}}>
                              купить
                            </a>
                          </div>
                        </div>
                      </div>) })}
                </Slider>
              </div>
            </div>
          </section>
          <section className="section section-white section--border">
            <div className="container">
              <div className="container-inner">
                <div className="section__header">
                  <h2 className="section__header-title">Новинки</h2>
                  <Link href="/catalog/hookah">
                    <a className="btn btn--black" href="">
                      Смотреть все
                    </a>
                  </Link>
                </div>
                <Slider
                  className="products-slider"
                  slidesToShow={4}
                  nextArrow={<NextArrow />}
                  prevArrow={<PrevArrow />}
                  responsive={ [
                    {
                      breakpoint: 1500,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        variableWidth: true,
                      },
                    },
                  ]}
                  settings={{
                    arrows: true,
                    infinity: true,
                  }}
                >
                  {products.slice(0,8).map(product => {
                    return (
                      <div key={product.id} className="products-slider__item">
                        <div className="product-card product-card--new">
                          <a className="product-card__img" href="">
                            <img src={product.img} alt="" />
                          </a>
                          <div className="product-card__rate">
                            <img src="static/img/rate-list.svg" alt="" />
                          </div>
                          <a className="product-card__title" href="">
                            {`${product.brand} - ${product.model} ${product.id}`}
                          </a>
                          <div className="product-card__footer">
                            <div className="product-card__price">
                              {product.price} <span>грн</span>
                            </div>
                            <a className="product-card__buy-btn btn" onClick={(e) => {addToCart(e, product)}}>
                              купить
                            </a>
                          </div>
                        </div>
                      </div>);  
                  })}
                </Slider>
              </div>
            </div>
          </section>
          {/* <section className="section section-white">
            <div className="container">
              <div className="container-inner">
                <div className="section__header">
                  <h2 className="section__header-title">
                    Товары с видео обзором
                  </h2>
                  <Link href="/catalog/hookah">
                    <a className="btn btn--black" href="">
                      Смотреть все
                    </a>
                  </Link>
                </div>
                <Slider
                  className="products-slider"
                  slidesToShow={4}
                  nextArrow={<NextArrow />}
                  prevArrow={<PrevArrow />}
                  settings={{
                    arrows: true,
                    infinity: true,
                    nextArrow:
                      '<div class="products-slider__arr-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.779297 15L7.7793 7.674L0.779297 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
                    prevArrow:
                      '<div class="products-slider__arr-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15L1 7.674L8 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
                    responsive: [
                      {
                        breakpoint: 1500,
                        settings: {
                          slidesToShow: 3,
                        },
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          variableWidth: true,
                        },
                      },
                    ],
                  }}
                >
                  <div className="products-slider__item">
                    <div className="product-card">
                      <a className="product-card__img" href="">
                        <img src="static/img/product-img-1.jpg" alt="" />
                      </a>
                      <div className="product-card__rate">
                        <img src="static/img/rate-list.svg" alt="" />
                      </div>
                      <a className="product-card__title" href="">
                        Alpha Hookah Kappa - White Cosmo
                      </a>
                      <div className="product-card__footer">
                        <div className="product-card__price">
                          15 900 <span>грн</span>
                        </div>
                        <a className="product-card__buy-btn btn" href="">
                          купить
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="products-slider__item">
                    <div className="product-card">
                      <a className="product-card__img" href="">
                        <img src="static/img/product-img-1.jpg" alt="" />
                      </a>
                      <div className="product-card__rate">
                        <img src="static/img/rate-list.svg" alt="" />
                      </div>
                      <a className="product-card__title" href="">
                        Alpha Hookah Kappa - White Cosmo
                      </a>
                      <div className="product-card__footer">
                        <div className="product-card__price">
                          15 900 <span>грн</span>
                        </div>
                        <a className="product-card__buy-btn btn" href="">
                          купить
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="products-slider__item">
                    <div className="product-card">
                      <a className="product-card__img" href="">
                        <img src="static/img/product-img-1.jpg" alt="" />
                      </a>
                      <div className="product-card__rate">
                        <img src="static/img/rate-list.svg" alt="" />
                      </div>
                      <a className="product-card__title" href="">
                        Alpha Hookah Kappa - White Cosmo
                      </a>
                      <div className="product-card__footer">
                        <div className="product-card__price">
                          15 900 <span>грн</span>
                        </div>
                        <a className="product-card__buy-btn btn" href="">
                          купить
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="products-slider__item">
                    <div className="product-card">
                      <a className="product-card__img" href="">
                        <img src="static/img/product-img-1.jpg" alt="" />
                      </a>
                      <div className="product-card__rate">
                        <img src="static/img/rate-list.svg" alt="" />
                      </div>
                      <a className="product-card__title" href="">
                        Alpha Hookah Kappa - White Cosmo
                      </a>
                      <div className="product-card__footer">
                        <div className="product-card__price">
                          15 900 <span>грн</span>
                        </div>
                        <a className="product-card__buy-btn btn" href="">
                          купить
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="products-slider__item">
                    <div className="product-card">
                      <a className="product-card__img" href="">
                        <img src="static/img/product-img-1.jpg" alt="" />
                      </a>
                      <div className="product-card__rate">
                        <img src="static/img/rate-list.svg" alt="" />
                      </div>
                      <a className="product-card__title" href="">
                        Alpha Hookah Kappa - White Cosmo
                      </a>
                      <div className="product-card__footer">
                        <div className="product-card__price">
                          15 900 <span>грн</span>
                        </div>
                        <a className="product-card__buy-btn btn" href="">
                          купить
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section> */}
          {/* <section className="section section-blog section--border">
            <div className="container">
              <div className="container-inner">
                <div className="section__header">
                  <h2>Блог</h2>
                  <a className="btn btn--black" href="#">
                    Смотреть все
                  </a>
                </div>
                <div className="blog-list">
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-1.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-2.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-3.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-4.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-5.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-list__item">
                    <a className="blog-card" href="">
                      <div className="blog-card__img">
                        <img src="static/img/blog-card-img-6.jpg" alt="" />
                      </div>
                      <div className="blog-card__title">
                        Все нюансы кальяна Alpha Hookah Kappa - White Cosmo за
                        пять минут
                      </div>
                      <div className="blog-card__footer">
                        <div className="blog-card__post-date">03/01/2020</div>
                        <div className="blog-card__views">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2606 5.5392C13.2681 5.52155 13.272 5.50257 13.272 5.48339C13.272 5.4642 13.2681 5.44522 13.2606 5.42757C12.9927 4.92246 10.8885 1.09368 7.17972 1.00159C3.47093 0.909499 1.31934 4.84432 1.01795 5.41362C1.00619 5.43398 1 5.45708 1 5.48059C1 5.50411 1.00619 5.52721 1.01795 5.54757C1.34724 6.08617 3.64954 9.71123 6.53228 9.97634C9.71084 10.2554 12.2894 8.02288 13.2606 5.5392Z"
                              strokeWidth="1.2"
                            ></path>
                            <path
                              d="M7.09631 7.3728C8.16131 7.3728 9.02466 6.50945 9.02466 5.44446C9.02466 4.37946 8.16131 3.51611 7.09631 3.51611C6.03132 3.51611 5.16797 4.37946 5.16797 5.44446C5.16797 6.50945 6.03132 7.3728 7.09631 7.3728Z"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                          34
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="section section-text">
            <div className="container">
              <div className="container-inner">
                <div className="section-text__inner">
                  <h2>Заголовок SEO текста</h2>
                  <p>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона, а также реальное распределение букв и пробелов в
                    абзацах, которое не получается при простой дубликации "З
                  </p>
                  <p>
                    десь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие
                    программы электронной вёрстки и редакторы HTML используют
                    Lorem Ipsum в качестве текста по умолчанию,{' '}
                  </p>
                  <p>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона, а также реальное распределение букв и пробелов в
                    абзацах, которое не получается при простой дубликации "Здесь
                    ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие
                    программы электронной вёрстки и редакторы HTML используют
                    Lorem Ipsum в качестве текста по умолчанию,{' '}
                  </p>
                  <p>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона, а также реальное распределение букв и пробелов в
                    абзацах, которое не получается при простой дубликации "Здесь
                    ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие
                    программы электронной вёрстки и редакторы HTML используют
                    Lorem Ipsum в качестве текста по умолчанию,{' '}
                  </p>
                  <p>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона, а также реальное распределение букв и пробелов в
                    абзацах.{' '}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer" id="footer">
          <div className="container">
            <div className="container-inner">
              <div className="footer__inner">
                <a className="footer__logo" href="">
                  <svg
                    width="109"
                    height="132"
                    viewBox="0 0 109 132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M103.349 4.73136V103.444H4.72701V4.73136H103.349ZM4.72418e-06 0L108.076 4.72853e-06V108.176H0L4.72418e-06 0ZM81.9831 36.2452C82.2951 36.2237 82.603 36.1873 82.9062 36.1362C82.603 36.1873 82.2951 36.2237 81.9831 36.2452ZM93.2506 14.8394V14.8394H81.3259C78.8796 14.8394 76.6053 15.5767 74.7126 16.8413C76.6053 15.5766 78.8796 14.8394 81.3259 14.8394H93.2506ZM68.9713 39.1411V26.7752C68.9713 19.9457 74.5024 14.4092 81.3259 14.4092H93.6805V26.7752C93.6805 33.3764 88.5133 38.7691 82.0064 39.1227L81.5532 39.1473V35.8433L81.9535 35.8159C86.6607 35.4934 90.3798 31.5689 90.3798 26.7752V20.7829L72.0381 39.1411H68.9713ZM88.7786 17.713H81.3259C76.3254 17.713 72.272 21.7703 72.272 26.7752V34.235L88.7786 17.713ZM19.2554 125.467C19.2554 123.655 19.8646 122.145 21.0828 120.938C22.3011 119.718 23.8617 119.109 25.7645 119.109C27.6673 119.109 29.2279 119.718 30.4461 120.938C31.6646 122.145 32.2736 123.655 32.2736 125.467C32.2736 127.325 31.6646 128.875 30.4461 130.118C29.2279 131.361 27.6673 131.982 25.7645 131.982C23.8617 131.982 22.3011 131.361 21.0828 130.118C19.8646 128.875 19.2554 127.325 19.2554 125.467ZM22.4055 125.467C22.4055 126.535 22.7188 127.424 23.3453 128.132C23.9835 128.84 24.7899 129.195 25.7645 129.195C26.7391 129.195 27.5397 128.84 28.1662 128.132C28.8044 127.424 29.1234 126.535 29.1234 125.467C29.1234 124.445 28.8044 123.597 28.1662 122.923C27.5397 122.238 26.7391 121.896 25.7645 121.896C24.7899 121.896 23.9835 122.238 23.3453 122.923C22.7188 123.597 22.4055 124.445 22.4055 125.467ZM0.445846 131.773V119.317H3.49152V124.299H8.01654V119.317H11.0623V131.773H8.01654V126.895H3.49152V131.773H0.445846ZM41.6248 120.938C40.4065 122.145 39.7975 123.655 39.7975 125.467C39.7975 127.325 40.4065 128.875 41.6248 130.118C42.8431 131.361 44.4036 131.982 46.3065 131.982C48.2094 131.982 49.7699 131.361 50.9882 130.118C52.2065 128.875 52.8155 127.325 52.8155 125.467C52.8155 123.655 52.2065 122.145 50.9882 120.938C49.7699 119.718 48.2094 119.109 46.3065 119.109C44.4036 119.109 42.8431 119.718 41.6248 120.938ZM43.8873 128.132C43.2608 127.424 42.9476 126.535 42.9476 125.467C42.9476 124.445 43.2608 123.597 43.8873 122.923C44.5255 122.238 45.332 121.896 46.3065 121.896C47.2813 121.896 48.0819 122.238 48.7083 122.923C49.3465 123.597 49.6657 124.445 49.6657 125.467C49.6657 126.535 49.3465 127.424 48.7083 128.132C48.0819 128.84 47.2813 129.195 46.3065 129.195C45.332 129.195 44.5255 128.84 43.8873 128.132ZM61.0184 131.773V119.317H64.0641V124.125H65.3172L67.8929 119.317H71.1647L67.8058 125.275V125.31L71.3563 131.773H67.9452L65.3172 126.721H64.0641V131.773H61.0184ZM81.8997 119.317L77.6706 131.773H80.8033L81.5517 129.16H85.4328L86.1985 131.773H89.331L85.1018 119.317H81.8997ZM84.7189 126.721H82.2652L82.9787 124.299C83.1295 123.777 83.2978 123.063 83.4835 122.157H83.5183L84.0229 124.299L84.7189 126.721ZM96.8508 131.773V119.317H99.8965V124.299H104.421V119.317H107.467V131.773H104.421V126.895H99.8965V131.773H96.8508ZM13.1066 13.1187V94.5204H23.8432V91.0685H17.1299V13.1187H13.1066ZM25.7918 78.0671V94.5204H29.8151V78.0671H25.7918ZM32.3945 86.2592C32.3945 83.8508 33.207 81.8409 34.8315 80.2302C36.4716 78.6041 38.5328 77.791 41.0158 77.791C43.5756 77.791 45.6829 78.5198 47.3382 79.9771L45.407 82.9916C44.932 82.562 44.319 82.2015 43.5678 81.9101C42.8167 81.6187 42.0963 81.473 41.4068 81.473C39.7819 81.473 38.5636 81.9178 37.7512 82.8076C36.9543 83.6818 36.5559 84.7863 36.5559 86.1213C36.5559 87.6399 37.0078 88.8519 37.9123 89.7569C38.8317 90.6622 39.9505 91.1146 41.2687 91.1146C42.4643 91.1146 43.5756 90.7158 44.6023 89.9182V88.6523H42.2805V85.2237H48.1659V94.5204H44.8092V94.06L44.8322 93.3698H44.7862C44.296 93.7994 43.6521 94.1446 42.8553 94.4052C42.0733 94.6661 41.2764 94.7966 40.464 94.7966C38.2569 94.7966 36.3565 94.0217 34.7625 92.4722C33.184 90.9228 32.3945 88.8519 32.3945 86.2592ZM51.0498 78.0671V94.5204H61.6713V91.0685H55.073V87.9621H60.085V84.5102H55.073V81.5187H61.3494V78.0671H51.0498ZM64.2513 94.5204V78.0671H69.9759C71.4319 78.0671 72.4972 78.1976 73.1715 78.4584C74.1217 78.8264 74.8651 79.4248 75.4016 80.2532C75.9381 81.0664 76.2062 82.0635 76.2062 83.2447C76.2062 84.1653 75.9916 85.0472 75.5624 85.8909C75.1335 86.7193 74.5279 87.333 73.7463 87.7321V87.7778C73.8996 87.9774 74.1064 88.3074 74.3671 88.7675L77.5627 94.5204H73.0794L70.1597 88.9745H68.2745V94.5204H64.2513ZM68.2745 85.5229H70.0219C70.681 85.5229 71.1942 85.3464 71.5622 84.9937C71.9301 84.6407 72.114 84.1422 72.114 83.4978C72.114 82.5928 71.792 82.0097 71.1485 81.7491C70.7958 81.5956 70.2901 81.5187 69.631 81.5187H68.2745V85.5229ZM80.7212 80.2071C79.1119 81.8027 78.3073 83.797 78.3073 86.1901C78.3073 88.6449 79.1119 90.6927 80.7212 92.3343C82.3308 93.9756 84.392 94.7966 86.9058 94.7966C89.4193 94.7966 91.4808 93.9756 93.0901 92.3343C94.6994 90.6927 95.5041 88.6449 95.5041 86.1901C95.5041 83.797 94.6994 81.8027 93.0901 80.2071C91.4808 78.5964 89.4193 77.791 86.9058 77.791C84.392 77.791 82.3308 78.5964 80.7212 80.2071ZM83.7099 89.7108C82.8823 88.7753 82.4686 87.6016 82.4686 86.1901C82.4686 84.8402 82.8823 83.7204 83.7099 82.8306C84.5532 81.9253 85.6181 81.473 86.9058 81.473C88.1932 81.473 89.2507 81.9253 90.0784 82.8306C90.9213 83.7204 91.343 84.8402 91.343 86.1901C91.343 87.6016 90.9213 88.7753 90.0784 89.7108C89.2507 90.6466 88.1932 91.1146 86.9058 91.1146C85.6181 91.1146 84.5532 90.6466 83.7099 89.7108Z"
                    ></path>
                  </svg>
                </a>
                <div className="footer__nav-block">
                  <ul className="footer__nav">
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Кальяны
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Аксессуары
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Табак
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Уголь
                      </a>
                    </li>
                  </ul>
                  <ul className="footer__nav">
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Блог
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Оплата и доствка
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link" href="">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__contacts">
                  <a className="footer__contacts-link" href="">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.61806 5.62972C3.65806 7.67361 5.33 9.34555 7.3775 10.3856L8.96639 8.79306C9.165 8.59444 9.45028 8.53667 9.69944 8.61611C10.5083 8.88333 11.3786 9.02778 12.2778 9.02778C12.6786 9.02778 13 9.34917 13 9.75V12.2778C13 12.6786 12.6786 13 12.2778 13C5.49611 13 0 7.50389 0 0.722222C0 0.321389 0.325 0 0.722222 0H3.25C3.65083 0 3.97222 0.321389 3.97222 0.722222C3.97222 1.62139 4.11667 2.49167 4.38389 3.30056C4.46333 3.54972 4.40556 3.835 4.20694 4.03361L2.61806 5.62972Z"></path>
                    </svg>
                    +38 (063) 746 - 51 - 51
                  </a>
                  <a className="footer__contacts-link" href="">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.61806 5.62972C3.65806 7.67361 5.33 9.34555 7.3775 10.3856L8.96639 8.79306C9.165 8.59444 9.45028 8.53667 9.69944 8.61611C10.5083 8.88333 11.3786 9.02778 12.2778 9.02778C12.6786 9.02778 13 9.34917 13 9.75V12.2778C13 12.6786 12.6786 13 12.2778 13C5.49611 13 0 7.50389 0 0.722222C0 0.321389 0.325 0 0.722222 0H3.25C3.65083 0 3.97222 0.321389 3.97222 0.722222C3.97222 1.62139 4.11667 2.49167 4.38389 3.30056C4.46333 3.54972 4.40556 3.835 4.20694 4.03361L2.61806 5.62972Z"></path>
                    </svg>
                    +38 (063) 746 - 51 - 51
                  </a>
                  <div className="footer__contacts-text">
                    Ежедневно с 9:00 до 21:00
                  </div>
                  <a className="footer__contacts-link" href="">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.5 8.125C6.28387 8.125 6.09375 8.04862 5.6875 7.852L0 4.875V10.5625C0 11.0094 0.365625 11.375 0.8125 11.375H12.1875C12.6344 11.375 13 11.0094 13 10.5625V4.875L7.3125 7.852C6.90625 8.04862 6.71613 8.125 6.5 8.125ZM12.1875 1.625H0.8125C0.365625 1.625 0 1.99062 0 2.4375V3.05337L6.5 6.46994L13 3.05337V2.4375C13 1.99062 12.6344 1.625 12.1875 1.625Z"></path>
                    </svg>
                    info@ligerohookah.com
                  </a>
                </div>
                <div className="footer__block">
                  <ul className="footer__socials">
                    <li className="footer__socials-item">
                      <a className="footer__socials-item-link" href="">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 18C13.9705 18 18 13.9705 18 9C18 4.02945 13.9705 0 9 0C4.02945 0 0 4.02945 0 9C0 13.9705 4.02945 18 9 18Z"></path>
                          <path
                            d="M3.35162 9.44026C4.40371 8.86074 5.57813 8.37706 6.67546 7.89091C8.56328 7.09464 10.4586 6.31216 12.3731 5.58369C12.7455 5.45956 13.4148 5.33818 13.4804 5.89018C13.4445 6.67153 13.2967 7.4483 13.1953 8.22508C12.9379 9.93328 12.6405 11.6356 12.3504 13.3382C12.2505 13.9053 11.54 14.1989 11.0855 13.836C9.99301 13.0981 8.89216 12.3673 7.81366 11.6123C7.46037 11.2533 7.78797 10.7378 8.1035 10.4815C9.00327 9.59473 9.9575 8.84135 10.8102 7.9088C11.0403 7.35331 10.3606 7.82146 10.1364 7.9649C8.90465 8.81375 7.703 9.71443 6.4043 10.4605C5.74092 10.8256 4.96775 10.5136 4.30467 10.3098C3.71014 10.0636 2.83893 9.81564 3.35156 9.4403L3.35162 9.44026Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="footer__socials-item">
                      <a className="footer__socials-item-link" href="">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.8842 4.19583C14.8842 4.79236 14.4006 5.27583 13.8042 5.27583C13.2078 5.27583 12.7242 4.79236 12.7242 4.19583C12.7242 3.5993 13.2078 3.11583 13.8042 3.11583C14.4007 3.11583 14.8842 3.5993 14.8842 4.19583ZM9 12C7.34316 12 6.00005 10.6568 6.00005 9C6.00005 7.34316 7.34316 6.00005 9 6.00005C10.6568 6.00005 12 7.34316 12 9C12 10.6568 10.6568 12 9 12ZM9 4.37836C6.44752 4.37836 4.37836 6.44752 4.37836 9C4.37836 11.5525 6.44752 13.6216 9 13.6216C11.5525 13.6216 13.6216 11.5525 13.6216 9C13.6216 6.44752 11.5525 4.37836 9 4.37836ZM9 1.62169C11.4031 1.62169 11.6878 1.63083 12.6367 1.67414C13.5142 1.71422 13.9908 1.86075 14.3079 1.98408C14.7279 2.14734 15.0277 2.34239 15.3427 2.65739C15.6577 2.97225 15.8528 3.27206 16.0161 3.69225C16.1392 4.00936 16.2859 4.48594 16.326 5.36344C16.3693 6.31252 16.3785 6.59714 16.3785 9.00028C16.3785 11.4034 16.3693 11.688 16.326 12.637C16.2859 13.5145 16.1394 13.9911 16.0161 14.3082C15.8528 14.7282 15.6577 15.028 15.3427 15.343C15.0279 15.658 14.7281 15.8531 14.3079 16.0163C13.9908 16.1395 13.5142 16.2862 12.6367 16.3263C11.6878 16.3696 11.4031 16.3787 9 16.3787C6.59672 16.3787 6.31209 16.3696 5.36316 16.3263C4.48566 16.2862 4.00908 16.1397 3.69197 16.0163C3.27192 15.8531 2.97211 15.658 2.65711 15.343C2.34225 15.0282 2.14706 14.7284 1.9838 14.3082C1.86061 13.9911 1.71394 13.5145 1.67386 12.637C1.63055 11.6879 1.62141 11.4033 1.62141 9.00028C1.62141 6.59714 1.63055 6.31252 1.67386 5.36344C1.71394 4.48594 1.86047 4.00936 1.9838 3.69225C2.14706 3.2722 2.34211 2.97239 2.65711 2.65739C2.97197 2.34239 3.27178 2.14734 3.69197 1.98408C4.00908 1.86089 4.48566 1.71422 5.36316 1.67414C6.31223 1.63083 6.59686 1.62169 9 1.62169ZM9 0C6.5558 0 6.24923 0.0104063 5.28933 0.0541406C4.33139 0.097875 3.67706 0.250031 3.10472 0.4725C2.51283 0.702422 2.01094 1.01025 1.51059 1.51059C1.01025 2.01094 0.702422 2.51283 0.4725 3.10472C0.250031 3.6772 0.097875 4.33139 0.0541406 5.28933C0.0104063 6.24923 0 6.5558 0 9C0 11.4442 0.0104063 11.7508 0.0541406 12.7107C0.097875 13.6686 0.250031 14.3228 0.4725 14.8953C0.702422 15.4872 1.01025 15.9891 1.51059 16.4894C2.01094 16.9897 2.51283 17.2974 3.10472 17.5275C3.6772 17.75 4.33139 17.9021 5.28933 17.9459C6.24923 17.9896 6.5558 18 9 18C11.4442 18 11.7508 17.9896 12.7107 17.9459C13.6686 17.9021 14.3228 17.75 14.8953 17.5275C15.4872 17.2974 15.9891 16.9897 16.4894 16.4894C16.9897 15.9891 17.2974 15.4872 17.5275 14.8953C17.75 14.3228 17.9021 13.6686 17.9459 12.7107C17.9896 11.7508 18 11.4442 18 9C18 6.5558 17.9896 6.24923 17.9459 5.28933C17.9021 4.33139 17.75 3.6772 17.5275 3.10472C17.2974 2.51283 16.9897 2.01094 16.4894 1.51059C15.9891 1.01025 15.4872 0.702563 14.8953 0.4725C14.3228 0.250031 13.6686 0.097875 12.7107 0.0541406C11.7508 0.0104063 11.4442 0 9 0Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="footer__socials-item">
                      <a className="footer__socials-item-link" href="">
                        <svg
                          width="9"
                          height="18"
                          viewBox="0 0 9 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.78571 18V9.99997H8.35714L9 6.66664H5.78571V5.33331C5.78571 3.99999 6.42983 3.33332 7.71428 3.33332H9V0C8.35714 0 7.55995 0 6.42857 0C4.06606 0 2.57143 1.92065 2.57143 4.66665V6.66664H0V9.99997H2.57143V17.9999L5.78571 18Z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="footer__socials-item">
                      <a className="footer__socials-item-link" href="">
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.788 3.0855C21.7234 2.36466 21.407 1.68961 20.8942 1.17886C20.3814 0.668108 19.7052 0.354304 18.9841 0.292534C17.2597 0.149446 14.7038 0 11.5501 0C7.75237 0 4.88562 0.155155 3.03225 0.300652C2.30777 0.358854 1.62723 0.671447 1.11105 1.18312C0.594864 1.69479 0.276309 2.37256 0.21175 3.0965C0.0982961 4.29023 0 5.86679 0 7.74653C0 9.57948 0.0974819 11.1282 0.210408 12.3071C0.275612 13.0304 0.594435 13.7073 1.11052 14.2183C1.62661 14.7292 2.30672 15.0413 3.03063 15.0992C4.88393 15.2447 7.75123 15.4 11.5501 15.4C14.7038 15.4 17.2597 15.2506 18.9841 15.1074C19.7052 15.0457 20.3815 14.7319 20.8942 14.2211C21.407 13.7104 21.7235 13.0353 21.788 12.3145C21.9016 11.127 22 9.56108 22 7.7C22 5.83892 21.9016 4.27297 21.788 3.0855ZM8.55353 10.9327V4.46734L14.9314 7.7L8.55353 10.9327Z">
                            {' '}
                          </path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <a className="footer__link" href="">
                    Политика конфиденциальности
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
       /* Slider */
       .slick-slider
       {
           position: relative;
       
           display: block;
           box-sizing: border-box;
       
           -webkit-user-select: none;
              -moz-user-select: none;
               -ms-user-select: none;
                   user-select: none;
       
           -webkit-touch-callout: none;
           -khtml-user-select: none;
           -ms-touch-action: pan-y;
               touch-action: pan-y;
           -webkit-tap-highlight-color: transparent;
       }
       
       .slick-list
       {
           position: relative;
       
           display: block;
           overflow: hidden;
       
           margin: 0;
           padding: 0;
       }
       .slick-list:focus
       {
           outline: none;
       }
       .slick-list.dragging
       {
           cursor: pointer;
           cursor: hand;
       }
       
       .slick-slider .slick-track,
       .slick-slider .slick-list
       {
           -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
               -ms-transform: translate3d(0, 0, 0);
                -o-transform: translate3d(0, 0, 0);
                   transform: translate3d(0, 0, 0);
       }
       
       .slick-track
       {
           position: relative;
           top: 0;
           left: 0;
       
           display: block;
           margin-left: auto;
           margin-right: auto;
       }
       .slick-track:before,
       .slick-track:after
       {
           display: table;
       
           content: '';
       }
       .slick-track:after
       {
           clear: both;
       }
       .slick-loading .slick-track
       {
           visibility: hidden;
       }
       
       .slick-slide
       {
           display: none;
           float: left;
       
           height: 100%;
           min-height: 1px;
       }
       [dir='rtl'] .slick-slide
       {
           float: right;
       }
       .slick-slide img
       {
           display: block;
       }
       .slick-slide.slick-loading img
       {
           display: none;
       }
       .slick-slide.dragging img
       {
           pointer-events: none;
       }
       .slick-initialized .slick-slide
       {
           display: block;
       }
       .slick-loading .slick-slide
       {
           visibility: hidden;
       }
       .slick-vertical .slick-slide
       {
           display: block;
       
           height: auto;
       
           border: 1px solid transparent;
       }
       .slick-arrow.slick-hidden {
           display: none;
       }
       
       .select2-container {
         box-sizing: border-box;
         display: inline-block;
         margin: 0;
         position: relative;
         vertical-align: middle; }
         .select2-container .select2-selection--single {
           box-sizing: border-box;
           cursor: pointer;
           display: block;
           height: 28px;
           user-select: none;
           -webkit-user-select: none; }
           .select2-container .select2-selection--single .select2-selection__rendered {
             display: block;
             padding-left: 8px;
             padding-right: 20px;
             overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap; }
           .select2-container .select2-selection--single .select2-selection__clear {
             background-color: transparent;
             border: none;
             font-size: 1em; }
         .select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
           padding-right: 8px;
           padding-left: 20px; }
         .select2-container .select2-selection--multiple {
           box-sizing: border-box;
           cursor: pointer;
           display: block;
           min-height: 32px;
           user-select: none;
           -webkit-user-select: none; }
           .select2-container .select2-selection--multiple .select2-selection__rendered {
             display: inline;
             list-style: none;
             padding: 0; }
           .select2-container .select2-selection--multiple .select2-selection__clear {
             background-color: transparent;
             border: none;
             font-size: 1em; }
         .select2-container .select2-search--inline .select2-search__field {
           box-sizing: border-box;
           border: none;
           font-size: 100%;
           margin-top: 5px;
           margin-left: 5px;
           padding: 0;
           max-width: 100%;
           resize: none;
           height: 18px;
           vertical-align: bottom;
           font-family: sans-serif;
           overflow: hidden;
           word-break: keep-all; }
           .select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {
             -webkit-appearance: none; }
       
       .select2-dropdown {
         background-color: white;
         border: 1px solid #aaa;
         border-radius: 4px;
         box-sizing: border-box;
         display: block;
         position: absolute;
         left: -100000px;
         width: 100%;
         z-index: 1051; }
       
       .select2-results {
         display: block; }
       
       .select2-results__options {
         list-style: none;
         margin: 0;
         padding: 0; }
       
       .select2-results__option {
         padding: 6px;
         user-select: none;
         -webkit-user-select: none; }
       
       .select2-results__option--selectable {
         cursor: pointer; }
       
       .select2-container--open .select2-dropdown {
         left: 0; }
       
       .select2-container--open .select2-dropdown--above {
         border-bottom: none;
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0; }
       
       .select2-container--open .select2-dropdown--below {
         border-top: none;
         border-top-left-radius: 0;
         border-top-right-radius: 0; }
       
       .select2-search--dropdown {
         display: block;
         padding: 4px; }
         .select2-search--dropdown .select2-search__field {
           padding: 4px;
           width: 100%;
           box-sizing: border-box; }
           .select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {
             -webkit-appearance: none; }
         .select2-search--dropdown.select2-search--hide {
           display: none; }
       
       .select2-close-mask {
         border: 0;
         margin: 0;
         padding: 0;
         display: block;
         position: fixed;
         left: 0;
         top: 0;
         min-height: 100%;
         min-width: 100%;
         height: auto;
         width: auto;
         opacity: 0;
         z-index: 99;
         background-color: #fff;
         filter: alpha(opacity=0); }
       
       .select2-hidden-accessible {
         border: 0 !important;
         clip: rect(0 0 0 0) !important;
         -webkit-clip-path: inset(50%) !important;
         clip-path: inset(50%) !important;
         height: 1px !important;
         overflow: hidden !important;
         padding: 0 !important;
         position: absolute !important;
         width: 1px !important;
         white-space: nowrap !important; }
       
       .select2-container--default .select2-selection--single {
         background-color: #fff;
         border: 1px solid #aaa;
         border-radius: 4px; }
         .select2-container--default .select2-selection--single .select2-selection__rendered {
           color: #444;
           line-height: 28px; }
         .select2-container--default .select2-selection--single .select2-selection__clear {
           cursor: pointer;
           float: right;
           font-weight: bold;
           height: 26px;
           margin-right: 20px;
           padding-right: 0px; }
         .select2-container--default .select2-selection--single .select2-selection__placeholder {
           color: #999; }
         .select2-container--default .select2-selection--single .select2-selection__arrow {
           height: 26px;
           position: absolute;
           top: 1px;
           right: 1px;
           width: 20px; }
           .select2-container--default .select2-selection--single .select2-selection__arrow b {
             border-color: #888 transparent transparent transparent;
             border-style: solid;
             border-width: 5px 4px 0 4px;
             height: 0;
             left: 50%;
             margin-left: -4px;
             margin-top: -2px;
             position: absolute;
             top: 50%;
             width: 0; }
       
       .select2-container--default[dir="rtl"] .select2-selection--single .select2-selection__clear {
         float: left; }
       
       .select2-container--default[dir="rtl"] .select2-selection--single .select2-selection__arrow {
         left: 1px;
         right: auto; }
       
       .select2-container--default.select2-container--disabled .select2-selection--single {
         background-color: #eee;
         cursor: default; }
         .select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {
           display: none; }
       
       .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
         border-color: transparent transparent #888 transparent;
         border-width: 0 4px 5px 4px; }
       
       .select2-container--default .select2-selection--multiple {
         background-color: white;
         border: 1px solid #aaa;
         border-radius: 4px;
         cursor: text;
         padding-bottom: 5px;
         padding-right: 5px;
         position: relative; }
         .select2-container--default .select2-selection--multiple.select2-selection--clearable {
           padding-right: 25px; }
         .select2-container--default .select2-selection--multiple .select2-selection__clear {
           cursor: pointer;
           font-weight: bold;
           height: 20px;
           margin-right: 10px;
           margin-top: 5px;
           position: absolute;
           right: 0;
           padding: 1px; }
         .select2-container--default .select2-selection--multiple .select2-selection__choice {
           background-color: #e4e4e4;
           border: 1px solid #aaa;
           border-radius: 4px;
           box-sizing: border-box;
           display: inline-block;
           margin-left: 5px;
           margin-top: 5px;
           padding: 0;
           padding-left: 20px;
           position: relative;
           max-width: 100%;
           overflow: hidden;
           text-overflow: ellipsis;
           vertical-align: bottom;
           white-space: nowrap; }
         .select2-container--default .select2-selection--multiple .select2-selection__choice__display {
           cursor: default;
           padding-left: 2px;
           padding-right: 5px; }
         .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
           background-color: transparent;
           border: none;
           border-right: 1px solid #aaa;
           border-top-left-radius: 4px;
           border-bottom-left-radius: 4px;
           color: #999;
           cursor: pointer;
           font-size: 1em;
           font-weight: bold;
           padding: 0 4px;
           position: absolute;
           left: 0;
           top: 0; }
           .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover, .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:focus {
             background-color: #f1f1f1;
             color: #333;
             outline: none; }
       
       .select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
         margin-left: 5px;
         margin-right: auto; }
       
       .select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice__display {
         padding-left: 5px;
         padding-right: 2px; }
       
       .select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice__remove {
         border-left: 1px solid #aaa;
         border-right: none;
         border-top-left-radius: 0;
         border-bottom-left-radius: 0;
         border-top-right-radius: 4px;
         border-bottom-right-radius: 4px; }
       
       .select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__clear {
         float: left;
         margin-left: 10px;
         margin-right: auto; }
       
       .select2-container--default.select2-container--focus .select2-selection--multiple {
         border: solid black 1px;
         outline: 0; }
       
       .select2-container--default.select2-container--disabled .select2-selection--multiple {
         background-color: #eee;
         cursor: default; }
       
       .select2-container--default.select2-container--disabled .select2-selection__choice__remove {
         display: none; }
       
       .select2-container--default.select2-container--open.select2-container--above .select2-selection--single, .select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {
         border-top-left-radius: 0;
         border-top-right-radius: 0; }
       
       .select2-container--default.select2-container--open.select2-container--below .select2-selection--single, .select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0; }
       
       .select2-container--default .select2-search--dropdown .select2-search__field {
         border: 1px solid #aaa; }
       
       .select2-container--default .select2-search--inline .select2-search__field {
         background: transparent;
         border: none;
         outline: 0;
         box-shadow: none;
         -webkit-appearance: textfield; }
       
       .select2-container--default .select2-results > .select2-results__options {
         max-height: 200px;
         overflow-y: auto; }
       
       .select2-container--default .select2-results__option .select2-results__option {
         padding-left: 1em; }
         .select2-container--default .select2-results__option .select2-results__option .select2-results__group {
           padding-left: 0; }
         .select2-container--default .select2-results__option .select2-results__option .select2-results__option {
           margin-left: -1em;
           padding-left: 2em; }
           .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
             margin-left: -2em;
             padding-left: 3em; }
             .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
               margin-left: -3em;
               padding-left: 4em; }
               .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
                 margin-left: -4em;
                 padding-left: 5em; }
                 .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
                   margin-left: -5em;
                   padding-left: 6em; }
       
       .select2-container--default .select2-results__option--group {
         padding: 0; }
       
       .select2-container--default .select2-results__option--disabled {
         color: #999; }
       
       .select2-container--default .select2-results__option--selected {
         background-color: #ddd; }
       
       .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
         background-color: #5897fb;
         color: white; }
       
       .select2-container--default .select2-results__group {
         cursor: default;
         display: block;
         padding: 6px; }
       
       .select2-container--classic .select2-selection--single {
         background-color: #f7f7f7;
         border: 1px solid #aaa;
         border-radius: 4px;
         outline: 0;
         background-image: -webkit-linear-gradient(top, white 50%, #eeeeee 100%);
         background-image: -o-linear-gradient(top, white 50%, #eeeeee 100%);
         background-image: linear-gradient(to bottom, white 50%, #eeeeee 100%);
         background-repeat: repeat-x;
         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }
         .select2-container--classic .select2-selection--single:focus {
           border: 1px solid #5897fb; }
         .select2-container--classic .select2-selection--single .select2-selection__rendered {
           color: #444;
           line-height: 28px; }
         .select2-container--classic .select2-selection--single .select2-selection__clear {
           cursor: pointer;
           float: right;
           font-weight: bold;
           height: 26px;
           margin-right: 20px; }
         .select2-container--classic .select2-selection--single .select2-selection__placeholder {
           color: #999; }
         .select2-container--classic .select2-selection--single .select2-selection__arrow {
           background-color: #ddd;
           border: none;
           border-left: 1px solid #aaa;
           border-top-right-radius: 4px;
           border-bottom-right-radius: 4px;
           height: 26px;
           position: absolute;
           top: 1px;
           right: 1px;
           width: 20px;
           background-image: -webkit-linear-gradient(top, #eeeeee 50%, #cccccc 100%);
           background-image: -o-linear-gradient(top, #eeeeee 50%, #cccccc 100%);
           background-image: linear-gradient(to bottom, #eeeeee 50%, #cccccc 100%);
           background-repeat: repeat-x;
           filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0); }
           .select2-container--classic .select2-selection--single .select2-selection__arrow b {
             border-color: #888 transparent transparent transparent;
             border-style: solid;
             border-width: 5px 4px 0 4px;
             height: 0;
             left: 50%;
             margin-left: -4px;
             margin-top: -2px;
             position: absolute;
             top: 50%;
             width: 0; }
       
       .select2-container--classic[dir="rtl"] .select2-selection--single .select2-selection__clear {
         float: left; }
       
       .select2-container--classic[dir="rtl"] .select2-selection--single .select2-selection__arrow {
         border: none;
         border-right: 1px solid #aaa;
         border-radius: 0;
         border-top-left-radius: 4px;
         border-bottom-left-radius: 4px;
         left: 1px;
         right: auto; }
       
       .select2-container--classic.select2-container--open .select2-selection--single {
         border: 1px solid #5897fb; }
         .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow {
           background: transparent;
           border: none; }
           .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b {
             border-color: transparent transparent #888 transparent;
             border-width: 0 4px 5px 4px; }
       
       .select2-container--classic.select2-container--open.select2-container--above .select2-selection--single {
         border-top: none;
         border-top-left-radius: 0;
         border-top-right-radius: 0;
         background-image: -webkit-linear-gradient(top, white 0%, #eeeeee 50%);
         background-image: -o-linear-gradient(top, white 0%, #eeeeee 50%);
         background-image: linear-gradient(to bottom, white 0%, #eeeeee 50%);
         background-repeat: repeat-x;
         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }
       
       .select2-container--classic.select2-container--open.select2-container--below .select2-selection--single {
         border-bottom: none;
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
         background-image: -webkit-linear-gradient(top, #eeeeee 50%, white 100%);
         background-image: -o-linear-gradient(top, #eeeeee 50%, white 100%);
         background-image: linear-gradient(to bottom, #eeeeee 50%, white 100%);
         background-repeat: repeat-x;
         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0); }
       
       .select2-container--classic .select2-selection--multiple {
         background-color: white;
         border: 1px solid #aaa;
         border-radius: 4px;
         cursor: text;
         outline: 0;
         padding-bottom: 5px;
         padding-right: 5px; }
         .select2-container--classic .select2-selection--multiple:focus {
           border: 1px solid #5897fb; }
         .select2-container--classic .select2-selection--multiple .select2-selection__clear {
           display: none; }
         .select2-container--classic .select2-selection--multiple .select2-selection__choice {
           background-color: #e4e4e4;
           border: 1px solid #aaa;
           border-radius: 4px;
           display: inline-block;
           margin-left: 5px;
           margin-top: 5px;
           padding: 0; }
         .select2-container--classic .select2-selection--multiple .select2-selection__choice__display {
           cursor: default;
           padding-left: 2px;
           padding-right: 5px; }
         .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove {
           background-color: transparent;
           border: none;
           border-top-left-radius: 4px;
           border-bottom-left-radius: 4px;
           color: #888;
           cursor: pointer;
           font-size: 1em;
           font-weight: bold;
           padding: 0 4px; }
           .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover {
             color: #555;
             outline: none; }
       
       .select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
         margin-left: 5px;
         margin-right: auto; }
       
       .select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice__display {
         padding-left: 5px;
         padding-right: 2px; }
       
       .select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice__remove {
         border-top-left-radius: 0;
         border-bottom-left-radius: 0;
         border-top-right-radius: 4px;
         border-bottom-right-radius: 4px; }
       
       .select2-container--classic.select2-container--open .select2-selection--multiple {
         border: 1px solid #5897fb; }
       
       .select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple {
         border-top: none;
         border-top-left-radius: 0;
         border-top-right-radius: 0; }
       
       .select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple {
         border-bottom: none;
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0; }
       
       .select2-container--classic .select2-search--dropdown .select2-search__field {
         border: 1px solid #aaa;
         outline: 0; }
       
       .select2-container--classic .select2-search--inline .select2-search__field {
         outline: 0;
         box-shadow: none; }
       
       .select2-container--classic .select2-dropdown {
         background-color: white;
         border: 1px solid transparent; }
       
       .select2-container--classic .select2-dropdown--above {
         border-bottom: none; }
       
       .select2-container--classic .select2-dropdown--below {
         border-top: none; }
       
       .select2-container--classic .select2-results > .select2-results__options {
         max-height: 200px;
         overflow-y: auto; }
       
       .select2-container--classic .select2-results__option--group {
         padding: 0; }
       
       .select2-container--classic .select2-results__option--disabled {
         color: grey; }
       
       .select2-container--classic .select2-results__option--highlighted.select2-results__option--selectable {
         background-color: #3875d7;
         color: white; }
       
       .select2-container--classic .select2-results__group {
         cursor: default;
         display: block;
         padding: 6px; }
       
       .select2-container--classic.select2-container--open .select2-dropdown {
         border-color: #5897fb; }
       
       @font-face{font-family:'Museo Sans Cyrl 700';src:url("../static/fonts/MuseoSansCyrl-700.woff2") format("woff2"),url("../static/fonts/MuseoSansCyrl-700.woff") format("woff");font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:'Museo Sans Cyrl 500';src:url("../static/fonts/MuseoSansCyrl-500.woff2") format("woff2"),url("../static/fonts/MuseoSansCyrl-500.woff") format("woff");font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:'Oswald';src:url("../static/fonts/Oswald-Medium.woff2") format("woff2"),url("../static/fonts/Oswald-Medium.woff") format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:'Museo Sans Cyrl 900';src:url("../static/fonts/MuseoSansCyrl-900.woff2") format("woff2"),url("../static/fonts/MuseoSansCyrl-900.woff") format("woff");font-weight:bold;font-style:normal;font-display:swap}ul,ol{list-style-type:none;margin:0;padding:0}h1,h2,h3,h4,h5,h6,p{margin:0}a{color:inherit;text-decoration:none}a:hover{text-decoration:none}a:focus{outline:none}body{overflow-x:hidden;color:#1C1B1B;margin:0;font-family:'Museo Sans Cyrl 500';background-color:#F7F6F4}body.disable-scroll{overflow:hidden}*{box-sizing:border-box}h2,.h2{font-size:40px;line-height:125%;font-family:'Museo Sans Cyrl 700';color:#333}h4,.h4{font-size:28px;line-height:125%;font-family:'Museo Sans Cyrl 700'}p{font-size:17px;line-height:170%;color:#333}.btn{padding:0 18px;height:34px;line-height:34px;background-color:#FFA800;display:inline-block;font-size:11px;color:#fff;letter-spacing:0.1em;font-family:'Museo Sans Cyrl 700';text-transform:uppercase;border:none;cursor:pointer;border-radius:34px;transition:0.3s}.btn:hover{background-color:#333;color:#fff}.btn--black{background-color:#1C1B1B;color:#ffffff}.btn--black:hover{background-color:#FFA800}.btn--xl{height:46px;line-height:46px}@media (max-width: 1500px){p{font-size:15px}}@media (max-width: 1024px){h2,.h2{font-size:36px}}@media (max-width: 768px){p{font-size:14px}h2,.h2{font-size:24px}}.socials{display:flex;align-items:center;justify-content:center}.socials__item{margin-right:30px}.socials__item:last-child{margin-right:0}.socials__item-link{display:flex;align-items:center;justify-content:center}.socials__item-link svg{fill:#fff;transition:0.3s}.socials__item-link:hover svg{fill:#FFA800}.container{padding:0 90px 0 330px;width:100%}.container-inner{padding:0 35px;width:100%}.mb-xl{margin-bottom:120px}.mb-lg{margin-bottom:100px}.mb-md{margin-bottom:50px}.wrapper{overflow:hidden}@media (max-width: 1500px){.container{padding:0 70px 0 220px}}@media (max-width: 1024px){.main{padding-top:60px}.container{padding:0 35px}.container-inner{padding:0}.container-inner--border{bottom:-100px}}@media (max-width: 768px){.container{padding:0 20px}}.sidebar{position:fixed;top:0;left:0;width:300px;height:100vh;background-color:#1C1B1B;padding:40px 0;display:flex;flex-direction:column;justify-content:space-between;background-image:url(../static/img/sidebar-bg.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;z-index:10}.sidebar:after{content:'';position:fixed;top:0;left:0;width:300px;height:100%;background-color:rgba(28,27,27,0.92)}.sidebar__top{position:relative;z-index:1}.sidebar__middle{padding:40px 0;position:relative;z-index:1}.sidebar__bot{position:relative;z-index:1}.sidebar__logo{width:98px;margin:0 auto;display:block}.sidebar__logo svg{fill:#ffffff;transition:0.3s}.sidebar__logo:hover svg{fill:#FFA800}.sidebar__page-nav{display:flex;flex-wrap:wrap;max-width:175px;margin:0 auto 25px}.sidebar__page-nav-item{margin:0 15px 15px;position:relative}.sidebar__page-nav-link{color:#C8C8C8;transition:0.3s}.sidebar__page-nav-link:hover{color:#FFA800}.sidebar__nav-item{margin-bottom:5vh;position:relative}.sidebar__nav-item:last-child{margin-bottom:0}.sidebar__nav-item:hover .sidebar__nav-link-icon svg{fill:#FFA800}.sidebar__nav-item:hover .sidebar__nav-link-title{color:#FFA800}.sidebar__nav-item:hover .sidebar__nav-link-arr{right:40px;opacity:1}.sidebar__nav-item:hover .sidebar__menu{pointer-events:all;left:300px;opacity:1}.sidebar__nav-item:nth-child(2) .sidebar__menu{top:calc(-71px - 40px - 5vh)}.sidebar__nav-item:nth-child(3) .sidebar__menu{top:calc(-71px - 63px - 40px - 10vh)}.sidebar__nav-item:nth-child(4) .sidebar__menu{top:calc(-71px - 63px - 61px - 40px - 15vh)}.sidebar__nav-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.sidebar__nav-link:hover .sidebar__nav-link-icon svg{fill:#FFA800}.sidebar__nav-link:hover .sidebar__nav-link-title{color:#FFA800}.sidebar__nav-link:hover .sidebar__nav-link-arr{right:40px;opacity:1}.sidebar__nav-link-icon{margin-bottom:15px}.sidebar__nav-link-icon svg{fill:#ffffff;transition:0.3s}.sidebar__nav-link-title{font-size:13px;line-height:16px;color:#fff;text-transform:uppercase;letter-spacing:0.2em;transition:0.3s}.sidebar__nav-link-title:hover{color:#FFA800}.sidebar__nav-link-arr{position:absolute;top:50%;transform:translateY(-50%);transition:0.3s;opacity:0;right:30px}.sidebar__nav-link-arr svg{stroke:#FFA800;transition:0.3s}.sidebar__nav-submenu{position:absolute;top:50%;transform:translateY(-50%);left:100%;width:980px}.sidebar__menu{z-index:3;position:absolute;top:-40px;left:270px;background:#1C1B1B;width:100%;width:980px;display:flex;min-height:485px;opacity:0;pointer-events:none;transition:0.3s;justify-content:space-between}.sidebar__menu.active{pointer-events:all;left:300px;opacity:1}.sidebar__menu-list{margin-bottom:-30px;display:flex;flex-wrap:wrap;padding:90px 10px 90px 75px;flex-grow:1}.sidebar__menu-item{margin-bottom:30px;width:calc(100% / 3)}.sidebar__menu-link{font-size:18px;line-height:22px;color:#fff;position:relative;display:inline-block;transition:0.3s}.sidebar__menu-link:after{content:'';position:absolute;bottom:-2px;left:0;width:0;border-bottom:1px solid #FFA800;transition:0.3s}.sidebar__menu-link:hover{color:#FFA800}.sidebar__menu-link:hover:after{width:100%}.sidebar__menu-img{width:310px;flex-shrink:0}.sidebar__menu-img img{display:block;width:100%;height:100%;object-fit:cover}@media (max-width: 1500px){.sidebar{width:210px}.sidebar:after{width:210px}.sidebar__menu{left:180px;width:calc(100vw - 210px - 60px - 10px)}.sidebar__nav-item:hover .sidebar__menu{left:210px}.sidebar__menu-img{display:none}}@media (max-width: 1024px){.sidebar{display:none}}#sidebar-menu-2,#sidebar-menu-3,#sidebar-menu-4{display:none}.bar{position:fixed;top:0;right:0;width:60px;padding:40px 0;height:100%;background-color:rgba(28,27,27,0.88);background-image:url(../static/img/bar-bg.jpg);background-size:cover;background-repeat:no-repeat;z-index:10}.bar__list{padding-bottom:20px;margin-bottom:20px;display:flex;flex-direction:column;align-items:center;position:relative}.bar__list:after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:24px;border-bottom:1px solid #444444}.bar__list-item{margin-bottom:20px}.bar__list-item:last-child{margin-bottom:0}.bar__list-item-link{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#383838;box-shadow:0px 5px 12px rgba(0,0,0,0.04);transition:0.3s;position:relative}.bar__list-item-link svg{fill:#C9C9C9;transition:0.3s}.bar__list-item-link:hover{background:#FFA800}.bar__list-item-link:hover svg{fill:#333}.bar__list-item-link:hover .bar__tooltip{opacity:1}.bar__tooltip{background:#1C1B1B;box-shadow:0px 4px 18px rgba(0,0,0,0.18);border-radius:2px;padding:15px;position:absolute;top:50%;transform:translateY(-50%);right:calc(100% + 20px);width:210px;opacity:0;transition:0.3s;pointer-events:none}.bar__tooltip:after{content:'';position:absolute;top:50%;right:-6px;transform:translateY(-50%);width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:8px solid #1C1B1B}.bar__tooltip-title{font-weight:600;font-size:15px;line-height:130%;color:#fff}.bar__tooltip-text{font-size:13px;line-height:130%;color:#C1C1C1;margin-top:3px}@media (max-width: 1024px){.bar{display:none}}.langs__item{margin-bottom:20px}.langs__item:last-child{margin-bottom:0}.langs__item.current{pointer-events:none}.langs__item.current .langs__item-link{color:#fff}.langs__item-link{font-size:14px;line-height:17px;color:#C8C8C8;transition:0.3s;display:block;text-align:center}.langs__item-link:hover{color:#FFA800}.up-btn{cursor:pointer;position:absolute;bottom:40px;left:50%;transform:translateX(-50%)}.up-btn__icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#383838;box-shadow:0px 5px 12px rgba(0,0,0,0.04);transition:0.3s;margin:0 auto 10px}.up-btn__icon svg{fill:#C9C9C9;transition:0.3s}.up-btn__text{font-size:12px;line-height:14px;text-transform:uppercase;letter-spacing:0.1em;color:#787878;transition:0.3s}.up-btn:hover .up-btn__icon{background-color:#FFA800}.up-btn:hover .up-btn__icon svg{fill:#333333}.up-btn:hover .up-btn__text{color:#fff}.header{padding:10px 0;background-color:#1C1B1B;position:fixed;top:0;left:0;width:100%;z-index:10;height:60px;display:flex;align-items:center}.header__inner{width:100%;display:flex;align-items:center;justify-content:space-between}.header__logo{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.header__controls{display:flex;align-items:center}.header__controls-item{margin-right:25px}.header__controls-item:last-child{margin-right:0}.header__controls-item-link{display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0;position:relative}.header__controls-item-link svg{fill:#C8C8C8;transition:0.3s}.header__controls-item-link:hover svg{fill:#ffffff}.header__controls-item-amount{position:absolute;top:-10px;right:-10px;width:18px;height:18px;border-radius:50%;background-color:#FFA800;font-size:12px;color:#333333;display:flex;align-items:center;justify-content:center}@media (min-width: 1024px){.header{display:none}}@media (max-width: 768px){.header__controls-item:nth-child(1){display:none}}.section{padding:100px 0 120px}.section__header{margin-bottom:70px;display:flex;align-items:center;justify-content:space-between}.section-grey{background-color:#F7F6F4}.section-white{background-color:#fff}.section--border{position:relative}.section--border:after{content:'';position:absolute;bottom:0px;border-bottom:1px solid #E1DCD5;width:calc(100% - 330px - 70px - 90px);left:365px}@media (max-width: 1500px){.section--border:after{width:calc(100% - 220px - 70px - 70px);left:255px}}@media (max-width: 1024px){.section{padding:80px 0 100px}.section__header{margin-bottom:40px}.section--border:after{width:calc(100% - 70px);left:35px}}@media (max-width: 768px){.section{padding:40px 0}}.section-text h2{margin-bottom:30px}.section-text p{margin-bottom:30px}.section-text p:last-child{margin-bottom:0}@media (max-width: 1500px){.section-text p{margin-bottom:20px}}@media (max-width: 768px){.section-text h2{font-size:28px;margin-bottom:15px}.section-text p{margin-bottom:10px}}.footer{padding:80px 0;background-color:#fff}.footer__inner{display:flex;justify-content:space-between}.footer__logo svg{fill:#FFA800;transition:0.3s}.footer__logo:hover svg{fill:#333}.footer__nav-block{display:flex}.footer__nav{margin-right:80px}.footer__nav:last-child{margin-right:0}.footer__nav-item{margin-bottom:20px}.footer__nav-item:last-child{margin-bottom:0}.footer__nav-link{font-size:15px;line-height:18px;transition:0.3s;color:#555555;font-family:'Museo Sans Cyrl 700'}.footer__nav-link:hover{color:#FFA800}.footer__block{max-width:165px}.footer__socials{display:flex;align-items:center;margin-bottom:40px}.footer__socials-item{margin-right:30px}.footer__socials-item:last-child{margin-right:0}.footer__socials-item-link svg{fill:#555555;transition:0.3s}.footer__socials-item-link:hover svg{fill:#FFA800}.footer__link{font-size:15px;line-height:130%;color:#AAAAAA;transition:0.3s}.footer__link:hover{color:#333}.footer__contacts{max-width:215px}.footer__contacts-link{display:flex;align-items:center;color:#555555;transition:0.3s;font-family:'Museo Sans Cyrl 900';margin-bottom:10px;font-size:16px;line-height:19px}.footer__contacts-link svg{fill:#555555;transition:0.3s;margin-right:10px;flex-shrink:0}.footer__contacts-link:hover{color:#FFA800}.footer__contacts-link:hover svg{fill:#FFA800}.footer__contacts-text{font-size:13px;line-height:130%;color:#AAAAAA;padding-left:23px;border-bottom:1px solid #E1DCD5;padding-bottom:15px;margin-bottom:15px}@media (max-width: 1500px){.footer__nav{margin-right:30px}}@media (max-width: 1200px){.footer__inner{flex-wrap:wrap}.footer__block{margin-top:30px;min-width:100%;width:100%;display:flex;align-items:center;justify-content:space-between}.footer__socials{margin-bottom:0}}@media (max-width: 1024px){.footer__block{margin-top:60px}}@media (max-width: 768px){.footer{padding:40px 0}.footer__logo{margin:0 auto 40px}.footer__nav-block{width:100%;margin-bottom:40px}.footer__contacts{margin:0 auto 40px}.footer__block{margin-top:0;flex-direction:column}.footer__socials{margin-bottom:40px}.footer__nav{margin-right:0;width:50%}}.overlay{background-color:rgba(28,27,27,0.7);position:fixed;top:0;left:0;width:100%;height:100%;transition:0.3s;pointer-events:none;opacity:0;z-index:9}.overlay.active{opacity:1;pointer-events:all}.menu{width:340px;background-color:#1C1B1B;padding:15px 35px;height:calc(100% - 60px);position:fixed;top:60px;left:-100%;z-index:10;overflow-y:auto;transition:0.3s;opacity:0}.menu.active{left:0;opacity:1}.menu__langs{display:flex;align-items:center;padding-bottom:15px;margin-bottom:20px;border-bottom:1px solid #383838}.menu__langs-item{margin-right:30px}.menu__langs-item:last-child{margin-right:0}.menu__langs-item.active .menu__langs-link{pointer-events:none;color:#C8C8C8}.menu__langs-link{font-size:14px;line-height:17px;color:#666666;transition:0.3s}.menu__langs-link:hover{color:#C8C8C8}.menu__nav{padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #383838}.menu__nav-item{margin-bottom:25px}.menu__nav-item:last-child{margin-bottom:0}.menu__nav-item.active .menu__nav-link-icon svg{fill:#FFA800}.menu__nav-item.active .menu__nav-link-text{color:#FFA800}.menu__nav-item.active .menu__nav-link-arr{stroke:#FFA800}.menu__nav-item.active .menu__nav-submenu{display:flex}.menu__nav-item.active .menu__nav-submenu-item{transform:translate(0);transition-delay:0.3s;opacity:1}.menu__nav-link{display:flex;align-items:center;justify-content:space-between}.menu__nav-link:hover .menu__nav-link-icon svg{fill:#FFA800}.menu__nav-link:hover .menu__nav-link-text{color:#FFA800}.menu__nav-link:hover .menu__nav-link-arr{stroke:#FFA800}.menu__nav-link-icon{width:38px;margin-right:15px}.menu__nav-link-icon svg{fill:#fff;transition:0.3s}.menu__nav-link-text{font-size:13px;line-height:16px;color:#fff;letter-spacing:0.2em;text-transform:uppercase;transition:0.3s;text-align:left}.menu__nav-link-arr{stroke:#999999;transition:0.3s;flex-grow:1;display:flex;justify-content:flex-end}.menu__nav-submenu{flex-wrap:wrap;display:none;transition:0.3s;margin:20px 0 -5px}.menu__nav-submenu-item{width:50%;margin-bottom:20px;opacity:0;transition:0.3s}.menu__nav-submenu-link{font-size:14px;line-height:17px;color:#fff;display:inline-block;position:relative;white-space:nowrap}.menu__nav-submenu-link:after{content:'';position:absolute;bottom:0;left:0;border-bottom:1px solid #FFA800;transition:0.3s;width:0}.menu__nav-submenu-link:hover{color:#FFA800}.menu__nav-submenu-link:hover:after{width:100%}.menu__page-nav{margin-bottom:40px}.menu__page-nav-item{margin-bottom:25px}.menu__page-nav-link{font-size:16px;line-height:19px;color:#C8C8C8;transition:0.3s}.menu__page-nav-link:hover{color:#fff}.menu__controls{padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #383838}.menu__controls-item{margin-bottom:25px}.menu__controls-item:last-child{margin-bottom:0}.menu__controls-link{display:flex;align-items:center;justify-content:space-between}.menu__controls-link:hover .menu__controls-link-icon svg{fill:#FFA800}.menu__controls-link:hover .menu__controls-link-text{color:#FFA800}.menu__controls-link-icon{width:38px;margin-right:15px}.menu__controls-link-icon svg{fill:#fff;transition:0.3s}.menu__controls-link-text{font-size:13px;line-height:16px;color:#fff;letter-spacing:0.2em;text-transform:uppercase;transition:0.3s;text-align:left;margin-right:auto}.menu .socials{justify-content:flex-start}.page-header{margin-bottom:-40px;position:relative;z-index:1}.page-header__top{padding:30px 0;border-bottom:1px solid #E1DCD5}.page-header .breadcrumbs{margin-top:20px}.page-header--white{background-color:#fff}.page-header--filter .page-header__top{display:flex;align-items:center;justify-content:space-between}@media (max-width: 1024px){.page-header--filter .page-header__top{padding-top:10px}}@media (max-width: 768px){.page-header{margin-bottom:0px}.page-header__top{padding-bottom:10px;padding-top:20px}.page-header .breadcrumbs{margin-top:10px}}.breadcrumbs{display:flex;align-items:center;flex-wrap:wrap}.breadcrumbs__item{position:relative}.breadcrumbs__item:after{content:'/';font-size:14px;line-height:17px;color:#999999;margin:0 0.5rem}.breadcrumbs__item:last-child{pointer-events:none}.breadcrumbs__item:last-child:after{display:none}.breadcrumbs__item-link{font-size:14px;line-height:17px;color:#999999;transition:0.3s}.breadcrumbs__item-link:hover{color:#1C1B1B}.banners-section{margin-bottom:50px;padding-top:30px}.banners-section__row{display:flex;flex-wrap:wrap;margin:0 -7.5px -15px}.banners-section__col{padding:0 7.5px;width:100%}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:33.3333%}.banners-section__item{width:100%;display:flex;flex-direction:column;justify-content:center;background-size:cover;background-repeat:no-repeat;background-position:center;position:relative;height:280px;margin-bottom:15px;padding:0 35px;overflow:hidden}.banners-section__item:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5)}.banners-section__item:hover .banners-section__item-text{color:#FFA800}.banners-section__item--main{height:440px}.banners-section__item--main .banners-section__item-title{font-size:56px;line-height:120%}.banners-section__item-icon{display:none}.banners-section__item-title{color:#fff;position:relative;z-index:1;font-size:42px;line-height:120%;margin-bottom:5px;font-family:'Museo Sans Cyrl 700'}.banners-section__item-text{font-size:15px;line-height:130%;color:#AAAAAA;position:relative;z-index:1;transition:0.3s}@media (max-width: 1500px){.banners-section{padding-top:10px}.banners-section__row{margin:0 -5px -10px}.banners-section__col{padding:0 5px}.banners-section__item{height:200px;margin-bottom:10px}.banners-section__item--main{height:300px}.banners-section__item--main .banners-section__item-title{font-size:48px;line-height:120%}.banners-section__item-title{font-size:34px;line-height:120%}}@media (max-width: 1024px){.banners-section{padding-top:30px}.banners-section__col{width:50%}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:50%}.banners-section__item{height:250px;flex-direction:row;align-items:center;justify-content:flex-start}.banners-section__item--main{height:250px}.banners-section__item--main .banners-section__item-title{font-size:36px}.banners-section__item-title{font-size:36px}.banners-section__item-icon{display:block;position:relative;z-index:1;margin-right:15px}.banners-section__item-icon svg{fill:#FFA800}}@media (max-width: 768px){.banners-section{margin-bottom:40px;padding-top:20px}.banners-section__row{margin-bottom:-10px}.banners-section__col{width:100%}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:100%}.banners-section__item{background-image:inherit !important;padding:20px;border:2px solid #E1DCD5;height:auto;margin-bottom:10px}.banners-section__item:after{display:none}.banners-section__item:hover{border:1px solid #FFA800}.banners-section__item--main{height:auto}.banners-section__item--main .banners-section__item-title{font-size:20px}.banners-section__item-title{font-size:20px;color:#333}.banners-section__item-icon{width:40px}.banners-section__item-icon svg{width:100%}}.benefits-section{margin-bottom:50px}.benefits-section__row{display:flex;flex-wrap:wrap;margin:0 -7.5px}.benefits-section__col{width:25%;padding:0 7.5px}.benefits-section__item{display:flex;align-items:center}.benefits-section__item-icon{margin-right:15px}.benefits-section__item-title{font-size:17px;line-height:130%;color:#333}.benefits-section__item-title b{display:block}@media (max-width: 1367px){.benefits-section__row{margin:0 -7.5px -35px}.benefits-section__col{width:50%}.benefits-section__item{margin-bottom:35px}}@media (max-width: 768px){.benefits-section{margin-bottom:40px}.benefits-section__item{flex-direction:column;text-align:center}.benefits-section__item-icon{margin-right:0;margin-bottom:10px}.benefits-section__item-title{font-size:15px}}.products-slider .slick-list{margin:0 -17.5px}.products-slider .slick-slide{padding:0 17.5px}.products-slider__arr-next{position:absolute;top:-113px;right:160px;width:36px;height:36px;border-radius:50%;background:#ECECEC;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:0.3s;z-index:1}.products-slider__arr-next svg{stroke:#999}.products-slider__arr-next:hover{background-color:#FFA800}.products-slider__arr-next:hover svg{stroke:#333}.products-slider__arr-prev{position:absolute;top:-113px;right:206px;width:36px;height:36px;border-radius:50%;background:#ECECEC;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:0.3s;z-index:1}.products-slider__arr-prev svg{stroke:#999;transition:0.3s}.products-slider__arr-prev:hover{background-color:#FFA800}.products-slider__arr-prev:hover svg{stroke:#333}@media (max-width: 1024px){.products-slider__arr-prev{top:-80px}.products-slider__arr-next{top:-80px}}@media (max-width: 768px){.products-slider{margin-bottom:76px}.products-slider__item .product-card{width:270px}.products-slider__arr-prev{top:calc(100% + 40px);right:auto;left:calc(50% - 36px);transform:translateX(-50%)}.products-slider__arr-next{top:calc(100% + 40px);right:auto;left:calc(50% + 36px);transform:translateX(-50%)}}@media (max-width: 500px){.products-slider .slick-list{margin:0 -10px}.products-slider .slick-slide{padding:0 10px}.products-slider__item .product-card{width:160px}}.product-card{display:block;position:relative}.product-card__img{height:380px;margin-bottom:20px;display:block}.product-card__img img{display:block;width:100%;height:100%;object-fit:cover}.product-card__rate{margin-bottom:10px}.product-card__title{font-size:15px;line-height:150%;color:#333333;letter-spacing:0.1em;text-transform:uppercase;font-family:'Museo Sans Cyrl 900';display:block;margin-bottom:8px}.product-card__footer{display:flex;align-items:center;justify-content:space-between}.product-card__price{font-size:28px;line-height:170%;font-family:'Oswald';color:#333;font-weight:500}.product-card__price span{font-size:15px;line-height:170%;letter-spacing:0.05em}.product-card__buy-btn{position:relative;z-index:1}.product-card--hit:after{content:'';position:absolute;top:0;left:0;width:26px;height:59px;background-image:url(../static/img/hit-label.svg);background-repeat:no-repeat;background-position:center}.product-card--new:after{content:'';position:absolute;top:0;left:0;width:26px;height:100px;background-image:url(../static/img/new-label.svg);background-repeat:no-repeat;background-position:center}@media (max-width: 500px){.product-card__img{height:auto}.product-card__title{font-size:13px}.product-card__price{font-size:24px;margin-bottom:10px}.product-card__footer{display:block}.product-card__footer .btn{width:100%;text-align:center}}.blog-list{flex-wrap:wrap;margin:0 -17.5px -60px;display:flex}.blog-list__item{padding:0 17.5px;width:calc(100% / 3);margin-bottom:60px}@media (max-width: 1200px){.blog-list{margin:0 -15px -50px}.blog-list__item{padding:0 15px;margin-bottom:50px}}@media (max-width: 768px){.blog-list{margin-bottom:76px}.blog-list__item{margin-bottom:0}.blog-list__item .blog-card{width:270px}.blog-list__arr-prev{top:calc(100% + 40px);right:auto;left:calc(50% - 36px);transform:translateX(-50%)}.blog-list__arr-next{top:calc(100% + 40px);right:auto;left:calc(50% + 36px);transform:translateX(-50%)}}.blog-card{display:block}.blog-card__img{margin-bottom:15px}.blog-card__img img{display:block;width:100%}.blog-card__title{font-size:17px;line-height:140%;color:#333;margin-bottom:10px;transition:0.3s;font-family:'Museo Sans Cyrl 700'}.blog-card__footer{display:flex;align-items:center}.blog-card__post-date{font-size:12px;line-height:170%;color:#AAAAAA;letter-spacing:0.1em;margin-right:20px}.blog-card__views{font-size:12px;line-height:170%;color:#AAAAAA;letter-spacing:0.1em;display:flex;align-items:center}.blog-card__views svg{stroke:#AAAAAA;margin-right:6px}.blog-card:hover .blog-card__title{color:#FFA800}.delivery-section__block{margin-bottom:70px}.delivery-section__block:last-child{margin-bottom:0}.delivery-section__block h2,.delivery-section__block h3,.delivery-section__block h4{margin-bottom:30px}.delivery-section__block p{margin-bottom:30px}.delivery-section__block p:last-child{margin-bottom:0}.delivery-section__block ul{margin-bottom:30px}.delivery-section__block ul:last-child{margin-bottom:30px}.delivery-section__block ul li{padding-left:20px;font-size:17px;line-height:170%;position:relative;margin-bottom:6px;color:#333333}.delivery-section__block ul li:last-child{margin-bottom:0}.delivery-section__block ul li:before{content:'';position:absolute;top:10px;left:0;width:8px;height:8px;background-color:#FFA800;border-radius:50%}.delivery-section__block ol{margin-bottom:30px;counter-reset:my-awesome-counter}.delivery-section__block ol:last-child{margin-bottom:30px}.delivery-section__block ol li{counter-increment:my-awesome-counter;padding-left:20px;font-size:17px;line-height:170%;position:relative;margin-bottom:6px;color:#333333}.delivery-section__block ol li:last-child{margin-bottom:0}.delivery-section__block ol li:before{content:counter(my-awesome-counter);position:absolute;top:0;left:0;color:#FFA800}@media (max-width: 1500px){.delivery-section__block p,.delivery-section__block ul,.delivery-section__block ol{margin-bottom:20px}.delivery-section__block ul li,.delivery-section__block ol li{font-size:15px}}@media (max-width: 1024px){.delivery-section__block{margin-bottom:40px}}@media (max-width: 768px){.delivery-section__block{margin-bottom:20px}.delivery-section__block h2,.delivery-section__block h3,.delivery-section__block h4{margin-bottom:10px}.delivery-section__block p{margin-bottom:10px}.delivery-section__block ul,.delivery-section__block ol{margin-bottom:10px}.delivery-section__block ul li,.delivery-section__block ol li{font-size:14px}}.catalog-section__list{display:flex;flex-wrap:wrap;margin:0 -17.5px;border-bottom:1px solid #E1DCD5;margin-bottom:30px}.catalog-section__list-item{width:calc(100% / 4);padding:0 17.5px;margin-bottom:100px}@media (max-width: 1500px){.catalog-section__list-item{width:calc(100% / 3);margin-bottom:70px}}@media (max-width: 768px){.catalog-section__list{margin-left:-10px;margin-right:-10px}.catalog-section__list-item{width:calc(100% / 2);margin-bottom:35px;padding:0 10px}}.pagenavi{display:flex;align-items:center;justify-content:center}.pagenavi__item{margin:0 6px}.pagenavi__item-arr{background-color:#ECECEC;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:0.3s}.pagenavi__item-arr svg{stroke:#999;transition:0.3s}.pagenavi__item-arr:hover{background-color:#333}.pagenavi__item-arr:hover svg{stroke:#fff}.pagenavi__item-link{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #E1DCD5;font-size:15px;text-transform:uppercase;letter-spacing:0.1em;transition:0.3s;color:#999999}.pagenavi__item-link:hover{border:1px solid #333;background-color:#333;color:#fff}.pagenavi__item-dots{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;text-transform:uppercase;letter-spacing:0.1em;transition:0.3s;color:#999999}.panel{max-width:470px;width:100%;background-color:#fff;position:fixed;top:0;right:-100%;z-index:10;height:100%;overflow-y:auto;padding:0px 50px 25px;opacity:0;pointer-events:none;transition:0.3s}.panel.active{opacity:1;right:60px;pointer-events:all}.panel__header{position:sticky;top:0;left:0;width:100%;background-color:#fff;display:flex;align-items:center;padding-bottom:25px;padding-top:25px;border-bottom:1px solid #E1DCD5;z-index:2;cursor:pointer}.panel__header:hover .panel__close-btn svg{fill:#1C1B1B}.panel__title{color:#999999;font-size:14px;line-height:17px}.panel__close-btn{margin-right:10px;cursor:pointer;width:17px;height:17px}.panel__close-btn svg{width:100%;height:100%;fill:#FFA800;transition:0.3s}.panel__message{margin-top:30px}.panel__message-title{color:#333;font-size:28px;line-height:125%;margin-bottom:20px;font-family:'Museo Sans Cyrl 700'}.panel__message-text{font-size:15px;line-height:150%;color:#555;margin-bottom:30px}.panel__message-icon{margin-bottom:30px;display:flex;justify-content:center}.panel__message-footer{text-align:center}@media (max-width: 1024px){.panel{top:60px;height:calc(100% - 60px)}.panel.active{right:0}}@media (max-width: 768px){.panel{padding-left:20px;padding-right:20px}}.cart-list__item{border-bottom:1px solid #E1DCD5;display:flex;align-items:center;padding:25px 0}.cart-list__item-img{width:76px;flex-shrink:0;margin-right:10px}.cart-list__item-img img{display:block;width:100%}.cart-list__item-content{display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between;flex-grow:1}.cart-list__item-title{font-size:15px;line-height:18px;margin-bottom:10px}.cart-list__item-price{font-size:18px;line-height:22px}.cart-list__item-delete-btn{cursor:pointer;margin-left:20px;flex-shrink:0}.cart-list__item-delete-btn svg{fill:#E1DCD5;transition:0.3s}.cart-list__item-delete-btn:hover svg{fill:#1C1B1B}.cart-list__item-amount{width:120px;flex-shrink:0;border:1px solid #ECECEC;border-radius:25px;position:relative;overflow:hidden}.cart-list__item-amount-input{width:100%;height:35px;line-height:33px;border:none;text-align:center;font-size:14px;color:#1C1B1B;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none}.cart-list__item-amount-input:focus{outline:none}.cart-list__item-amount-input::-webkit-outer-spin-button,.cart-list__item-amount-input::-webkit-inner-spin-button{appearance:none;margin:0}.cart-list__item-amount-btn-sub{background:#ECECEC;position:absolute;top:0;left:0;width:35px;display:flex;align-items:center;justify-content:center;border-radius:25px 0 0 25px;z-index:1;height:100%;cursor:pointer;transition:0.3s}.cart-list__item-amount-btn-sub svg{stroke:#999;transition:0.3s}.cart-list__item-amount-btn-sub:hover{background-color:#1C1B1B}.cart-list__item-amount-btn-sub:hover svg{stroke:#fff}.cart-list__item-amount-btn-add{background:#ECECEC;position:absolute;top:0;right:0;width:35px;display:flex;align-items:center;justify-content:center;border-radius:0px 25px 25px 0px;z-index:1;height:100%;cursor:pointer;transition:0.3s}.cart-list__item-amount-btn-add svg{stroke:#999;transition:0.3s}.cart-list__item-amount-btn-add:hover{background-color:#1C1B1B}.cart-list__item-amount-btn-add:hover svg{stroke:#fff}.cart-footer{display:flex;align-items:center;justify-content:space-between;padding-top:25px}.cart-results{text-align:right}.cart-results__title{font-size:14px;line-height:17px}.cart-results__value{font-size:20px;line-height:24px;font-family:'Museo Sans Cyrl 700'}.cart-results__value span{font-family:'Museo Sans Cyrl 500'}.cart-results--inline{display:flex;align-items:center;justify-content:space-between;width:100%}@media (max-width: 576px){.cart-list__item-amount{margin-right:10px}.cart-list__item-delete-btn{margin-left:5px}}.search-form{margin-top:25px}.search-form .form__field-input{padding-right:40px}.form__field{position:relative}.form__field .select2-container--default .select2-selection--single{border:none;height:60px;background:#F7F6F4;border-radius:35px;display:flex;align-items:center;border:1px solid #E1DCD5;transition:0.3s}.form__field .select2-container--default .select2-selection--single:focus{outline:none;border:1px solid rgba(0,0,0,0.2)}.form__field .select2-container--default .select2-selection--single:hover{border:1px solid rgba(0,0,0,0.2)}.form__field .select2-container--default .select2-selection--single .select2-selection__rendered{height:100%;font-size:15px;line-height:58px;color:#333;padding-right:30px;padding-left:30px}.form__field .select2-container--default .select2-selection--single .select2-selection__rendered .select2-selection__placeholder{color:#999999}.form__field .select2-container--default .select2-selection--single .select2-selection__arrow{right:30px;border-radius:50%;top:50%;transform:translateY(-50%);width:22px;height:22px;background-color:#fff;background-image:url(../static/img/chevron-down-grey.svg);background-repeat:no-repeat;background-position:center;background-size:14px 14px}.form__field .select2-container--default .select2-selection--single .select2-selection__arrow b{display:none}.form__field .select2-container--default.select2-container--open .select2-selection--single{background-color:#fff;border:1px solid rgba(0,0,0,0.2)}.form__field .select2-container--default.select2-container--open.select2-container--below .select2-selection--single{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.form__field-input{background:#F7F6F4;border:1px solid #E1DCD5;height:60px;line-height:58px;border-radius:35px;font-family:'Museo Sans Cyrl 500';width:100%;padding:0 30px;color:#1C1B1B;font-size:15px;transition:0.3s}.form__field-input::placeholder{color:#999999;transition:0.3s}.form__field-input:hover{border:1px solid rgba(0,0,0,0.2)}.form__field-input:focus{outline:none;background-color:#fff}.form__field-input:focus::placeholder{color:#1C1B1B}.form__field-input::-webkit-search-decoration,.form__field-input::-webkit-search-cancel-button,.form__field-input::-webkit-search-results-button,.form__field-input::-webkit-search-results-decoration{-webkit-appearance:none}.form__field-icon{position:absolute;top:50%;transform:translateY(-50%);right:25px}.form__field-icon svg{fill:#999;transition:0.3s}.form__field-textarea{height:120px;padding:20px 30px;background:#F7F6F4;border:1px solid #E1DCD5;border-radius:35px;font-family:'Museo Sans Cyrl 500';width:100%;font-size:15px;line-height:18px;resize:none}.form__field-textarea::placeholder{color:#999999;transition:0.3s}.form__field-textarea:hover{border:1px solid rgba(0,0,0,0.2)}.form__field-textarea:focus{outline:none;background-color:#fff}.form__field-textarea:focus::placeholder{color:#1C1B1B}.form__field-textarea::-webkit-search-decoration,.form__field-textarea::-webkit-search-cancel-button,.form__field-textarea::-webkit-search-results-button,.form__field-textarea::-webkit-search-results-decoration{-webkit-appearance:none}.checkbox{position:relative;margin-bottom:0;display:flex;align-items:center}.checkbox__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.checkbox__input:checked ~ .checkbox__marker{border:1px solid #FFA800;background-color:#fff}.checkbox__input:checked ~ .checkbox__marker::after{opacity:1}.checkbox__marker{width:16px;height:16px;flex-shrink:0;border:1px solid #E1DCD5;background:#F7F6F4;position:relative;transition:0.3s;margin-right:10px}.checkbox__marker::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(../static/img/check.svg);background-repeat:no-repeat;background-position:center;background-size:10px 7.5px;opacity:0;transition:0.3s}.checkbox__title{font-size:18px;line-height:22px;color:#1C1B1B;transition:0.3s}.order{position:relative}.order__row{display:flex;margin:0 -17.5px;position:relative}.order__row::after{content:'';position:absolute;bottom:-120px;left:0;width:100%;border-bottom:1px solid #E1DCD5}.order__col{padding:0 17.5px}.order__col:first-child{flex-grow:1}.order__col:last-child{width:400px;flex-shrink:0}.order__block{margin-bottom:70px}.order__block:last-child{margin-bottom:0}.order__block-header{display:flex;align-items:center;margin-bottom:20px}.order__block-number{width:74px;height:65px;flex-shrink:0;background-image:url(../static/img/laurel.svg);background-repeat:no-repeat;background-position:center;background-size:contain;font-size:28px;line-height:125%;color:#444;font-family:'Museo Sans Cyrl 700';text-align:center;padding-top:8px;margin-right:20px}.order__block-content{flex-grow:1}.order__block-title{font-size:28px;line-height:125%;font-family:'Museo Sans Cyrl 700';color:#333}.order__block-text{font-size:15px;line-height:125%;color:#999999}.order__block-row{display:flex;margin:0 -7.5px -15px;flex-wrap:wrap}.order__block-col-50{padding:0 7.5px;width:50%;margin-bottom:15px}.order__block-col-100{padding:0 7.5px;width:100%;margin-bottom:15px}.order__info-block{padding-bottom:25px;border-bottom:1px solid #E1DCD5}.order__info-block-title{font-size:15px;line-height:18px;color:#FFA800;margin-bottom:10px}.order__info-block-list{display:flex;align-items:center;flex-wrap:wrap}.order__info-block-list-item{margin-right:20px}.order__info-block-list-item:last-child{margin-right:0}.order__info-block-list-link{font-size:17px;line-height:20px;font-family:'Museo Sans Cyrl 700';transition:0.3s;white-space:nowrap}.order__info-block-list-link svg{margin-right:6px;fill:#333;transition:0.3s}.order__info-block-list-link:hover{color:#FFA800}.order__info-block-list-link:hover svg{fill:#FFA800}@media (max-width: 1200px){.order__row{display:block}.order__col:last-child{width:100%}}@media (max-width: 1024px){.order__row::after{bottom:-100px}.order__block{margin-bottom:40px}.order__block-title{font-size:20px}.order__block-number{width:64px;height:55px;font-size:22px}}@media (max-width: 768px){.order__row::after{display:none}}@media (max-width: 576px){.order__block:last-child .order__block-header{flex-wrap:wrap}.order__block:last-child .order__block-header .btn{width:100%;margin-top:20px;text-align:center}.order__block-header{margin-bottom:15px}.order__block-col-50{width:100%}.order__block-text{font-size:13px;margin-top:5px}.order__info-block-list-item{margin-right:15px}.order__info-block-list-link{font-size:16px}}.sort{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap}.sort__block{display:flex;align-items:center;margin-right:20px}.sort__block-title{font-size:14px;line-height:20px;margin-right:0.25rem;white-space:nowrap}.sort .select2-container--default .select2-selection--single{border:none;height:20px;border-radius:0px;display:flex;align-items:center;transition:0.3s}.sort .select2-container--default .select2-selection--single:focus{outline:none}.sort .select2-container--default .select2-selection--single .select2-selection__rendered{height:100%;font-size:14px;line-height:20px;color:#333;padding:0 12px 0 0;position:relative}.sort .select2-container--default .select2-selection--single .select2-selection__rendered::after{content:'';position:absolute;bottom:0;left:0;width:calc(100% - 12px);border-bottom:1px solid #333}.sort .select2-container--default .select2-selection--single .select2-selection__rendered .select2-selection__placeholder{color:#999999}.sort .select2-container--default .select2-selection--single .select2-selection__arrow{right:0px;border-radius:50%;top:50%;transform:translateY(-50%);width:8px;height:8px;background-image:url(../static/img/chevron-down-grey-big.svg);background-repeat:no-repeat;background-position:center;background-size:contain}.sort .select2-container--default .select2-selection--single .select2-selection__arrow b{display:none}.sort .select2-container--default.select2-container--open .select2-selection--single{background-color:#fff}.sort .select2-container--default.select2-container--open.select2-container--below .select2-selection--single{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.filter-btn{width:130px;display:flex;align-items:center;justify-content:center;font-size:11px;line-height:170%;color:#fff;text-transform:uppercase;font-family:'Museo Sans Cyrl 700';padding:0 20px;height:40px;border-radius:35px;background-color:#333;cursor:pointer;transition:0.3s;position:relative}.filter-btn svg{fill:#fff;margin-right:5px;transition:0.3s}.filter-btn span{position:absolute;background-color:#FFA800;width:18px;height:18px;top:-3px;right:-6px;border-radius:50%;font-size:12px;color:#333;text-align:center}.filter-btn:hover{background-color:#FFA800;transition:0.3s}.filter-btn:hover svg{fill:#fff}.sort-results{border:none;padding-top:5px}.sort-results .select2-results{background:#FFFFFF;box-shadow:0px 4px 5px rgba(0,0,0,0.15);border-radius:4px}.sort-results .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background-color:#fff !important}.sort-results .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background-color:#fff !important;color:#FFA800}.sort-results .select2-results__option{font-size:14px;line-height:17px;padding:12px 15px;position:relative;transition:color 0.3s}.sort-results .select2-results__option::after{content:'';position:absolute;bottom:0;left:15px;width:calc(100% - 30px);border:1px solid #E1DCD5}.sort-results .select2-results__option:last-child::after{display:none}.sort-results .select2-results__option.select2-results__option--selectable{background-color:#fff !important;color:#333}.sort-results .select2-results__option.select2-results__option--selected{color:#FFA800}.sort-results .select2-results__option:hover{color:#FFA800}.filter-group{border-top:1px solid #E1DCD5;padding-top:25px;padding-bottom:25px}.filter-group.active .filter-group__title{color:#FFA800}.filter-group.active .filter-group__title span{background-color:#FFA800}.filter-group.active .filter-group__title svg{stroke:#FFA800;transform:rotate(-90deg)}.filter-group.active .filter-group__body{display:block}.filter-group__body{padding-top:20px;display:none}.filter-group__title{font-weight:600;font-size:20px;line-height:125%;color:#1C1B1B;transition:0.3s;display:flex;align-items:center;position:relative}.filter-group__title svg{margin-left:auto;stroke:#999;transition:0.3s}.filter-group__title span{line-height:18px;height:18px;width:18px;text-align:center;color:#fff;background-color:#1C1B1B;border-radius:50%;margin-left:8px;border-radius:50%;font-weight:600;font-size:12px;flex-shrink:0;transition:0.3s}.filter-group__list{display:flex;flex-wrap:wrap;margin-bottom:-20px}.filter-group__list-item{width:50%;margin-bottom:20px}.filter-footer{padding:25px;position:sticky;position:absolute;bottom:0;left:0;width:100%}.filter-footer::after{content:'';position:absolute;top:0;left:25px;width:calc(100% - 50px);border-top:1px solid #E1DCD5}.filter-footer .btn{margin-right:10px}.filter-footer .btn:last-child{margin-right:0}
       
       
       /*# sourceMappingURL=style.bundle.css.map*/
      `}</style>
    </>
  );
}
