const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const imgDev = document.querySelector(".img-dev");
const bugCount = document.querySelector(".bug-count");
const containerImg = document.querySelector(".container-img");
const deleteAccount = document.getElementById("deleteAccount");
const shopItems = document.querySelector(".shop-items");

/**
 * Create shop lists
 */
const dataShop = [
  {
    id: 1,
    title: "Congrats",
    price: "10",
    description:
      "Les encouragements sont la clé du succès, c'est pour ça que plus tu achètes plus tu kill de bugs",
    img: "congrat",
    buy: 0,
  },
  {
    id: 2,
    title: "Coffee",
    price: "20",
    description:
      "Rien ne vaut un café pour accélérer la productivité, pendant 5 secondes, chaque bug tué te rapporte le nombre de café bu",
    img: "coffee",
    buy: 0,
  },
  {
    id: 3,
    title: "Automatisation",
    price: "50",
    description: "Automatisation is the key to success",
    img: "automatisation",
    buy: 0,
  },
  {
    id: 4,
    title: "Coffee premium",
    price: "70",
    description: "Coffee is the key to success (but premium)",
    img: "coffee_plus",
    buy: 0,
  },
  {
    id: 5,
    title: "Time",
    price: "150",
    description: "Time is the key to success",
    img: "time",
    buy: 0,
  },
];

// Get data in local storage
let countClick = +localStorage.getItem("countClick") || 0;
const shops = JSON.parse(localStorage.getItem("shop")) || dataShop;

// Initialize App
function init() {
  updateCount(0, bugCount);
  createShopItems(shopItems, shops, countClick);
  setupEventListeners();
}

function setupEventListeners() {
  deleteAccount.addEventListener("click", handleDeleteAccount);
  imgDev.addEventListener("click", handleImgDevClick);
  burger.addEventListener("click", () => navLinks.classList.toggle("active"));
  navLinks.addEventListener("click", handleNavLinkClick);
  shopItems.addEventListener("click", handleShopItemClick);
}

function handleImgDevClick() {
  animateImgDev(imgDev);
  addAndRemoveBug(containerImg);
  updateCount(1, bugCount);
  countClick = +localStorage.getItem("countClick");
  createShopItems(shopItems, shops, countClick);
}

function handleShopItemClick(e) {
  const target = e.target;
  if (!target.dataset.shop) return;
  const shopSelected = shops.find((shop) => shop.id === +target.dataset.id);
  if (countClick >= shopSelected.price) {
    updateShopItem(shopSelected);
    createShopItems(shopItems, shops, countClick);
  } else {
    console.warn("You don't have enough bugs");
  }
}

function updateShopItem(shop) {
  countClick -= shop.price;
  shop.buy++;
  shop.price = Math.floor(shop.price * 1.4);
  localStorage.setItem("countClick", countClick);
  bugCount.textContent = countClick;
  localStorage.setItem("shop", JSON.stringify(shops));
}

init();
