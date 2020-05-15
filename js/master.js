// select the landing page elem

let landingpage = document.querySelector(".landing-page");

// Array of imgs
let imgArray = ["01.jpg", "02.jpg",
    "03.jpg", "04.jpg", "05.jpg"
];




setInterval(() => {

    // Get random num
    let randomNum = Math.floor(Math.random() * imgArray.length);

    // Change background image url
    landingpage.style.backgroundImage = 'url("imgs/' + imgArray[randomNum] + '")';

}, 3000);