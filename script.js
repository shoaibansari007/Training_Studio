"use strict";
// const box = document.querySelectorAll(".innerbox");
// console.log(box);
// const imgClass = document.querySelector(".class-img");
// const classHead = document.querySelector(".class-sub-head");

// let classHeading = ["First", "Second", "Third", "Fourth"];

// for (let i = 0; i < box.length; i++) {
//   box[i].addEventListener("click", () => {
//     imgClass.src = `images/training-image-0${i + 1}.jpg`;
//     classHead.textContent = classHeading[i] + " Trainer Class";
//   });
// }

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");
// const box4 = document.querySelector(".box4");

// box1.addEventListener("click", function () {
//   imgClass.src = "images/training-image-01.jpg";
//   classHead.textContent = "First Trainer Class";
// });
// box2.addEventListener("click", function () {
//   imgClass.src = "images/training-image-02.jpg";
//   classHead.textContent = "Second Trainer Class";
// });
// box3.addEventListener("click", function () {
//   imgClass.src = "images/training-image-03.jpg";
//   classHead.textContent = "Third Trainer Class";
// });
// box4.addEventListener("click", function () {
//   imgClass.src = "images/training-image-04.jpg";
//   classHead.textContent = "Fourth Trainer Class";
// });

const handleClick = (i) => {
  document.querySelector(".class-img").src = `images/training-image-0${i}.jpg`;
  document.querySelector(".class-sub-head").textContent =
    (i == 1 ? "First" : i == 2 ? "Second" : i == 3 ? "Third" : "Fourth") +
    " Trainer Class";
};
