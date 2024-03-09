/**
 * Create a card for the shop
 * @param title : string
 * @param price : string
 * @param description : string
 * @param img : string
 * @param buy : number
 * @returns {string}
 */
function createCard(title, price, description, img, buy) {
  return `<div class="shop-item">
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
