function createCard(title, price, description, img) {
  return `<div class="shop-item">
    <img src="./assets/shop/${img}.png" alt="bug" />
    <div class="shop-info">
      <div>
        <h3 class="title">${title}</h3>
        <p><span class="bold">Price:</span>${price} bugs</p>
      </div>
      <p>14</p>
    </div>
    <div class="shop-desc">
      <span>Description : </span>
      <span>${description}</span>
    </div>
</div>
`;
}
