const renderFeaturesItem = (arr) => {
  const productCards = document.querySelector(".product__cards");
  arr.forEach((item) => {
    productCards.insertAdjacentHTML(
      "beforeend",
      `
          <li class="card">
              <div class="card__img">
                  <img src="${item.image}">
                  <div class="add-to-cart">
                      <button class="add-to-cart__btn"><svg width="32" height="29" viewBox="0 0 32 29" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path id="Forma 1"
                                  d="M26.199 29C25.5512 28.9738 24.9396 28.6948 24.4952 28.2227C24.0509 27.7506 23.8094 27.1232 23.8225 26.475C23.8356 25.8269 24.1023 25.2097 24.5653 24.7559C25.0283 24.3022 25.6508 24.048 26.2991 24.048C26.9474 24.048 27.5697 24.3022 28.0327 24.7559C28.4957 25.2097 28.7624 25.8269 28.7755 26.475C28.7886 27.1232 28.5471 27.7506 28.1028 28.2227C27.6585 28.6948 27.0468 28.9738 26.399 29H26.199ZM6.75098 26.32C6.75098 25.79 6.90815 25.2718 7.20264 24.8311C7.49712 24.3904 7.91569 24.0469 8.4054 23.844C8.8951 23.6412 9.43399 23.5881 9.95386 23.6915C10.4737 23.7949 10.9512 24.0502 11.326 24.425C11.7009 24.7998 11.9562 25.2773 12.0596 25.7972C12.163 26.317 12.1098 26.8559 11.907 27.3456C11.7041 27.8353 11.3606 28.2539 10.9199 28.5483C10.4792 28.8428 9.96108 29 9.43103 29C9.07892 29.0003 8.73017 28.9311 8.40479 28.7966C8.0794 28.662 7.78374 28.4646 7.53467 28.2158C7.28559 27.9669 7.08805 27.6713 6.95325 27.3461C6.81844 27.0208 6.74902 26.6721 6.74902 26.32H6.75098ZM10.551 20.686C10.2916 20.6868 10.039 20.6024 9.83215 20.4457C9.62531 20.2891 9.47563 20.0689 9.40601 19.819L4.573 2.36401H1.18005C0.866568 2.36401 0.565906 2.23947 0.344238 2.01781C0.12257 1.79614 -0.00195312 1.49549 -0.00195312 1.18201C-0.00195312 0.868519 0.12257 0.567873 0.344238 0.346205C0.565906 0.124537 0.866568 5.81268e-06 1.18005 5.81268e-06H5.46106C5.72055 -0.00080736 5.97309 0.0837201 6.17981 0.240568C6.38653 0.397416 6.53589 0.617884 6.60498 0.868006L11.438 18.323H24.616L28.999 8.27501H14.399C14.2409 8.27961 14.0834 8.25242 13.9359 8.19507C13.7884 8.13771 13.6539 8.05134 13.5404 7.94108C13.4269 7.83082 13.3366 7.69891 13.275 7.55315C13.2134 7.40739 13.1816 7.25075 13.1816 7.0925C13.1816 6.93426 13.2134 6.77762 13.275 6.63186C13.3366 6.4861 13.4269 6.35419 13.5404 6.24393C13.6539 6.13367 13.7884 6.0473 13.9359 5.98994C14.0834 5.93259 14.2409 5.90541 14.399 5.91001H30.812C31.0077 5.90996 31.2003 5.95866 31.3724 6.05172C31.5446 6.14478 31.6908 6.27926 31.798 6.44301C31.9058 6.60729 31.9714 6.79569 31.9889 6.99145C32.0063 7.18721 31.9752 7.38424 31.8981 7.565L26.493 19.977C26.4007 20.1876 26.249 20.3668 26.0565 20.4927C25.864 20.6186 25.6391 20.6858 25.4091 20.686H10.551Z"
                                  fill="#E8E8E8" />
                          </svg>
                          Add to Cart
                      </button>
                  </div>
              </div>
              <div class="card__info">
                  <h4 class="card__info__title">${item.title}</h4>
                  <p class="card__info__text">${item.text}</p>
                  <span class="card__info__price">$${item.price}</span>
              </div>
          </li>
      `
    );
  });
};

const renderCartItem = (card) => {
  const cartItemList = document.querySelector(".cart-item__list");
  cartItemList.insertAdjacentHTML(
    "beforeend",
    `
    <li class="cart-item__card" id="${card.id}">
        <img class="cart-item__card__image" src="${card.image}" alt="">
        <div class="cart-item__card__info">
            <div class="cart-item__card__info-heading">
                <h3 class="cart-item__card__info-title">
                    ${card.title}
                </h3>
                <img class="cart-item__card__info-close" src="./img/header/close.svg" alt="close">
            </div>
            <div class="cart-item__card__info-description">
                <span>Price: <span class="price">$${card.price}</span></span>
                <span>Color: ${card.color}</span>
                <span>Size: ${card.size}</span>
                <span>Quantity: <input class="quantity" type="number" name="Quantity" value="1" min="1" max="10"></span>
            </div>
        </div>
    </li>
`
  );
};

const createCartItems = (arr, data) => {
  arr.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!document.querySelector(".cart-item")) {
        document.querySelector(".feature").insertAdjacentHTML(
          "afterend",
          `
                  <div class="cart-item">
                      <h3 class="cart-item__title">Cart Items</h3>
                      <ul class="cart-item__list"></ul>
                  </div>
              `
        );
      }
      renderCartItem(data[index]);
      const cartItems = document.querySelectorAll(".cart-item__card");
      deleteCartItem(cartItems);
    });
  });
};

const deleteCartItem = (arr) => {
  arr.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("cart-item__card__info-close")) {
        e.currentTarget.remove();
      }
      if (document.querySelectorAll(".cart-item__card").length < 1) {
        document.querySelector(".cart-item").remove();
      }
    });
  });
};

fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    renderFeaturesItem(data.cards);
    const btns = document.querySelectorAll(".add-to-cart__btn");
    createCartItems(btns, data.cards);
  });
