const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
let shopItems = document.querySelector(".shop-items");

const shops = [
  {
    title: "Automatisation",
    price: "10",
    description: "Automatisation is the key to success",
    img: "automatisation",
  },
  {
    title: "Coffee",
    price: "10",
    description: "Coffee is the key to success",
    img: "coffee",
  },
  {
    title: "Coffee premium",
    price: "10",
    description: "Coffee is the key to success (but premium)",
    img: "coffee_plus",
  },
  {
    title: "Congrats",
    price: "10",
    description: "Congrats is the key to success",
    img: "congrat",
  },
  {
    title: "Time",
    price: "10",
    description: "Time is the key to success",
    img: "time",
  },
];

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

let html = shops
  .map((shop) => {
    return createCard(shop.title, shop.price, shop.description, shop.img);
  })
  .join("");

shopItems.innerHTML = html;
