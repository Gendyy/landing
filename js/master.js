// Check if there's a local stroage color option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

  // console.log("localstorage is not empty");

  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove active class from all Colors List Items
  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

    // Add active class on element with Data-Color which is == local storage item
    if (element.dataset.color === mainColors) {
      // Add active class
      element.classList.add("active");
    }

  });


}

// Toggle Spin And Open Class On Icon
document.querySelector(".toggle-setting .icon").onclick = function () {


  // Toggle Class fa-spin For rotaion on click
  this.classList.toggle("fa-spin");

  //Toggle class Open on Main Setting Box
  document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors
const colorsList = document.querySelectorAll(".colors-list li");

// Loop through the List items
colorsList.forEach(li => {

  // Adding a click event to callback som function to do some action
  li.addEventListener("click", (e) => {

    // Action to Set a color to the root elem
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

    //Set color On Local Storage
    localStorage.setItem("color-option", e.target.dataset.color);


    // Remove active class from all childerns
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");

    });

    // Add active class on the elemtn
    e.target.classList.add("active");
  });
});

// Select the landing page elem
let landingpage = document.querySelector(".landing-page");

// Array of imgs
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  // Get random num
  let randomNum = Math.floor(Math.random() * imgArray.length);

  // Change background image url
  landingpage.style.backgroundImage = 'url("imgs/' + imgArray[randomNum] + '")';
}, 2000);

// Another idea for the background randomly change code
// let i = 0;

// function loop() {
//   // Condition
//   if (i <= imgArray.length - 1) {
//     landingpage.style.backgroundImage = 'url("imgs/' + imgArray[i] + '")';
//     // console.log(i);
//     i++;
//   } else {
//     i = 0; // Reset The i Value
//   }

//   setTimeout(loop, 1000);
// }
// loop();