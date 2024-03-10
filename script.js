const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const imgDev = document.querySelector(".img-dev");
const bugCount = document.querySelector(".bug-count");
const containerImg = document.querySelector(".container-img");
const deleteAccount = document.getElementById("deleteAccount");
let shopItems = document.querySelector(".shop-items");

deleteAccount.addEventListener("click", () => {
  if (confirm("Voulez vous supprimer votre compte ?")) {
    confirmDeleteAccount();
  }
});

// Get the countClick from the localStorage
let countClick = localStorage.getItem("countClick") || 0;
// update dom with the countClick
bugCount.textContent = countClick;

// Create the shop items
const dataShop = [
  {
    id: 1,
    title: "Congrats",
    price: "10",
    description: "Kill one bug every 10s",
    img: "congrat",
    buy: 0,
  },
  {
    id: 2,
    title: "Coffee",
    price: "20",
    description: "Coffee is the key to success",
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

const shops = JSON.parse(localStorage.getItem("shop")) || dataShop;

/**
 * Logic for the dev and the bug
 */
imgDev.addEventListener("click", () => {
  // img transform
  imgDev.style.transform = "scale(0.95)";
  // remove the transform after 0.1s
  setTimeout(() => {
    imgDev.style.transform = "scale(1)";
  }, 100);

  // Add the bug
  const img = bug();
  // Append the bug to the containerImg
  containerImg.appendChild(img);

  // Remove the bug after the animation
  setTimeout(() => {
    img.remove();
  }, 1000);

  // Increment the countClick
  countClick = updateCount();
  // Update the bugCount
  bugCount.textContent = countClick;

  // check is possible to buy the items
  shopItems.innerHTML = html(shops, countClick);
});

// Toggle the active class on the nav-links
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Add class active link if the link is clicked
const links = document.querySelectorAll(".nav-links li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    // Remove the active class from the nav-links
    navLinks.classList.remove("active");
  });
});

// Create the shop items
shopItems.innerHTML = html(shops, countClick);

// Add the event listener on item in the shop items
shopItems.addEventListener("click", (e) => {
  if (!e.target.dataset.shop) return;

  // buy the item
  const shopSelected = shops.find((shop) => shop.id === +e.target.dataset.id);

  shopItems.innerHTML = shops
    .map((shop) => {
      if (shop.id === shopSelected.id) {
        if (countClick >= shop.price) {
          countClick -= shop.price;
          shop.buy++;
          shop.price = Math.floor(shop.price * 1.7);
          localStorage.setItem("countClick", countClick);
          bugCount.textContent = countClick;
          localStorage.setItem("shop", JSON.stringify(shops));
        } else {
          console.warn("You don't have enough bugs");
        }
      }
      return createCard(
        shop.title,
        shop.price,
        shop.description,
        shop.img,
        shop.buy,
        shop.id,
        countClick >= shop.price ? "buy" : "no-buy",
      );
    })
    .join("");
});

// congrats
setInterval(() => {
  if (shops[0].buy > 0) {
    countClick = updateCount(shops[0].buy);
    bugCount.textContent = countClick;
  }
  shopItems.innerHTML = html(shops, countClick);
}, 2000);
