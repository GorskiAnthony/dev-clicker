/**
 * Create a card for the shop
 * @param title : string
 * @param price : string
 * @param description : string
 * @param img : string
 * @param buy : number
 * @param id : number
 * @param isBuy : string
 * @returns {string}
 */
function createCard(title, price, description, img, buy, id, isBuy) {
  return `<div class="shop-item ${isBuy}" data-shop="${img}" data-id="${id}" >
    <img src="./assets/shop/${img}.png" alt="bug" />
    <div class="shop-info">
      <div>
        <h3 class="title">${title}</h3>
        <p><span class="bold">Price:</span>${price} bugs</p>
      </div>
      <p>${buy}</p>
    </div>
    <div class="shop-desc">
      <span>Description : </span>
      <span>${description}</span>
    </div>
</div>
`;
}

/**
 * Create a bug img
 * @returns {HTMLImageElement}
 */
function bug() {
  // create img element
  const img = document.createElement("img");
  // add the bug img and the bug class
  img.src = "./assets/bug.png";
  img.classList.add("bug");

  // style the img
  img.style.transform = "translate(-50%, -50%)";
  img.style.top = `${Math.random() * 100}px`;
  img.style.left = `${Math.random() * 100}%`;
  img.style.rotate = `${Math.random() * 360}deg`;

  // animation
  img.animate(
    {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    10000,
  );

  // return the img
  return img;
}

/**
 * Create the shop items
 * @param makeShop : object
 * @param count : number
 * @returns {*}
 */
function html(makeShop, count) {
  return makeShop
    .map((shop) => {
      return createCard(
        shop.title,
        shop.price,
        shop.description,
        shop.img,
        shop.buy,
        shop.id,
        count >= shop.price ? "buy" : "no-buy",
      );
    })
    .join("");
}
function handleNavLinkClick(e) {
  if (e.target.tagName === "A") {
    navLinks
      .querySelectorAll("a")
      .forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    navLinks.classList.remove("active");
  }
}
