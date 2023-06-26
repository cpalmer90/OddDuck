"use strict";
console.log("Quack");

const audio = new Audio("Sounds/53258__stomachache__ducksnippit.wav");
const buttons = document.querySelectorAll("section img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

const productContainer = document.querySelector("section");

const resultButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;

const maxClicksAllowed = 18;

let allProducts = [];

function randomNumber() {
  return Math.floor(Math.random() * allProducts.length);
}

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

function renderProducts() {
  let product1 = randomNumber();
  let product2 = randomNumber();
  let product3 = randomNumber();

  if (product1 === product2) {
    product2 = randomNumber();
  }
  if (product1 === product3) {
    product3 = randomNumber();
  }

  if (product2 === product3) {
    product3 = randomNumber();
  }

  image1.src = allProducts[product1].src;
  image2.src = allProducts[product2].src;
  image3.src = allProducts[product3].src;
  image1.alt = allProducts[product1].name;
  image2.alt = allProducts[product2].name;
  image3.alt = allProducts[product3].name;
  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("to select click on an image");
  } else {
    clicks++;

    let clickedProduct = event.target.alt;
    for (let i = 0; i < allProducts.length; i++) {
      if (clickedProduct === allProducts[i].name) {
        allProducts[i].click++;
        break;
      }
      renderProducts();
    }
  }

  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
  }
}

const bag = new Product("bag.jpg", "Images/bag.jpg");
const banana = new Product("banana.jpg", "Images/banana.jpg");
const bathroom = new Product("bathroom.jpg", "Images/bathroom.jpg");
const boots = new Product("boots.jpg", "Images/boots.jpg");
const breakfast = new Product("breakfast.jpg", "Images/breakfast.jpg");
const bubblegum = new Product("bubblegum.jpg", "Images/bubblegum.jpg");
const chair = new Product("chair.jpg", "Images/chair.jpg");
const cthulhu = new Product("cthulhu.jpg", "Images/cthulhu.jpg");
const dogduck = new Product("dog-duck.jpg", "Images/dog-duck.jpg");
const dragon = new Product("dragon.jpg", "Images/dragon.jpg");
const pen = new Product("pen.jpg", "Images/pen.jpg");
const petsweep = new Product("pet-sweep.jpg", "Images/pet-sweep.jpg");
const scissors = new Product("scissors.jpg", "Images/scissors.jpg");
const shark = new Product("shark.jpg", "Images/shark.jpg");
const sweep = new Product("sweep.jpg", "Images/sweep.png");
const tauntaun = new Product("tauntaun.jpg", "Images/tauntaun.jpg");
const unicorn = new Product("unicorn.jpg", "Images/unicorn.jpg");
const watercan = new Product("water-can.jpg", "Images/water-can.jpg");
const wineglass = new Product("wine-glass.jpg", "Images/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick);
