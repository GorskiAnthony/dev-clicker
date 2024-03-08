const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

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
