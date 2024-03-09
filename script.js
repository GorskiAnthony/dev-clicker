const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const imgDev = document.querySelector(".img-dev");
const bugCount = document.querySelector(".bug-count");
const containerImg = document.querySelector(".container-img");
let shopItems = document.querySelector(".shop-items");

// Get the countClick from the localStorage
let countClick = localStorage.getItem("countClick") || 0;
// update dom with the countClick
bugCount.textContent = countClick;

// Create the shop items
const shops = [
  {
    title: "Congrats",
    price: "10",
    description: "Congrats is the key to success",
    img: "congrat",
    buy: 0,
  },
  {
    title: "Coffee",
    price: "20",
    description: "Coffee is the key to success",
    img: "coffee",
    buy: 0,
  },
  {
    title: "Automatisation",
    price: "50",
    description: "Automatisation is the key to success",
    img: "automatisation",
    buy: 0,
  },
  {
    title: "Coffee premium",
    price: "70",
    description: "Coffee is the key to success (but premium)",
    img: "coffee_plus",
    buy: 0,
  },
  {
    title: "Time",
    price: "150",
    description: "Time is the key to success",
    img: "time",
    buy: 0,
  },
];

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
  countClick++;
  // Update the localStorage
  localStorage.setItem("countClick", countClick);
  // Update the bugCount
  bugCount.textContent = countClick;
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
let html = shops
  .map((shop) => {
    return createCard(
      shop.title,
      shop.price,
      shop.description,
      shop.img,
      shop.buy,
    );
  })
  .join("");

shopItems.innerHTML = html;
