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

  // if (product1 === product2) {
  //   product2 = randomNumber();
  // }
  // if (product1 === product3) {
  //   product3 = randomNumber();
  // }

  // if (product2 === product3) {
  //   product3 = randomNumber();
  // }

  while (product2 === product1 || product2 === product3) {
    product2 = randomNumber();
  }
  while (product3 === product1 || product3 === product2) {
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
        allProducts[i].clicks++;
        break;
      }
    }
    renderProducts();
  }

  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    resultButton.addEventListener("click", renderChart);
    resultButton.className = "clicks-allowed";
  }
}

document.getElementById("resultsBtn").addEventListener("click", renderResults);

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} time.`;
    ul.appendChild(li);
  }
}

const bag = new Product("R2D2 suitcase", "Images/bag.jpg");
const banana = new Product("Banana slicer", "Images/banana.jpg");
const bathroom = new Product("potty pad holder", "Images/bathroom.jpg");
const boots = new Product("toeless boots", "Images/boots.jpg");
const breakfast = new Product(
  "ultimate breakfast maker",
  "Images/breakfast.jpg"
);
const bubblegum = new Product("meatgum", "Images/bubblegum.jpg");
const chair = new Product("raise chair", "Images/chair.jpg");
const cthulhu = new Product("cthulhu action figure", "Images/cthulhu.jpg");
const dogduck = new Product("duck duck dog", "Images/dog-duck.jpg");
const dragon = new Product("dragon meat", "Images/dragon.jpg");
const pen = new Product("pen cutlery", "Images/pen.jpg");
const petsweep = new Product("pet sweep suit", "Images/pet-sweep.jpg");
const scissors = new Product("Pizza scissors", "Images/scissors.jpg");
const shark = new Product("sleeping shark", "Images/shark.jpg");
const sweep = new Product("baby sweep suit", "Images/sweep.png");
const tauntaun = new Product("tauntaun sleeping bag", "Images/tauntaun.jpg");
const unicorn = new Product("unicorn meat", "Images/unicorn.jpg");
const watercan = new Product("infinity watering can", "Images/water-can.jpg");
const wineglass = new Product("cosy wine glass", "Images/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick);

function renderChart() {
  const productNames = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "clicks",
        data: productClicks,
        backgroundcolor: ["#0097b2;"],
        borderColor: ["#f8e505"],
        borderWidth: 1,
      },
      {
        label: "views",
        data: productViews,
        backgroundcolor: ["#f8e505"],
        borderColor: ["#0097b2"],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
  };
  const productChart = document.getElementById("chart");
  const myChart = new Chart(productChart, config);
}
console.log(renderChart);
