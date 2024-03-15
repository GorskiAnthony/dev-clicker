function updateCount(number, domElement) {
  const count = number + Number(localStorage.getItem("countClick"));
  domElement.textContent = count;
  localStorage.setItem("countClick", count);
}

function handleDeleteAccount() {
  if (confirm("Voulez vous supprimer votre compte ?")) {
    localStorage.clear();
    window.location.reload();
  }
}

function animateImgDev(img) {
  img.style.transform = "scale(0.90)";
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 100);
}

function addAndRemoveBug(container, x, y) {
  console.log(x, y)
  const img = writeCode(x, y); // Function `bug` not provided
  container.appendChild(img);
  setTimeout(() => {
    img.remove();
  }, 500);
}

function createShopItems(shopItems, shops, count) {
  shopItems.innerHTML = shops
    .map((shop) =>
      createCard(
        shop.title,
        shop.price,
        shop.description,
        shop.img,
        shop.buy,
        shop.id,
        count >= shop.price ? "buy" : "no-buy",
      ),
    )
    .join("");
}
