"use strict";

const handleClick = (i) => {
  document.querySelector(".class-img").src = `images/training-image-0${i}.jpg`;
  document.querySelector(".class-sub-head").textContent =
    (i == 1 ? "First" : i == 2 ? "Second" : i == 3 ? "Third" : "Fourth") +
    " Trainer Class";
};

// Nav Sticky
const programSection = document.querySelector("#programs-section");

const initialcoords = programSection.getBoundingClientRect();
// Defines the section distance from top
console.log(initialcoords);

window.addEventListener("scroll", function () {
  if (window.scrollY > initialcoords.top - 30)
    document.querySelector("nav").classList.add("sticky");
  else document.querySelector("nav").classList.remove("sticky");
});
